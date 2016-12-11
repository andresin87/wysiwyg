/**
 * Created by alucas on 11/12/16.
 */
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { convertToRaw, ContentState, convertFromHTML } from 'draft-js';

import brackets from '../icons/brackets.svg';

import { Wysiwyg } from '../';
import { TextArea } from './TextArea';

var inlineIcon = <i className="fa fa-font" />;

const toolbar = {
  inline: {
    bold: { icon: null, className: 'fa fa-bold' },
    italic: { icon: null, className: 'fa fa-italic' },
    underline: { icon: null, className: 'fa fa-underline' },
    strikethrough: { icon: null, className: 'fa fa-strikethrough' },
    monospace: { icon: brackets, className: 'fa' },
    superscript: { icon: null, className: 'fa fa-superscript' },
    subscript: { icon: null, className: 'fa fa-subscript' },
    inDropdown: true,
    icon: inlineIcon,
  },
  blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  fontSize: { className: 'demo-option-custom-medium' },
  list: {
    unordered: { icon: null, className: 'fa fa-list-ul' },
    ordered: { icon: null, className: 'fa fa-list-ol' },
    indent: { icon: null, className: 'fa fa-indent' },
    outdent: { icon: null, className: 'fa fa-outdent' },
    inDropdown: true,
  },
  textAlign: {
    left: { icon: null, className: 'fa fa-align-left' },
    center: { icon: null, className: 'fa fa-align-center' },
    right: { icon: null, className: 'fa fa-align-right' },
    justify: { icon: null, className: 'fa fa-align-justify' },
    inDropdown: true,
  },
  fontFamily: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  colorPicker: { icon: null, className: 'fa fa-pencil', popupClassName: 'demo-popup-custom' },
  link: {
    popupClassName: 'demo-popup-custom',
    link: { icon: null, className: 'fa fa-chain' },
    unlink: { icon: null, className: 'fa fa-unlink' },
    inDropdown: true,
  },
  emoji: { icon: null, className: 'fa fa-smile-o', popupClassName: 'demo-popup-custom' },
  embedded: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  image: { icon: null, className: 'fa fa-picture-o', popupClassName: 'demo-popup-custom' },
  remove: { icon: null, className: 'fa fa-eraser' },
  history: {
    undo: { icon: null, className: 'fa fa-undo' },
    redo: { icon: null, className: 'fa fa-repeat' },
    inDropdown: true,
  },
};


class WysiwygEditor extends Component {

  componentWillUpdate() {
    if (!(this.state)) {
      this.setState({ value: this.props.value });
    } else if (this.textarea.state.value !== this.state.value) {
      this.setState({ value: this.textarea.state.value });
    }
  }
  render() {
    let value = (this.state && this.state.value) ? this.state.value : null;
    value = (!value && this.props.value) ? this.props.value : value;
    let textareaValue = (this.textarea && this.textarea.state && this.textarea.state.value) ? this.textarea.state.value : null;
    const contentState = textareaValue ? convertToRaw(ContentState.createFromBlockArray(convertFromHTML(textareaValue))) : null;
    return (
      <div>
        <Col xs={12}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-auto"
            editorClassName="demo-editor"
            ref={(c) => { this.wysiwyg = c; }}
            initialContentState={textareaValue}
            contentState={contentState}
            toolbar={toolbar}
          />
          <TextArea
            ref={(c) => {
              this.textarea = c;
            }}
            value={value}
            onChange={() => {
              this.setState({ value: textareaValue });
            }}
          />
        </Col>
      </div>
    );
  }
}

WysiwygEditor.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export { WysiwygEditor };
