import React, { PureComponent } from 'react'

export default class Detail_3 extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Detail_3: {this.props.location.search}</h4>
        <h4>Detail_3: {JSON.stringify(this.props.location.state)}</h4>
      </div>
    )
  }
}
