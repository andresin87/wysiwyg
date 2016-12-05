/**
 * Created by alucas on 2/12/16.
 */
import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { Col } from 'react-bootstrap';
import { Wysiwyg } from '../';

import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';

import uploadImageCallBack from './util/uploadImageCallBack';
// import sampleEditorContent from './util/sampleEditorContent';
//
// import bold from './icons/bold.gif';
// import italic from './icons/italic.gif';
// import underline from './icons/underline.gif';
// import strikethrough from './icons/strikethrough.gif';
// import subscript from './icons/subscript.gif';
// import superscript from './icons/superscript.gif';
// import eraser from './icons/erase.gif';
// import left from './icons/left-align.gif';
// import right from './icons/right-align.gif';
// import center from './icons/center-align.gif';
// import justify from './icons/justify.gif';
// import ordered from './icons/ordered.gif';
// import unordered from './icons/unordered.gif';
// import indent from './icons/indent.gif';
// import outdent from './icons/outdent.gif';
// import link from './icons/link.gif';
// import unlink from './icons/unlink.gif';
// import image from './icons/image.gif';
// import undo from './icons/undo.gif';
// import redo from './icons/redo.gif';

class TextArea extends Component {
  constructor() {
    super();
    this.setValue = this.setValue.bind(this);
  }
  setValue(value) {
    console.log(value);
    this.setState({ value });
  }
  componentWillmount() {
    // this.state.value = this.props.value ? this.props.value : '';
  }
  render() {
    const { className, disabled } = this.props;
    const value = (this.state && this.state.value) ? this.state.value : '';
    return (
      <textarea
        style={{ height: 200 }}
        className={className}
        disabled={disabled}
        value={value}
      />
    );
  }
}

TextArea.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
};


storiesOf('Wysiwyg', module)
  .add('Output generated in HTML', (self) => {
    const me = self;
    return (
      <div className="container">
        <h1>
          Editor with output generated in HTML.
        </h1>
        <div className="demo-editorSection">
          <Col xs={8}>
            <Wysiwyg
              toolbarClassName="demo-toolbar"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              ref={(c) => { me.wysiwyg = c; }}
              onChange={(c) => {
                me.wysiwyg.onEditorChange(c, 0);
                if (me.textArea) {
                  me.textArea.setValue(draftToHtml(me.wysiwyg.state.editorContents[0]));
                }
              }}
              uploadCallback={uploadImageCallBack}
            />
          </Col>
          <Col xs={4}>
            <TextArea
              disabled
              className="demo-content no-focus"
              ref={(c) => { me.textArea = c; }}
              value=""
            />
          </Col>
        </div>
      </div>
    ); })
  .add('Output generated in MarkDown', (self) => {
    const me = self;
    return (
      <div className="container">
        <h1>
          Editor with output generated in Markdown.
        </h1>
        <div className="demo-editorSection">
          <Col xs={8}>
            <Wysiwyg
              toolbarClassName="demo-toolbar"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              ref={(c) => { me.wysiwyg = c; }}
              onChange={(c) => {
                me.wysiwyg.onEditorChange(c, 0);
                if (me.textArea) {
                  me.textArea.setValue(draftToMarkdown(me.wysiwyg.state.editorContents[0]));
                }
              }}
              uploadCallback={uploadImageCallBack}
            />
          </Col>
          <Col xs={4}>
            <TextArea
              disabled
              className="demo-content no-focus"
              ref={(c) => { me.textArea = c; }}
              value=""
            />
          </Col>
        </div>
      </div>
    ); })
  .add('content', () => (
    <div className="container" />
  ));
