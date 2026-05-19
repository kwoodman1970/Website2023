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
        <li>
          If you got here via a page on this website then please{" "}
          <a href={githubIssueUrl} target="_blank" rel="noopener noreferrer">report it</a> so
          that I can fix it.  You can be sure that I&apos;ll be very embarrassed.
        </li>
      </ul>

    </main>
  );
}

NotFoundPage.propTypes = {
  referrerURL: PropTypes.string.isRequired
};

export default NotFoundPage;