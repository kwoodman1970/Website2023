import useFetch from "react-fetch-hook";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import "./portfolio.css";

/*
Rather than manually synchronize and/or convert the portfolio's README.md file to HTML, this
component pulls it directly from the repository and renders it automatically.  The cost is a
brief delay while the README.md file is fetched.

If the title of the README.md file is changed then there are two places in this file that
should be changed to match it -- one is for when the file is being fetched and the other is for
when there's an error on the fetch.  If these texts aren't all the same then the page will have
a jarring effect.
*/

const URLRoot   = "https://raw.githubusercontent.com/kwoodman1970/kwoodman1970/main/";
const readmeURL = URLRoot + "README.md";

function PortfolioPage()
{
  /*
  HACK!

  There's a defect in the "useFetch" hook:  if a formatter is specified and there's a fetch
  error then the "error" constant isn't populated.  A special error-throwing formatter function
  is therefore required to properly detect a failed fetch operation.

  If that defect is ever corrected then the special formatter function will become deprecated.
  */

  function formatter(response)
  {
    /*
    This function returns the fetch response's body converted to text or throws an error if the
    request failed.

    "response" is the fetch response.
    */

    if (!response.ok)
    {
      const error = new Error("Fetch error");

      error.status     = response.status;
      error.statusText = response.statusText;

      throw error;
    }

    return response.text();
  }

  // const {isLoading, data, error} = useFetch(readmeURL, {formatter:  (res) => res.text()});
  const {isLoading, data, error} = useFetch(readmeURL, {formatter:  formatter});

  if (isLoading)
    return (
      <main>
        {/* This heading text should be the same as the title in the README.md file. */}
        <h2>My Online Digital Portfolio</h2>

        <p>Fetching portfolio &ndash; please stand by...</p>
      </main>
    );
  else if (error)
  {
    console.log(`Failed to fetch URL "${readmeURL}"`);
    console.log(`Response status = ${error.status}:  "${error.statusText}"`);

    return (
      <main>
        {/* This heading text should be the same as the title in the README.md file. */}
        <h2>My Online Digital Portfolio</h2>

        <p>Unable to fetch portfolio.</p>
        <p>
          Response status:  <b>{error.status}</b><br />
          Response message:  <b>{error.statusText}</b>
        </p>

        <hr />

        <p>
          Well, <i>that</i> wasn&apos;t supposed to happen.  Please accept my apologies.
          You can have a look at
          {" "}<a href="https://github.com/kwoodman1970">my GitHub page</a> while I don my
          powered armour and go bug-hunting.
        </p>
      </main>
    );
  }
  else
  {
    /*
    The Markdown text needs a bit of pre-processing before it can be displayed.

    First, the banner needs to be removed.  It's great for GitHub and LinkedIn but is out of
    place on the website.

    Second, since <h1 /> is used for the website's title, all Markdown headings need to be
    knocked down a level.  <h6 /> headings will become mere paragraphs.
    */

    let markdownText = data.replace("![Banner](.README/banner.jpg)", "");

    markdownText = markdownText.replaceAll("###### ", "");
    markdownText = markdownText.replaceAll("# ", "## ");

    return (
      <main>
        <section id="Portfolio">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={rehypeRaw}>{markdownText}</Markdown>
        </section>

        <hr />

        <p>
          <b>Fun Fact:</b> This website is one of the projects in my online
          portfolio.  <i>How meta is that?</i>
        </p>
      </main>
    );
  }
}

export default PortfolioPage;
