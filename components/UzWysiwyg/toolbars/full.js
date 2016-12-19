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
 * @file    full
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-12-16
 * @summary empty.
 */
import {
  bold,
  italic,
  underline,
  left,
  center,
  right,
  justify,
  outdent,
  indent,
  ordered,
  unordered,
  remove,
  undo,
  redo,
  image,
  emoji,
} from '../icons';

export default {
  options: ['inline', 'blockType', 'colorPicker', 'fontSize', 'textAlign', 'list', 'remove', 'emoji', 'history', 'image'],
  inline: {
    options: ['bold', 'italic', 'underline'],
    bold: { icon: bold.icon, className: bold.className },
    italic: { icon: italic.icon, className: italic.className },
    underline: { icon: underline.icon, className: underline.className },
  },
  blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  fontSize: { icon: null, className: 'demo-option-custom-medium' },
  colorPicker: { icon: null, className: undefined, popupClassName: undefined },
  textAlign: {
    inDropdown: false,
    className: undefined,
    options: ['left', 'center', 'right', 'justify'],
    left: { icon: left.icon, className: left.className },
    center: { icon: center.icon, className: left.className },
    right: { icon: right.icon, className: left.className },
    justify: { icon: justify.icon, className: left.className },
  },
  list: {
    inDropdown: false,
    className: undefined,
    options: ['unordered', 'ordered', 'indent', 'outdent'],
    unordered: { icon: unordered.icon, className: unordered.className },
    ordered: { icon: ordered.icon, className: ordered.className },
    indent: { icon: indent.icon, className: indent.className },
    outdent: { icon: outdent.icon, className: outdent.className },
  },
  remove: { icon: remove.icon, className: remove.className },
  emoji: { icon: emoji.icon, className: emoji.className, popupClassName: undefined },
  history: {
    inDropdown: false,
    className: undefined,
    options: ['undo', 'redo'],
    undo: { icon: undo.icon, className: undo.className },
    redo: { icon: redo.icon, className: redo.className },
  },
  image: {
    icon: image.icon,
    className: image.className,
    popupClassName: undefined,
  },
};
