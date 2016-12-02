/**
 * Created by alucas on 2/12/16.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Wysiwyg } from '../';

storiesOf('Wysiwyg', module)
.add('single', () => (
  <div className="container">
    <Wysiwyg />
  </div>
))
.add('content', () => (
  <div className="container">
    <p />
  </div>
));
