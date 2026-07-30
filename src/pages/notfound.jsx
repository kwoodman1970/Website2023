import PropTypes from "prop-types";

function NotFoundPage({ referrerURL }) {
  const requestedURL = window.location.href;
  const correctedReferrerURL = (referrerURL !== requestedURL ? referrerURL : "");

  function buildIssueUrl(expectedOutcome, additionalInfo) {
    console.assert(typeof expectedOutcome === "string");
    console.assert(typeof additionalInfo === "string");

    const issueTitle = encodeURIComponent("404 Error:  Page Not Found");
    const issueBody = encodeURIComponent(
      "# What's the issue?\n" +
      "I encountered a 404 error when trying to access a page on your website.\n\n" +
      "## URL that didn't work:\n" +
      "`" + requestedURL + "`\n\n" +
      "## Web page with the URL that didn't work:\n" +
      (correctedReferrerURL !== "" ? "`" + correctedReferrerURL + "`" :
        "Manual entry, bookmark, or undetermined") + "\n\n" +
      "## What I expected:\n" +
      (expectedOutcome !== "" ? expectedOutcome :
        "(Please briefly describe what you were looking for or what you expected to find)") +
      "\n\n" +
      "## Additional context:\n" +
      (additionalInfo !== "" ? additionalInfo :
        "(Please mention any other details that might help)"));

    return "https://github.com/kwoodman1970/Website2023/issues/new?title="
      + issueTitle + "&body=" + issueBody;
  }

  function handleSubmit(event) {
    console.assert(event instanceof Event);

    event.preventDefault();

    const formData = new FormData(event.target);
    const expectedOutcome = formData.get("expectedOutcome") || "";
    const additionalInfo = formData.get("additionalInfo") || "";

    window.open(buildIssueUrl(expectedOutcome.trim(), additionalInfo.trim()), "_blank", "noopener,noreferrer");
  }

  const isFromThisSite = correctedReferrerURL.startsWith(window.location.origin);
  const isFromExternalSite = ((correctedReferrerURL !== "") && !isFromThisSite);
  const isDirectAccess = (correctedReferrerURL === "");

  return (
    <main>
      <h2>404 &ndash; Page Not Found</h2>

      <p>
        Well, <em>this</em> is awkward.  The page that you&apos;re looking for doesn&apos;t
        exist.
      </p>

      <p>
        It might have been moved or deleted, or perhaps it never existed in the first place.
      </p>

      <p>
        Here are some options:
      </p>

      <ul>
        <li>Check the URL for typos</li>
        <li>Use the navigation menu to find what you&apos;re looking for</li>
        <li>
          Go directly to the <a href="/">home page</a> (do not pass Go; do not collect $200)
        </li>

        {isFromThisSite && (
          <li>
            <strong>You got here from a link on this website.</strong>  Please report this
            broken link so that I can fix it.  You can be sure that I&apos;ll be very
            embarrassed, but I&apos;d rather know than not know!
          </li>
        )}

        {isFromExternalSite && (
          <li>
            <strong>You got here from
            <a href={correctedReferrerURL}><tt>{correctedReferrerURL}</tt></a>.</strong>
            That&apos;s not within my control.  You might want to let them know that they have
            a broken link so that they can fix it.
          </li>
        )}

        {isDirectAccess && (
          <li>
            If you typed this URL directly or used a bookmark then double-check for typos.
          </li>
        )}

        {(isFromExternalSite || isDirectAccess) && (
          <li>
            <strong>If you&apos;re still certain that this page should exist</strong> then
            please report this broken link so that I can do something about it.
          </li>
        )}
      </ul>

      <hr />

      <h2>Report a Broken Link</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <em>You will be taken to my website&apos;s GitHub Issues page.  You&apos;ll need to
          be logged in there to finish submitting this report.</em>
        </p>

        <p>
          Request URL:  <tt>{requestedURL}</tt><br />
          Referrer URL: {
            (correctedReferrerURL !== "" ? <tt>{correctedReferrerURL}</tt> :
              <em>unknown</em>)
          }
        </p>

        <p>
          <label htmlFor="expectedOutcome">
            What were you expecting to find?
          </label>
        </p>

        <p>
          <textarea
            id="expectedOutcome"
            name="expectedOutcome"
            rows="4"
            cols="80"
            required
          />
        </p>

        <p>
          <label htmlFor="additionalInfo">
            Do you have any additional helpful information?
          </label>
        </p>

        <p>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            cols="80"
          />
        </p>

        <p>
          <button type="submit">
            Report this issue on GitHub
          </button>
        </p>
      </form>
    </main>
  );
}

NotFoundPage.propTypes = {
  referrerURL: PropTypes.string.isRequired
};

export default NotFoundPage;