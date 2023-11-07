import { Fragment, useState } from "react"

import "./museum.css";

const websites = [];

websites.add = function(name, status, href, description)
{
  this.push({name, status, href, description});
}

websites.add("Our Gardens Inc. V1", "No longer in business",
  "./websites/ourgardens/index.html",
  "This was built before HTML 4.01 and CSS had been standardized.  It was simple, but it did "
  + "what they wanted it to do.");

websites.add("Our Gardens Inc. V2", "No longer in business",
  "./websites/ourgardens2/index.html",
  "An updated version that complied with the standards of the day.");

websites.add("TRAIN Conference", "Ceased operating",
  "https://kwoodman1970.github.io/TRAINConference/2007",
  "This is one of the websites that I'm proudest of.");

websites.add("St. Elizabeth Seton School", "Superceded",
  "./websites/stelizabethseton/home.html",
  "Someone referred this school to me to replace their old website.");

websites.add("St. Sebastian Elementary School", "Superceded",
  "./websites/stsebastian/index.html",
  "Word started getting around, and the principal of this newly-built school asked me to "
  + "build their first website to help them get ready for their grand opening.");

function MuseumPage()
{
  const [currentWebsite, setCurrentWebsite] = useState(null);

  return (
    <Fragment>
      <main>
        <section id="Selector">
          <h2>My Website Museum</h2>

          <select
            onChange={(event) => setCurrentWebsite(websites[event.currentTarget.value])}>
            <option value={null}>--Select--</option>
            {
              websites.map((info, index) =>
                <option key={index} value={index}>{info.name}</option>)
            }
          </select>
          {
            currentWebsite && <>&nbsp;Status:  {currentWebsite.status}</>
          }
        </section>

        <section id="View">
          {
            currentWebsite ?
              <iframe src={currentWebsite.href} title={currentWebsite.name}
                sandbox="allow-modals allow-scripts" /> :
              <>
                <p>
                  These are some of the websites that I&apos;ve built for others in times of
                  yore.  They&apos;re all defunct now because their owners are either no
                  longer operating or have since replaced them with new websites.
                </p>

                <p>
                  Most of them aren&apos;t worth including in my online portfolio because
                  they&apos;re so archaic by today&apos;s standards and have little value to
                  the outside world, but I will let them live on here as a testament to my
                  longevity.
                </p>

                <h3>
                  Browsers I Have Coded For
                </h3>

                <p style={{display:  "flex", textAlign:  "justify-all", alignItems:  "center", backgroundColor:  "magenta"}}>
                  <img src="throbbers/ncsamosaic.gif" alt="NCSA Mosaic" />
                  <img src="throbbers/netscape094.gif" alt="Netscape Navigator 1" />
                  <img src="throbbers/netscape304.gif" alt="Netscape Navigator 2-3" />
                  <img src="throbbers/webexplorer.png" alt="Webexplorer" />
                  <img src="throbbers/netscape480.gif" alt="Netscape Navigator 4" />
                  <img src="throbbers/internetexplorer3.gif" alt="Internet Explorer 3-4" />
                  <span style={{display:  "inline-block"}}>
                    <img src="throbbers/internetexplorer6me.gif" alt="Internet Explorer 5-6" /><br />
                    <img src="throbbers/internetexplorer6xp.gif" alt="Internet Explorer 5-6" />
                  </span>
                  <img src="throbbers/netscape623.gif" alt="Netscape Navigator 6" />
                  <img src="throbbers/netscape9006.gif" alt="Netscape Navigator 7-9" />
                  <img src="throbbers/seamonkey.png" alt="Seamonkey" />
                  <img src="throbbers/mozilla.gif" alt="Firefox" />
                  <img src="throbbers/safari.png" alt="Safari" />
                </p>
              </>
          }
        </section>

        <footer>
          {currentWebsite?.description}
        </footer>
      </main>
    </Fragment>
  )
}

export default MuseumPage;
