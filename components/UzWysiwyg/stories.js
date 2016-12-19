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
 * @file    stories
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-12-14
 * @summary empty.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Col } from 'react-bootstrap';

import { UzWysiwyg } from '../';
import initialContentState from './utils/sampleEditorContent';

storiesOf('UzWysiwyg', module)
  .add('Default', () => (
    <div className="container">
      <h1>
        Default Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <UzWysiwyg
            initialContentState={initialContentState}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Inline', () => (
    <div className="container">
      <h1>
        Inline Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <UzWysiwyg
            inline="false"
            initialContentState={initialContentState}
          />
        </Col>
      </div>
    </div>
  ))
  .add('ReadOnly', () => (
    <div className="container">
      <h1>
        Read-Only Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <h5>Deafult inline (no toolbar):</h5>
          <UzWysiwyg
            readOnly
            initialContentState={initialContentState}
          />
          <h5>Force visual toolbar:</h5>
          <UzWysiwyg
            inline="false"
            readOnly
            initialContentState={initialContentState}
          />
        </Col>
      </div>
    </div>
  ))
  .add('Basic', () => (
    <div className="container">
      <h1>
        Basic Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <UzWysiwyg
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper-relative"
            editorClassName="demo-editor-plain"
            type="basic"
          />
        </Col>
      </div>
    </div>
  ))
  .add('Lite', () => (
    <div className="container">
      <h1>
        Lite Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <UzWysiwyg
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper-relative"
            editorClassName="demo-editor-plain"
            type="lite"
          />
        </Col>
      </div>
    </div>
  ))
  .add('Full', () => (
    <div className="container">
      <h1>
        Full Wysiwyg.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          <UzWysiwyg
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper-relative"
            editorClassName="demo-editor-plain"
            type="full"
          />
        </Col>
      </div>
    </div>
  ));
