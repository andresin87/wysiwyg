/**
 * @license Copyright (c) UserZoom 2016. All Rights Reserved. http://www.userzoom.com/
 *
 * Proprietary and confidential
 *
 * NOTICE: All information contained herein is, and remains the property
 * of UserZoom Technologies SL. The intellectual and technical concepts
 * contained herein are proprietary to UserZoom Technologies SL and
 * may be covered by U.S. and Foreign Patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from UserZoom Technologies SL.
 *
 * @company UserZoom Technologies SL
 * @project uz-wysiwig
 * @file    index
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-12-14
 * @summary empty.
 */

import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { omit } from 'lodash';

import { mergeRecursive } from './utils';
import basicToolbar from './toolbars/basic';
import CONSTANTS from './constants';

class UzWysiwyg extends Component {
  constructor() {
    super();
    this.state = { editorContents: [] };
    this.onEditorChange = this.onEditorChange.bind(this);
  }
  componentWillMount() {
    this.toolbarType = this.props.type ? this.props.type : CONSTANTS.defaultType;
    switch (this.toolbarType) {
      case CONSTANTS.types[0]:  // basic
        this.toolbar = mergeRecursive(basicToolbar, this.toolbar);
        break;
      case CONSTANTS.types[1]:  // lite
        break;
      case CONSTANTS.types[2]:  // full
        break;
      default:
        break;
    }
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
    console.log('render');
    const props = omit(this.props, ['toolbar', 'inline']);
    return (
      <Editor
        toolbar={this.toolbar}
        toolbarOnFocus={this.props.inline}
        {...props}
      />
    );
  }
}

UzWysiwyg.propTypes = {
  onChange: React.PropTypes.func,
  type: React.PropTypes.oneOf(CONSTANTS.types),
};

// UzWysiwyg.defaultProps = {
//   onChange: () => {
//     console.log('onChange');
//   },
// };

export { UzWysiwyg };