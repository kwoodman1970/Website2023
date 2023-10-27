import { Fragment, useState } from "react"

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
      <aside>
        <p>History of Browsers I Have Coded For:</p>
        <p><img src="throbbers/ncsamosaic.gif" alt="NCSA Mosaic" /></p>
        <p><img src="throbbers/netscape094.gif" alt="Netscape Navigator 1" /></p>
        <p><img src="throbbers/netscape304.gif" alt="Netscape Navigator 2-3" /></p>
        <p><img src="throbbers/webexplorer.png" alt="Webexplorer" /></p>
        <p><img src="throbbers/netscape480.gif" alt="Netscape Navigator 4" /></p>
        <p><img src="throbbers/internetexplorer3.gif" alt="Internet Explorer 3-4" /></p>
        <p>
          <img src="throbbers/internetexplorer6me.gif" alt="Internet Explorer 5-6" />
          <img src="throbbers/internetexplorer6xp.gif" alt="Internet Explorer 5-6" />
        </p>
        <p><img src="throbbers/netscape623.gif" alt="Netscape Navigator 6" /></p>
        <p><img src="throbbers/netscape9006.gif" alt="Netscape Navigator 7-9" /></p>
        <p><img src="throbbers/seamonkey.png" alt="Seamonkey" /></p>
        <p><img src="throbbers/mozilla.gif" alt="Firefox" /></p>
        <p><img src="throbbers/safari.png" alt="Safari" /></p>
      </aside>
      <section>
        <select onChange={(event) => setCurrentWebsite(websites[event.currentTarget.value])}>
          <option value={null}>--Select--</option>
          {
            websites.map((info, index) =>
              <option key={index} value={index}>{info.name}</option>)
          }
        </select>
        {
          currentWebsite ?
            <p>
              Status:  {currentWebsite.status}<br />
              {currentWebsite.description}
            </p> :
            <p />
        }
      </section>

      <section>
        {
          currentWebsite ?
            <iframe src={currentWebsite.href} title={currentWebsite.name}
              sandbox="allow-modals allow-scripts" /> :
            <p>
              These are some of the websites that I&apos;ve built for others in times of yore.
              They&apos;re all defunct now because their owners are either no longer operating
              or have since replaced them with new websites.
            </p>
        }
      </section>
    </Fragment>
  )
}

export default MuseumPage;
