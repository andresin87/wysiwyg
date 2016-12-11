/**
 * Created by alucas on 2/12/16.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Row, Col } from 'react-bootstrap';
import { Wysiwyg } from '../';

import draftToHtml from 'draftjs-to-html';
import { stateToHTML } from 'draft-js-export-html';
import draftToMarkdown from 'draftjs-to-markdown';

import { convertToRaw, ContentState, convertFromHTML } from 'draft-js';

import { TextArea } from './util/TextArea';
import { Html } from './util/Html';
import { ImportBlock } from './util/ImportBlock';
import { WysiwygEditor } from './util/WysiwygEditor';

import uploadImageCallBack from './util/uploadImageCallBack';
import sampleEditorContent from './util/sampleEditorContent';
import { initialContentState } from './util/sampleEditorContentLink';
import { sampleMentionsArray } from './util/sampleMentionsContent';
import { sampleToolbar, sampleToolbar2, sampleToolbar3 } from './util/sampleToolbar';

storiesOf('Wysiwyg', module)
  .add('Import HTML', () => (
    <div className="container">
      <h1>
        Import HTML.
      </h1>
      <div className="demo-editorSection">
        <ImportBlock
          value="<h1>imported block</h1>"
        />
      </div>
    </div>
  ))
  .add('Upload Image', () => (
    <div className="container">
      <h1>
        Upload Image.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-wide"
            editorClassName="demo-editor"
            uploadCallback={uploadImageCallBack}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
        </Col>
      </div>
    </div>
  ))
  .add('RTLCoreStyles', (self) => {
    const me = self;
    const options = {
      inlineStyles: {
        // Override default element (`strong`).
        BOLD: { element: 'b' },
        ITALIC: {
          // Add custom attributes. You can also use React-style `className`.
          attributes: { class: 'foo' },
          // Use camel-case. Units (`px`) will be added where necessary.
          style: { fontSize: 12 },
        },
      },
    };
    return (
      <div className="container">
        <h1>
          RTLCoreStyles.
        </h1>
        <div className="demo-editorSection">
          <Row>
            <Col
              sm={12}
            >
              <Wysiwyg
                toolbarClassName="demo-toolbar"
                wrapperClassName="demo-wrapper-auto"
                editorClassName="demo-editor"
                ref={(c) => { me.wysiwyg = c; }}
                onChange={(c) => {
                  me.wysiwyg.onEditorChange(c, 0);
                  if (me.textArea) {
                    me.textAreaOut1.setValue(draftToHtml(me.wysiwyg.state.editorContents[0]));
                    me.textAreaOut2.setValue(stateToHTML((ContentState.createFromBlockArray(convertFromHTML(draftToHtml(me.wysiwyg.state.editorContents[0])))), options));
                    me.textArea.setValue(JSON.stringify(options, null, '\t'));
                    me.html1.setValue(draftToHtml(me.wysiwyg.state.editorContents[0]));
                    me.html2.setValue(stateToHTML((ContentState.createFromBlockArray(convertFromHTML(draftToHtml(me.wysiwyg.state.editorContents[0])))), options));
                  }
                }}
                initialContentState={convertToRaw(ContentState.createFromBlockArray(convertFromHTML('<p><h5>title</h5></p><p><strong>bold</strong> <em>italic</em></p>')))}
                toolbarOnFocus
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
            >
              <h4>Config Options</h4>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textArea = c; }}
                value=""
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
            >
              <h4>HTML5 normal export</h4>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textAreaOut1 = c; }}
                value=""
              />
            </Col>
            <Col
              sm={6}
            >
              <h4>HTML5 RTLCoreStyles export</h4>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textAreaOut2 = c; }}
                value=""
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
            >
              <h4>HTML5 Content</h4>
              <Html
                ref={(c) => { me.html1 = c; }}
                value=""
              />
            </Col>
            <Col
              sm={6}
            >
              <h4>HTML5 RTL Content</h4>
              <Html
                ref={(c) => { me.html2 = c; }}
                value=""
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  })
  .add('Paste From Word', (self) => {
    const me = self;
    return (
      <div className="container">
        <h1>
          Paste From Word.
        </h1>
        <div className="demo-editorSection">
          <Row>
            <Col
              sm={2}
            >
              <a href="https://gitcdn.xyz/repo/andresin87/wysiwyg/master/components/react-draft-wysiwyg/util/LoremIpsum.docx">
                <span className="fa-stack fa-5x">
                  <i className="fa fa-square-o fa-stack-2x" />
                  <i className="fa fa-file-word-o fa-stack-1x" />
                </span>
              </a>
            </Col>
            <Col
              sm={10}
            >
              <Wysiwyg
                toolbarClassName="demo-toolbar"
                wrapperClassName="demo-wrapper-auto"
                editorClassName="demo-editor"
                ref={(c) => { me.wysiwyg = c; }}
                onChange={(c) => {
                  me.wysiwyg.onEditorChange(c, 0);
                  if (me.textArea) {
                    me.textArea.setValue(draftToHtml(me.wysiwyg.state.editorContents[0]));
                    me.html.setValue(draftToHtml(me.wysiwyg.state.editorContents[0]));
                  }
                }}
                toolbarOnFocus
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
            >
              <h1>HTML5 Textarea export</h1>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textArea = c; }}
                value=""
              />
            </Col>
            <Col
              sm={6}
            >
              <h1>HTML5 Content</h1>
              <Html
                ref={(c) => { me.html = c; }}
                value=""
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  })
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
              wrapperClassName="demo-wrapper-auto"
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
              wrapperClassName="demo-wrapper-auto"
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
  .add('Output generated in JSON', (self) => {
    const me = self;
    return (
      <div className="container">
        <h1>
          Editor with output generated in JSON.
        </h1>
        <div className="demo-editorSection">
          <Col xs={8}>
            <Wysiwyg
              toolbarClassName="demo-toolbar"
              wrapperClassName="demo-wrapper-auto"
              editorClassName="demo-editor"
              ref={(c) => { me.wysiwyg = c; }}
              onChange={(c) => {
                me.wysiwyg.onEditorChange(c, 0);
                if (me.textArea) {
                  me.textArea.setValue(JSON.stringify(me.wysiwyg.state.editorContents[0], null, '\t'));
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
  .add('3 Output generated', (self) => {
    const me = self;
    return (
      <div className="container">
        <h1>
          Editor with 3 output generated.
        </h1>
        <div className="demo-editorSection">
          <Row>
            <Col xs={12}>
              <Wysiwyg
                toolbarClassName="demo-toolbar"
                wrapperClassName="demo-wrapper-auto"
                editorClassName="demo-editor"
                ref={(c) => { me.wysiwyg = c; }}
                onChange={(c) => {
                  me.wysiwyg.onEditorChange(c, 0);
                  if (me.textAreaHTML) {
                    me.textAreaHTML.setValue(draftToHtml(me.wysiwyg.state.editorContents[0], null, '\t'));
                  }
                  if (me.textAreaMarkDown) {
                    me.textAreaMarkDown.setValue(draftToMarkdown(me.wysiwyg.state.editorContents[0], null, '\t'));
                  }
                  if (me.textAreaJSON) {
                    me.textAreaJSON.setValue(JSON.stringify(me.wysiwyg.state.editorContents[0], null, '\t'));
                  }
                }}
                uploadCallback={uploadImageCallBack}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h1>HTML</h1>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textAreaHTML = c; }}
                value=""
              />
            </Col>
            <Col xs={4}>
              <h1>MarkDown</h1>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textAreaMarkDown = c; }}
                value=""
              />
            </Col>
            <Col xs={4}>
              <h1>JSON</h1>
              <TextArea
                disabled
                className="demo-content no-focus"
                ref={(c) => { me.textAreaJSON = c; }}
                value=""
              />
            </Col>
          </Row>
        </div>
      </div>
    ); })
  .add('Options grouped in drop-down', () => (
    <div className="container">
      <h1>
        Options grouped in drop-down.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-wide"
            editorClassName="demo-editor"
            uploadCallback={uploadImageCallBack}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Editor with only a sub-set of options available', () => (
    <div className="container">
      <h1>
        Editor with only a sub-set of options available.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-medium"
            editorClassName="demo-editor"
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'remove', 'history'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough'],
              },
            }}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Inline Wysiwyg', () => (
    <div className="container">
      <h1>
        Inline Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper-relative"
            editorClassName="demo-editor-plain"
            initialContentState={sampleEditorContent}
            toolbarOnFocus
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'fontFamily'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                bold: { className: 'bordered-option-classname' },
                italic: { className: 'bordered-option-classname' },
                underline: { className: 'bordered-option-classname' },
                strikethrough: { className: 'bordered-option-classname' },
                code: { className: 'bordered-option-classname' },
              },
              blockType: {
                className: 'bordered-option-classname',
              },
              fontSize: {
                className: 'bordered-option-classname',
              },
              fontFamily: {
                className: 'bordered-option-classname',
              },
            }}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Editor with embedded links.', () => (
    <div className="container">
      <h1>
        Editor with embedded links.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar-absolute-high"
            wrapperClassName="demo-wrapper-relative-long"
            editorClassName="demo-editor-embedded"
            initialContentState={initialContentState}
            toolbarOnFocus
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Editor with mentions.', () => {
    const suggestions = sampleMentionsArray.map((e) => {
      const val = `${e.name.first}${(e.name.last.replace(/\s/g, '').charAt(0).toUpperCase() + e.name.last.replace(/\s/g, '').slice(1))}`;
      return ({
        text: val,
        value: val,
        url: `http://www.twitter.com/${val}`,
      });
    });
    return (
      <div className="container">
        <h1>
          Editor with mentions.
        </h1>
        <div className="demo-editorSection">
          <Col sm={12}>
            <Wysiwyg
              style={{
                height: '100%',
              }}
              toolbarClassName="demo-toolbar"
              wrapperClassName="demo-wrapper-auto mentions"
              editorClassName="demo-editor"
              mention={{
                separator: ' ',
                trigger: '@',
                suggestions,
              }}
            />
          </Col>
        </div>
      </div>
    );
  })
  .add('Editor toolbar with custom icons and styling.', () => (
    <div className="container">
      <h1>
        Editor toolbar with custom icons and styling.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar-custom"
            wrapperClassName="demo-wrapper-auto"
            editorClassName="demo-editor-custom"
            toolbar={sampleToolbar}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Editor toolbar with custom font icons and styling.', () => (
    <div className="container">
      <h1>
        Editor toolbar with custom font icons and styling.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-auto"
            editorClassName="demo-editor"
            toolbar={sampleToolbar2}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Editor toolbar with font-awesome font icons and styling.', () => (
    <div className="container">
      <h1>
        Editor toolbar with font-awesome font icons and styling.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-auto compare"
            editorClassName="demo-editor"
            toolbar={sampleToolbar3}
          />
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-auto compare"
            editorClassName="demo-editor"
          />
        </Col>
      </div>
    </div>
  ))
  .add('WysiwygEditor', () => (
    <div className="container">
      <h1>
        WysiwygEditor.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <WysiwygEditor />
        </Col>
      </div>
    </div>
  ))
  .add('container', () => (
    <div className="container">

    </div>
  ));
