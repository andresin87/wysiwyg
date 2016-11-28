/**
 * Created by alucas on 27/11/16.
 */
import React from 'react';
import { CompositeDecorator, Editor, EditorState } from 'draft-js';

import { styles, HashtagSpan, HandleSpan, handleStrategy, hashtagStrategy } from './decorators';

class TweetEditor extends React.Component {
  constructor() {
    super();
    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: HandleSpan,
      },
      {
        strategy: hashtagStrategy,
        component: HashtagSpan,
      },
    ]);

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator),
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });
    this.logState = () => console.log(this.state.editorState.toJS());
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Write a tweet..."
            ref="editor"
            spellCheck
          />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}

export { TweetEditor };
