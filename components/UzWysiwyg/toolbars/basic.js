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
 * @file    basic
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-12-15
 * @summary empty.
 */
import {
  bold,
  italic,
  underline,
} from '../icons';

export default {
  options: ['inline'],
  inline: {
    options: ['bold', 'italic', 'underline'],
    bold: { icon: bold.icon, className: bold.className },
    italic: { icon: italic.icon, className: italic.className },
    underline: { icon: underline.icon, className: underline.className },
  },
};
