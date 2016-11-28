/**
 * Created by alucas on 27/11/16.
 */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { TweetEditor } from '../';

storiesOf('TweetEditor', module)
.add('single', () => (
  <div className="container">
    <TweetEditor />
  </div>
));
