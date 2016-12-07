/**
 * Created by alucas on 6/12/16.
 */
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { Wysiwyg } from '../';
import { TextArea } from './TextArea';

class ImportBlock extends Component {
  // constructor() {
  //   super();
  // }
  componentWillUpdate() {
    console.log(this);
    if (!(this.state)) {
      this.setState({ value: this.props.value });
      console.log('setState prop', this.props.value);
    } else if (this.textarea.state.value !== this.state.value) {
      console.log('setState TextArea', this.textarea.state.value);
      this.setState({ value: this.textarea.state.value });
    }
  }
  render() {
    let value = (this.state && this.state.value) ? this.state.value : null;
    value = (!value && this.props.value) ? this.props.value : value;
    console.log('state', this.state);
    console.log('state', value);
    return (
      <div>
        <Col xs={4}>
          <TextArea
            ref={(c) => {
              this.textarea = c;
            }}
            value={value}
            onChange={(() => {
              // this.props.value = this.textarea.props.value;
            })()}
          />
        </Col>
        <Col xs={8}>
          <Wysiwyg />
        </Col>
      </div>
    );
  }
}

ImportBlock.propTypes = {
  value: React.PropTypes.string,
};

export { ImportBlock };
