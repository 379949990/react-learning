import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h4>Detail: {id}</h4>
      </div>
    );
  }
}
