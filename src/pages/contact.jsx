import { Fragment } from "react"

import HideText from "../components/HideText";

import "./contact.css";

const texts      = ["kwoodman", "telusplanet", "net"];
const separators = "@.";
const protocol   = "mailto";

let link = "";

for (let i = 0; i < texts.length; i++)
{
  link += texts[i];

  if ((i < separators.length) && (i < (texts.length - 1)))
    link += separators[i];
}

function setHref(e)
{
  e.currentTarget.href = protocol + ":" + link;
}

function setAction(e)
{
  e.currentTarget.action = protocol + ":" + link + "?subject=Message from the Website";
}

function ContactPage()
{
  return (
    <Fragment>
      <main>
        <h2>How to Contact Me</h2>
        <p>
          The best way to contact me is by e-mail:{"  "}
          <a id="hiddenlink" href="" onClick={setHref}>
            <HideText texts={texts} separators={separators} />
          </a>
        </p>

        <hr />

        <section style={{display:  "inline-block"}}>
          <p>
            You can use this form to quickly send me a message through your own e-mail
            program:
          </p>

          <form method="post" action="" encType="text/plain" onSubmit={setAction}>
            <table>
              <tbody>
                <tr>
                  <td>Your name is:</td>
                  <td><input name="RealName" type="text" size="40" /></td>
                </tr>
                <tr>
                  <td>Your message is:</td>
                  <td><textarea name="Message" wrap="soft" rows="12" cols="40" /></td>
                </tr>
              </tbody>
            </table>

            <input type="submit" value="Send Now"/>
            <input type="reset" value="Start Over" />
          </form>
        </section>

        <a className="QR" href="https://linkedin.com/in/woodmankevin/">
          <figure>
            <img src="linkedin_qr.svg" alt="LinkedIn QR Code" />
            <figcaption style={{gridTemplateColumns:  "112px auto"}}>
              <img src="LinkedIn_Logo.svg" alt="LinkedIn Profile" />
              <p  style={{margin:  "auto 19px auto 0px", textAlign:  "center"}} >
                View My LinkedIn<sup>&reg;</sup> Profile
              </p>
            </figcaption>
          </figure>
        </a>

        <a className="QR" href="https://github.com/kwoodman1970/">
          <figure>
            <img src="github_qr.svg" alt="GitHub QR Code" />
            <figcaption style={{gridTemplateColumns:  "auto", }}>
              <img src="GitHub_Logo.svg" alt="GitHub Portfolio" />
            </figcaption>
          </figure>
        </a>
      </main>
    </Fragment>)
}

export default ContactPage;
