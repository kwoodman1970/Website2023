import { Fragment } from "react"

function PortfolioPage()
{
  return (
    <Fragment>
      <main>
        <h2 id="my-online-digital-portfolio">My Online Digital Portfolio</h2>
        <p>
          Here you&#39;ll find various projects using a range of technologies that I&#39;ve worked
          on over the years. It&#39;s a showcase of my skills, learnings and experience.
        </p>
        <p>
          <strong>NOTE:</strong> Some of my repositories don&#39;t have a license yet. Please
          adopt a{" "}
          <a href="https://choosealicense.com/no-permission/">
            &quot;look but don&#39;t use&quot;
          </a>{" "}
          approach with them for the time being (you might come across things that are copyrighted
          by a third party and used with permission &ndash; I cannot extend that permission to
          you). I will add licenses or copyright notices to all of my public repositories in the
          near future.
        </p>
        <hr />
        <p>In more-or-less reverse order of chronology:</p>
        <h3 id="-extradeept-https-github-com-kwoodman1970-extradeept-python-">
          <a href="https://github.com/kwoodman1970/ExtrAdeept/">ExtrAdeept</a> (Python)
        </h3>
        <p>
          This is my current project. It&#39;s a Python library for controlling{" "}
          <a href="https://www.adeept.com/">Adeept&#39;s</a>{" "}
          <a href="https://www.raspberrypi.org/">Raspberry Pi</a>-based{" "}
          <a href="http://www.adeept.com/c/robotics_0416/">robot kits</a>. The goal is to have a
          library of classes for creating objects that interact with the components (e.g. motors,
          lights and sensors) that are connected to the{" "}
          <a href="https://www.adeept.com/search/?&amp;Keyword=hat&amp;Price=20-40">HAT</a>, and
          to be able to create an object for the machine that&#39;s formed by such components
          (e.g. an articulating arm, a car or a tank).
        </p>
        <h3 id="-inceptionu-project3a-https-github-com-kwoodman1970-inceptionu-project3a-react-javascript-">
          <a href="https://github.com/kwoodman1970/InceptionU-Project3a">InceptionU-Project3a</a>{" "}
          (React, JavaScript)
        </h3>
        <p>
          For Project 3 at <a href="https://www.inceptionu.com/">InceptionU</a>, we were to work
          on real-world web applications for real-world clients. Extra credit was given for using{" "}
          <a href="https://react.dev/learn">React components</a>, user authentication, having a
          second application for administrators, and a number of other things.
        </p>
        <p>
          We had the privilege of working on{" "}
          <a href="https://www.petstarz.ca/">PAWSitive PetStarz</a> &ndash; a web application for
          helping pet adopters connect with ethicial, humane pet suppliers. We were given a
          codebase that had been built by a team of students at{" "}
          <a href="https://www.sait.ca/">SAIT</a>, and our primary task was to create a set of
          forms for letting pet suppliers input their pets and associated records into the
          application.
        </p>
        <p>
          This repository does <em>not</em> contain the complete application &ndash; it&#39;s just
          a small subset and it only contains the files that we worked on. You <em>can</em> see
          the fruits of our labours in our{" "}
          <a href="https://www.youtube.com/watch?v=3aLnxrPMmDY">demonstration video</a>, though.
        </p>
        <h3 id="-inceptionu-project2-https-github-com-kwoodman1970-inceptionu-project2-react-javascript-">
          <a href="https://github.com/kwoodman1970/InceptionU-Project2">InceptionU-Project2</a>{" "}
          (React, JavaScript)
        </h3>
        <p>
          For Project 2 at <a href="https://www.inceptionu.com/">InceptionU</a>, we were to make a
          full stack app that addresses a unique challenge or problem. Extra credit was given for
          implementing full{" "}
          <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">
            CRUD functionality
          </a>
          , having more than one or two pages, using a document-style database (like{" "}
          <a href="https://www.mongodb.com/">MongoDB</a>), <a href="https://react.dev/">React</a>{" "}
          with a context API, and a number of other things.
        </p>
        <p>
          Our submission was an application for individuals to invite their friends to join in
          pop-up, ad-hoc phyiscal activites around the city. We used{" "}
          <a href="https://react.dev/">React</a> with a context for userID and stored data in JSON
          files that are saved when the server receives a SIGINT (Ctrl-C) signal.
        </p>
        <p>
          We didn&#39;t get as far with this project as we would&#39;ve liked, but that&#39;s okay
          &ndash; for us, the true goal of this project was to learn.
        </p>
        <h3 id="-inceptionu-project1-https-github-com-kwoodman1970-inceptionu-project1-javascript-">
          <a href="https://github.com/kwoodman1970/InceptionU-Project1">InceptionU-Project1</a>{" "}
          (JavaScript)
        </h3>
        <p>
          For Project 1 at <a href="https://www.inceptionu.com/">InceptionU</a>, we were to make a
          backend-only system that would respond to HTTP GET requests (e.g. through{" "}
          <a href="https://curl.se/">cURL</a> or <a href="https://www.postman.com/">Postman</a>).
          Extra credit was given for supporting additional HTTP request types, using persistant
          storage and creating an <a href="https://www.openapis.org/">OpenAPI</a> specification.
        </p>
        <p>
          My submission was a proof-of-concept of how mentors and protégés can connect. It
          implements full{" "}
          <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">
            CRUD functionality
          </a>{" "}
          for individuals, requests for help and offers of help. Data is stored in JSON files that
          are saved when the server receives a SIGINT (Ctrl-C) signal.
        </p>
        <p>
          Everyone who attended the demo was <em>very</em> impressed!
        </p>
        <h3 id="-bottledwaterglowlamp-https-github-com-kwoodman1970-bottledwaterglowlamp-html-css-javascript-">
          <a href="https://github.com/kwoodman1970/BottledWaterGlowLamp">BottledWaterGlowLamp</a>{" "}
          (HTML/CSS/JavaScript)
        </h3>
        <p>
          I started making this some time around 2016 as an exercise while I was self-learning how
          to make progressive web apps that can run unaltered universally on any mobile device. It
          uses the now-obsolete{" "}
          <a href="https://en.wikipedia.org/wiki/Cache_manifest_in_HTML5">appcache manifest</a>{" "}
          method.
        </p>
        <p>
          I was inspired to create this after seeing a similar app on an app store and saying to
          myself, &quot;Cool! I think I can do better.&quot;
        </p>
        <h3 id="train-conference-websites-html-css-javascript-">
          TRAIN Conference Websites (HTML/CSS/JavaScript)
        </h3>
        <p>
          <a href="https://kwoodman1970.github.io/TRAINConference/">[Web Page View]</a>
          <br />
          <a href="https://github.com/kwoodman1970/TRAINConference/">[Repository View]</a>
        </p>
        <p>
          These are websites that I created as a volunteer for TRAIN Conference.{" "}
          <strong>
            They&#39;re highly primitive in appearance and implementation by today&#39;s
            standards,
          </strong>{" "}
          but they complied with the standards &amp; best practices of the day and demonstrate how
          my skills improved &amp; my experience increased year after year.
        </p>
        <h3 id="-platform-c-c-">
          <a href="">Platform</a> (C/C++)
        </h3>
        <p>
          In the late 1990&#39;s, as I was nearing the end of my days as a university student, I
          was keenly interested in multi-platform software development but dismayed by the
          diversity of compiler macros that each C/C++ compiler manufacturer used. This
          project&#39;s goal was to bring order to this chaos by implementing a common set of
          macros that would make multi-platform coding easier.
        </p>
        <h3 id="-datastructures-https-github-com-kwoodman1970-datastructures-c-">
          <a href="https://github.com/kwoodman1970/DataStructures">DataStructures</a> (C++)
        </h3>
        <p>
          In the mid 1990&#39;s, I was introduced to data structures for the first time in a
          post-secondary course that used Pascal (specifically, Turbo Pascal 5.5). When I later
          returned to full-time university studies and learned C++, I immediately recognized the
          potential of implementing data structures as template classes.
        </p>
        <hr />
        <p>
          <em>
            I have additional projects (e.g. VBA) that will be included in this portfolio in the
            near future. Stay tuned!
          </em>
        </p>
      </main>
    </Fragment>
  );
}

export default PortfolioPage;
