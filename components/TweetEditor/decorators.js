/**
 * Created by alucas on 27/11/16.
 */

import React from 'react';
/**
 * Super simple decorators for handles and hashtags, for demonstration
 * purposes only. Don't reuse these regexes.
 */
const HANDLE_REGEX = /\@[\w]+/g;  // eslint-disable-line
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g; // eslint-disable-line

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;
  while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function handleStrategy(contentState, contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentState, contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 40,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  handle: {
    color: 'rgba(98, 177, 254, 1.0)',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
  hashtag: {
    color: 'rgba(95, 184, 138, 1.0)',
  },
};
/* eslint-disable */
const HandleSpan = (props) => (
  <span
    style={styles.handle}
    data-offset-key={props.offsetKey}
  >
    {props.children}
  </span>
);

const HashtagSpan = (props) => (
  <span
    style={styles.hashtag}
    data-offset-key={props.offsetKey}
  >
    {props.children}
  </span>
);
/* eslint-enable */

export { styles, HashtagSpan, HandleSpan, handleStrategy, hashtagStrategy };
