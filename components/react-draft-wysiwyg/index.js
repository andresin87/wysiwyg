/**
 * Created by alucas on 2/12/16.
 */

import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';

class ReactDraftWysiwyg extends Component {
  constructor() {
    super();
    this.state = { editorContents: [] };
    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange(editorContent, index) {
    let editorContents = this.state.editorContents;
    editorContents[index] = editorContent;
    editorContents = [...editorContents];
    this.setState({
      editorContents,
    });
  }

  render() {
    return (
      <Editor
        {...this.props}
      />
    );
  }
}

ReactDraftWysiwyg.propTypes = {
  onChange: React.PropTypes.func,
};

// Wysiwyg.defaultProps = {
//   onChange: () => {
//     console.log('onChange');
//   },
// };

export { ReactDraftWysiwyg };
