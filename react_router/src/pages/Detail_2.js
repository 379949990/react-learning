import React, { PureComponent } from 'react'

export default class Detail_2 extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Detail_2: {this.props.location.search}</h4>
      </div>
    )
  }
}
