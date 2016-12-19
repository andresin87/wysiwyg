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
 * @file    sampleEditorContent
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-12-19
 * @summary empty.
 */
import {
  convertFromHTML,
  ContentState,
  convertToRaw,
} from 'draft-js';

const contentBlocks = convertFromHTML('<p>Lorem ipsum ' +
  'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
  'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
  'commodo quis dolor in, sagittis scelerisque nibh. ' +
  'Suspendisse consequat, sapien sit amet pulvinar  ' +
  'tristique, augue ante dapibus nulla, eget gravida ' +
  'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
  'accumsan. Vivamus porta cursus libero vitae mattis. ' +
  'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
  'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>');

const contentState = ContentState.createFromBlockArray(contentBlocks);

const initialContentState = convertToRaw(contentState);

export default initialContentState;
