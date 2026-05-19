import PropTypes from "prop-types";

function NotFoundPage({ referrerURL }) {
  const requestedURL = window.location.href;
  const issueTitle = encodeURIComponent("404 Error:  Page Not Found");
  const issueBody = encodeURIComponent(
    "# What's the issue?\n" +
    "I encountered a 404 error when trying to access a page on your website.\n\n" +
    "## URL that didn't work:\n" +
    "`" + requestedURL + "`\n\n" +
    "## Web page with the URL that didn't work:\n" +
    (referrerURL !== "" ? "`" + referrerURL + "`" : "Manual entry, bookmark, or undetermined") + "\n\n" +
    "## What I expected:\n" +
    "(Please briefly describe what you were looking for or what you expected to find)\n\n" +
    "## Additional context:\n" +
    "(Please mention any other details that might help)"
  );
  const githubIssueUrl = "https://github.com/kwoodman1970/Website2023/issues/new?title=" +
    issueTitle + "&body=" + issueBody;

  const isFromThisSite = referrerURL.startsWith(window.location.origin);
  const isFromExternalSite = (referrerURL !== "" && !isFromThisSite);
  const isDirectAccess = (referrerURL === "");

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
            <strong>You got here from a link on this website.</strong>  Please{" "}
            <a href={githubIssueUrl} target="_blank" rel="noopener noreferrer">report this
            broken link</a> so that I can fix it.  You can be sure that I&apos;ll be very
            embarrassed, but I&apos;d rather know than not know!
          </li>
        )}

        {isFromExternalSite && (
          <li>
            <strong>You got here from <a href={referrerURL}><tt>{referrerURL}</tt></a>.</strong>  That&apos;s not within my
            control.  You might want to let them know that they have a broken link so that they
            can fix it.
          </li>
        )}

        {isDirectAccess && (
          <li>
            If you typed this URL directly or used a bookmark then double-check for typos.  If
            you&apos;re still certain that this page should exist then please{" "}
            <a href={githubIssueUrl} target="_blank" rel="noopener noreferrer">let me
            know</a> so that I can do something about it.
          </li>
        )}
      </ul>
    </main>
  );
}

NotFoundPage.propTypes = {
  referrerURL: PropTypes.string.isRequired
};

export default NotFoundPage;