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
    console.log('componentWillMount');
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
    // console.log('onChange', editorState);
    if (!this.props.onChange) {
      this.setState({ editorState });
    } else {
      this.props.onChange();
    }
  }

  render() {
    const plugins = Object.keys(this.plugins).map((k) => (this.plugins[k]));
    console.log('plugins', plugins);

    let toolbar = null;
    if (this.props.toolbar === 'inline') {
      const { InlineToolbar } = this.plugins.inlineToolbarPlugin;
      // https://github.com/draft-js-plugins/draft-js-plugins/issues/531
      // can check this variable value error importing 'getVisibleSelectionRect' from draft-js
      // const selectionRect = (0, getVisibleSelectionRect)(window);
      toolbar = (
        <div
          style={{
            position: 'absolute',
            top: '-64px',
            left: '-73px',
            display: 'block',
            width: '100%',
          }}
        >
          <InlineToolbar />
        </div>
      );
    } else if (this.props.toolbar === 'side') {
      const { SideToolbar } = this.plugins.sideToolbarPlugin;
      // https://github.com/draft-js-plugins/draft-js-plugins/issues/531
      // can check this variable value error importing 'getVisibleSelectionRect' from draft-js
      // const selectionRect = (0, getVisibleSelectionRect)(window);
      toolbar = (
        <SideToolbar />
      );
    }

    return (
      <div
        className="DraftJsPluginsWysiwygWrapper"
        style={{ position: 'relative' }}
      >
        <div
          className="WysiwygWrapper"
        >
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
            {...this.props}
          />
          {toolbar}
        </div>
      </div>
    );
  }
}

DraftJsPluginsWysiwyg.propTypes = {
  editorContents: React.PropTypes.object,
  onChange: React.PropTypes.func,
  toolbar: React.PropTypes.oneOf([null, 'none', 'inline', 'side']),
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
