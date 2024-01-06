import { Fragment } from "react";
import useFetch from "react-fetch-hook";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./portfolio.css";

const URLRoot   = "https://raw.githubusercontent.com/kwoodman1970/kwoodman1970/main/";
const readmeURL = URLRoot + "README.md";

function PortfolioPage()
{
  /*
  There's a defect in the "useFetch" component:  if a formatter is specified and there's an
  error then the "error" constant isn't populated.  A special error-trapping formatter function
  is therefore required to properly detect a failed fetch operation.

  If that defect is ever corrected then the special formatter function will become deprecated.
  */

  function formatter(response)
  {
    if (!response.ok)
    {
      const error = new Error("Fetch error");

      error.status     = response.status;
      error.statusText = response.statusText;

      throw error;
    }

    return response.text()
  }

  // const {isLoading, data, error} = useFetch(readmeURL, {formatter:  (res) => res.text()});
  const {isLoading, data, error} = useFetch(readmeURL, {formatter:  formatter});

  if (isLoading)
    return (
      <Fragment>
        <main>
          <h2>My Online Digital Portfolio</h2>

          <p>Fetching portfolio &ndash; please stand by...</p>
        </main>
      </Fragment>)
  else if (error)
  {
    console.log(`Failed to fetch URL "${readmeURL}"`);
    console.log(`Response status = ${error.status}:  "${error.statusText}"`);

    return (
      <Fragment>
        <main>
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
      </Fragment>)
  }
  else
  {
    let markdownText = data.replace("<img src=\".README/banner.jpg\" alt=\"Banner\">", "");

    markdownText = markdownText.replaceAll("###### ", "");
    markdownText = markdownText.replaceAll("# ", "## ");

    markdownText = markdownText.replaceAll("<br />", "\n");

    return (
      <Fragment>
        <main>
          <section id="Portfolio">
            <Markdown remarkPlugins={[remarkGfm]}>{markdownText}</Markdown>
          </section>

          <hr />

          <p>
            <b>Fun Fact:</b> This website is one of the projects in my online
            portfolio.  <i>How meta is that?</i>
          </p>
        </main>
      </Fragment>
    );
  }
}

export default PortfolioPage;
