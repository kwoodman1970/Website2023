import { Fragment } from "react";
import useFetch from "react-fetch-hook";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./portfolio.css";

const URLRoot = "https://raw.githubusercontent.com/kwoodman1970/kwoodman1970/main/";
const readmeURL = URLRoot + "README.md";

function PortfolioPage()
{
  const {isLoading, data, error} = useFetch(readmeURL, {formatter:  (res) => res.text()});

  if (isLoading)
    return (<Fragment><main>Loading...</main></Fragment>)
  else if (error)
  {
    console.log(`Failed to fetch URL "${readmeURL}"`);
    console.log(error);

    return (
      <Fragment>
        <main>
          <p>Unable to read portfolio file.</p>
          <p>Result code:  {error.status}</p>
          <p>Result status:  {error.statusText}</p>
        </main>
      </Fragment>)
  }
  else
  {
    let markdownText = data.replace("<img src=\".README/banner.jpg\" alt=\"Banner\">", "");

    markdownText = markdownText.replace("###### ", "");
    markdownText = markdownText.replace("##### ", "###### ");
    markdownText = markdownText.replace("#### ", "##### ");
    markdownText = markdownText.replace("### ", "#### ");
    markdownText = markdownText.replace("## ", "### ");
    markdownText = markdownText.replace("# ", "## ");

    return (
      <Fragment>
        <main>
          <p>
            <b>Fun Fact:</b> This website is one of the projects in my online
            portfolio.  <i>How meta is that?</i>
          </p>

          <hr />

          <section id="Portfolio">
            <Markdown remarkPlugins={[remarkGfm]}>{markdownText}</Markdown>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default PortfolioPage;
