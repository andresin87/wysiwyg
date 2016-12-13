/**
 * Created by alucas on 2/12/16.
 */
/**
 * Created by alucas on 2/12/16.
 */

import React, { Component } from 'react';

import { EditorState } from 'draft-js';

import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';

class DraftJsPluginsWysiwyg extends Component {
  constructor() {
    super();
    this.state = { editorContents: [] };
    this.plugins = {};
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      editorState: this.props.editorContents,
    });
    switch (this.props.toolbar) {
      case 'inline':
        this.plugins.inlineToolbarPlugin = createInlineToolbarPlugin();
        break;
      case 'side':
        this.plugins.sideToolbarPlugin = createSideToolbarPlugin();
        break;
      case null:
      case 'none':
      default:
        break;
    }
  }

  onChange(editorState) {
    if (!this.props.onChange) {
      this.setState({ editorState });
    } else {
      this.props.onChange();
    }
  }

  render() {
    const plugins = Object.keys(this.plugins).map((k) => (this.plugins[k]));

    // debugger; // eslint-disable-line
    if (this.props.toolbar === 'inline') {
      if (!this.toolbar) {
        const { InlineToolbar } = this.plugins.inlineToolbarPlugin;
        // https://github.com/draft-js-plugins/draft-js-plugins/issues/531
        // can check this variable value error importing 'getVisibleSelectionRect' from draft-js
        // const selectionRect = (0, getVisibleSelectionRect)(window);

        this.toolbar = (
          <div
            style={{
              position: 'absolute',
              top: '-44px',
              left: '-57px',
              display: 'block',
              width: '100%',
            }}
          >
            <InlineToolbar />
          </div>
        );
      }
    } else if (this.props.toolbar === 'side') {
      const { SideToolbar, initialize } = this.plugins.sideToolbarPlugin;
      // https://github.com/draft-js-plugins/draft-js-plugins/issues/531
      // can check this variable value error importing 'getVisibleSelectionRect' from draft-js
      // const selectionRect = (0, getVisibleSelectionRect)(window);
      if (this.editor) {
        const editor = this.editor;
        editor.setEditorState = (editorState) => {
          this.editor.onChange(editorState);
        };
        initialize(editor);
        if (!this.toolbar) {
          this.toolbar = (
            <div
              style={{
                position: 'absolute',
                top: '-45px',
                left: '-20px',
                display: 'block',
                width: '100%',
              }}
            >
              <SideToolbar />
            </div>
          );
        }
      }
    }

    return (
      <div
        className="DraftJsPluginsWysiwygWrapper"
      >
        <div
          className="WysiwygWrapper"
        >
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            {...this.props}
            ref={(element) => { this.editor = element; }}
          />
          {this.toolbar}
        </div>
      </div>
    );
  }
}

DraftJsPluginsWysiwyg.propTypes = {
  editorContents: React.PropTypes.object,
  onChange: React.PropTypes.func,
  toolbar: React.PropTypes.oneOf([null, 'none', 'inline', 'side']),
  // readOnly: React.PropTypes.bool,
  editorState: React.PropTypes.object,
};

DraftJsPluginsWysiwyg.defaultProps = {
  toolbar: null,
  editorContents: EditorState.createEmpty(),
};

// DraftJsPluginsWysiwyg.defaultProps = {
//   onChange: () => {
//     console.log('onChange');
//   },
// };

export { DraftJsPluginsWysiwyg };
