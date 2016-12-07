/**
 * Created by alucas on 6/12/16.
 */
import React, { Component } from 'react';

class Html extends Component {
  constructor() {
    super();
    this.setValue = this.setValue.bind(this);
  }
  setValue(value) {
    this.setState({ value });
  }
  componentWillmount() {
    // this.state.value = this.props.value ? this.props.value : '';
  }
  render() {
    const value = (this.state && this.state.value) ? this.state.value : '';
    return (
      <div
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  }
}

Html.propTypes = {
  value: React.PropTypes.string,
};

export { Html };
