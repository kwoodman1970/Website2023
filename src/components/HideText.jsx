/*
PROPERTIES
==========

texts (array of strings)
  An array of strings to concatenate together when building the text to hide.

separators (string, optional)
  A string of characters to insert between each string in "texts".  If "separators" is longer
  than the number of elements in "texts" then the trailing characters are ignored.

EXAMPLE
=======

Suppose that you want to hide the e-mail address "myself@mydomain.me" from web crawlers.
You could use the following construct:

  <HideText texts={["myself", "mydomain", "me"]} separators="@." />

The displayed text would still be "myself@mydomain.me", but each character would be inside
its own "<span>" element and interspersed with hidden random characters.

A web crawler would have no way of seeing this e-mail address, even if it stripped out all
HTML tags and focused on just the text.  Furthermore, a sophisticated web crawler that
fetches raw JSX files wouldn't be able to determine that there's an e-mail address embedded
in the <HideText> tag.
*/

import PropTypes from "prop-types";

function randomCharacter()
/*
Return a random printable letter, number or symbol.
*/
{
  const charSet = "!@#$%^*()-+[]',./";

  return charSet[Math.round(Math.random() * (charSet.length - 1))];
}

function HideText(props)
{
  const texts      = props.texts;
  const separators = props.separators;
  const textChars  = [];

  for (let i = 0; i < texts.length; i++)
  {
    for (let j = 0; j < texts[i].length; j++)
      textChars.push(texts[i][j]);

    if (separators && (i < separators.length) && (i < (texts.length - 1)))
      textChars.push(separators[i]);
  }

  const numChars = textChars.length;

  return (
    <>
      {
        textChars.map((character, index) =>
          <span key={index}><span style={{display:  "none"}}>{randomCharacter()}</span><span>{character}</span></span>)
      }
      {numChars == 0 || <span style={{display:  "none"}}>{randomCharacter()}</span>}
    </>
  );
}

HideText.propTypes = {
  texts:       PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  separators:  PropTypes.string
}

export default HideText;
