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

storiesOf('UzWysiwyg', module)
  .add('Basic', () => (
    <div className="container">
      <h1>
        Inline Wysiwyg.
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
  ));
