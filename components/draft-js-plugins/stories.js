/**
 * Created by alucas on 2/12/16.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Col } from 'react-bootstrap';
import { DraftJsPluginsWysiwyg } from './';

// import { convertToRaw, ContentState, convertFromHTML } from 'draft-js';


storiesOf('DraftJsPluginsWysiwyg', module)
  .add('No Toolbar', () => (
    <div className="container">
      <h1>
        Inline Toolbar plugin.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          {'code here!'}
          <DraftJsPluginsWysiwyg />
        </Col>
      </div>
    </div>
  ))
  .add('Inline Toolbar plugin', () => (
    <div className="container">
      <h1>
        Inline Toolbar plugin.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          {'code here!'}
          <DraftJsPluginsWysiwyg
            toolbar="inline"
          />
        </Col>
      </div>
    </div>
  ))
  .add('Side Toolbar plugin', () => (
    <div className="container">
      <h1>
        Inline Toolbar plugin.
      </h1>
      <div className="demo-editorSection">
        <Col sm={12}>
          {'code here!'}
          <DraftJsPluginsWysiwyg
            toolbar="side"
          />
        </Col>
      </div>
    </div>
  ));
