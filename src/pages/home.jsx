import {Fragment} from "react"

import {Zoom} from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import "./home.css";

const slideImages = ["./slides/closeup.jpg",
                     "./slides/readingmenu.jpg",
                     "./slides/vallartazipline.jpg",
                     "./slides/formaldining.jpg",
                     "./slides/pawsitivepetstarz.jpg",
                     "./slides/yukon.jpg",
                     "./slides/sailing2.jpg",
                     "./slides/dunnsriverfalls1.jpg",
                     "./slides/dunnsriverfalls2.jpg",
                     "./slides/harrisonhotsprings.jpg",
                     "./slides/relaxing1.jpg",
                     "./slides/relaxing2.jpg",
                     "./slides/relaxing3.jpg",
                     "./slides/yachting.jpg"];


function HomePage()
{
  return (
    <Fragment>
      <main>
        <div id="SlideShow">
          <div>
            <Zoom scale={0.4} indicators={() => <span className="indicator">O</span>}
              arrows={false} cssClass="slide-container">
              {
                slideImages.map((filename, index) => <img key={index}
                  style={{width:  "640px", height:  "480px"}} src={filename} />)
              }
            </Zoom>
          </div>
        </div>


        <p>
          The past few months have been some of the most challenging&nbsp;&ndash; and most
          valuable&nbsp;&ndash; for me in recent years.  I&apos;ve taken time to do some much-needed
          cleaning; I&apos;ve also taken time to take stock and re-evaluate what I&apos;d like to do as a
          career. After a bit of initial floundering, I attended a number of extremely helpful
          workshops put on by <a href="http://careerinsite.alberta.ca/">Alberta Learning Information
          Services</a> (<i>I highly recommended them</i> to <i>anyone</i> who&apos;s between jobs) which
          helped me decide on and prepare for a new career in <b>website development</b>.
        </p>

        <p>
          This new website is the latest of these preparations.
        </p>

        <p>
          I learned a number of new skills in those workshops, and I also learned a few things about
          myself&nbsp;&ndash; particularly about my personality.  It rekindled a dream that I thought
          had been lost years ago.
        </p>
      </main>
    </Fragment>
  )
}

export default HomePage;
