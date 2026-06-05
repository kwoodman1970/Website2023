import { Zoom } from "react-slideshow-image";

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
    <main>
      <aside className="SlideShow">
        <Zoom scale={0.4} indicators={() => <span className="indicator">&nbsp;</span>}
          arrows={false} cssClass="slide-container">
          {
            slideImages.map((filename) => <img key={filename}
              style={{width:  "640px", height:  "480px"}} src={filename} />)
          }
        </Zoom>
      </aside>

      <p>
        <strong>Hi, I&apos;m Kevin Woodman</strong> &ndash; a software developer with a
        computing science degree, real-world business &amp; customer service experience, and a
        genuine enthusiasm for technical things.
      </p>

      <hr />

      <section>
        <h2>About</h2>

        <blockquote>
          <p>
            &ldquo;The course of true love never did run smooth.&rdquo; &ndash;William
            Shakespeare, <cite>A Midsummer Night&apos;s Dream</cite>, I.i.134
          </p>
        </blockquote>

        <p>
          Likewise, my career has followed a winding path, taking me to places I never expected
          to go and giving me experiences that I never expected to have &ndash; and I&apos;ve
          benefitted from all of it.
        </p>

        <p>
          I started my career as a software developer after I obtained my B.Sc. in Computing
          Science (which included an internship).  I then ran my own IT consulting sole
          proprietorship for a while, which was followed by some time in retail &ndash;
          starting as a sales associate and working my way up to store manager.  I saw{" "}
          <a href="https://inceptionu.com/individuals/full-stack-developer-program">InceptionU&apos;s
          Full Stack Developer</a> course as a path back into the technology sector, and
          I&apos;m currently working on a couple of projects through{" "}
          <a href="https://newideamachine.com">New Idea Machine</a> to gain more valuable
          experience.
        </p>

        <p>
          Along the way, I picked up skills that most developers don&apos;t get from sitting at
          a keyboard: how to discover &amp; understand what end users actually need, how
          businesses operate, and how to communicate clearly with people who aren&apos;t
          technical.
        </p>

        <p>
          Now I&apos;m back where I really want to be &ndash; writing code &ndash; and
          I&apos;m bringing all of my previous experience with me.
        </p>
      </section>

      <hr />

      <section>
        <h2>What I&apos;m Working On These Days</h2>

        <p>
          I&apos;m currently working on two projects through{" "}
          <a href="https://newideamachine.com">New Idea Machine</a>:
        </p>

        <ul>
          <li>
            An <strong>open-source contractors database</strong> that will allow recruiters to
            connect with contractors for contract work
          </li>
          <li>
            A <strong>micro-credentialling platform</strong> for Untapped Energy, where
            instructors can create courses with their own media &amp; assessments, and upon
            completion, learners will receive a micro-credential they can add to LinkedIn or a
            r&eacute;sum&eacute;
          </li>
        </ul>

        <p>
          <strong>This website</strong> is a personal project where I can demonstrate my React
          skills and reveal parts of my personality that aren&apos;t apparent in formal job
          applications.
        </p>

        <p>
          Another personal project involves a <strong>robot tank</strong> that&apos;s
          controlled by a Raspberry Pi.  I decided to teach myself Python so that I could
          create my own programs for this tank and unlock its full potential.  I don&apos;t
          want it to be just a high-tech remote-controlled toy.
        </p>

        <p>
          My <a href="https://github.com/kwoodman1970">GitHub presence</a> showcases my broader
          work.
        </p>
      </section>

      <hr />

      <section>
        <h2>Current Learning Goals</h2>

        <p>
          While I like to spend time applying what I learn, I&apos;ll also take time to explore
          new things. These are the three gaps in my skill set that I&apos;m focused on
          addressing now:
        </p>

        <ul>
          <li>
            <strong>CI/CD</strong> &ndash; building reliable, automated pipelines for quality
            assurance, cybersecurity analysis, and delivery/deployment{" "}
            <em>
              (recently supplemented by <strong>InceptionU&apos;s</strong> Secure Dev Basics
              course, February 2026)
            </em>
          </li>
          <li>
            <strong>AI agents</strong> &ndash; exploring how large language models can be
            orchestrated to do genuinely useful work, and discovering where they add real value
            beyond the hype
          </li>
          <li>
            <strong>Cloud computing</strong> &ndash; learning how to use platforms like
            Microsoft Azure and AWS
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>What I Offer</h2>

        <p>
          <strong>Tech stack:</strong> React, Node.js, Express.js, MongoDB, Firebase, Python,
          C/C++, Git/GitHub, REST APIs, OpenAPI, Jest &ndash; plus a working knowledge of
          Agile/Scrum, UI/UX implementation, and technical documentation.
        </p>

        <ul>
          <li>
            A B.Sc. in Computing Science with a Business Minor, formal full-stack training
            through InceptionU, and continuous independent learning
          </li>
          <li>
            Hands-on software development experience, including measurable results: a{" "}
            <strong>90% reduction in data file sizes</strong> early in my career, and, more
            recently, a <strong>15% reduction in lines of code</strong> &amp;{" "}
            <strong>20% improvement in startup speed</strong> through optimization at{" "}
            <a href="https://newideamachine.com">New Idea Machine</a>
          </li>
          <li>
            A decade-plus of business and retail operations &ndash; understanding the{" "}
            <em>why</em> behind systems, not just the <em>how</em>
          </li>
          <li>
            <strong>First place</strong> at the 2024{" "}
            <a href="https://qai-ventures.com/hackathon">GenQ Quantum Computing Hackathon</a>,
            pitching a <a href="https://www.youtube.com/watch?v=OenIsEM3tGE">snowplow route
            optimization platform for the City of Calgary</a>
          </li>
          <li>
            Curiosity, breadth, and a demonstrated history of learning &ndash; currently diving
            into CI/CD, AI agents, and cloud platforms
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Explore</h2>

        <p>
          On this website, you&apos;ll find my <a href="/partfolio">projects portfolio</a>,
          my <a href="/museum">museum of obsolete websites</a>, and{" "}
          <a href="/contact">how to get in touch with me</a>.
        </p>

        <p>
          <em>If you need a break, there&apos;s always the <a href="/humour">humour
          page</a>.</em>
        </p>
      </section>
    </main>
  );
}

export default HomePage;
