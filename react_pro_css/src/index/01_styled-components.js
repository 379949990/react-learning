import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  font-size: 24  px;
  color: skyblue;
`

class Header extends PureComponent{
  render(){
    return (
      <HeaderWrapper>
        <h2>Header</h2>
      </HeaderWrapper>
    )
  }
}
class Main extends PureComponent{
  render(){
    return (
      <div>
        <h2>Main</h2>
        <h3>Title</h3>
        <p style={{fontSize: "14px",color: "skyblue"}}>这是一段文字描述。</p>
      </div>
    )
  }
}
class Footer extends PureComponent{
  render(){
    return (
      <div>
        <h2>Footer</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return ( 
      <div>
        <h2>Hello, FLuoxetine!</h2>
        <hr/><hr/>
        <Header/><hr/>
        <Main/><hr/>
        <Footer/>
      </div>
    )
  }
}

