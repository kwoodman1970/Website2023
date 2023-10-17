import { Fragment } from "react"

function PortfolioPage()
{
  return (
    <Fragment>
      <p>
        These are some of the websites that I&apos;ve built for others over the years.  Most of them are
        no longer operating or have since moved on to new websites.
      </p>

      <ul>
        <li>
          <a href="ourgardens/"><b>Our Gardens Inc.</b></a> (no longer in business)&nbsp;&ndash;
          This was built before HTML 4.01 and CSS had been standardized.  It was simple, but it did
          what they wanted it to do.
        </li>
        <li>
          <a href="ourgardens2/"><b>Our Gardens Inc.</b></a> (no longer in business)&nbsp;&ndash;
          An updated version that complied with the standards of the day.
        </li>
        <li>
          <a href="http://www.trainconference.com/"><b>TRAIN Conference</b></a> (ceased
          operating)&nbsp;&ndash; This is one of the websites that I&apos;m proudest of.
        </li>
        <li>
          <a href="stelizabethseton/"><b>St. Elizabeth Seton School</b></a>&nbsp;&ndash; Someone
          referred this school to me to replace their old website.  They have a new website, now.
        </li>
        <li>
          <a href="stsebastian/"><b>St. Sebastian Elementary School</b></a>&nbsp;&ndash; Word
          started getting around, and the principal of this newly-built school asked me build their
          first website to help them get ready for their grand opening.  They have a new website,
          now, too.
        </li>
      </ul>

    </Fragment>
  )
}

export default PortfolioPage;
