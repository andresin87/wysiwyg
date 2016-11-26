/**
 * Created by alucas on 26/11/16.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
// import { Wysiwyg } from '../';

storiesOf('Wysiwyg', module)
  .add('single', () => (
    <div className="container">
      <p />
    </div>
  ))
  .add('content', () => (
    <div className="container">
      <p />
    </div>
  ));
