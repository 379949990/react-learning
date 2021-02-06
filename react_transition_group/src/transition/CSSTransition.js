import React, { PureComponent } from "react";

import { Card } from "antd";
import { CSSTransition } from "react-transition-group";

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCardShow: true,
    };
  }
  render() {
    const { isCardShow } = this.state;

    return (
      <div>
        <h2>Hello, CSSTransition!</h2>
        <button
          onClick={(e) => {
            this.setState({ isCardShow: !isCardShow });
          }}
        >
          显示/隐藏
        </button>
        <CSSTransition
          in={isCardShow}
          classNames="card"
          timeout={300}
          unmountOnExit={false}
          appear
          onEnter={(el) => console.log("开始进入")}
          onEntering={(el) => console.log("正在进入")}
          onEntered={(el) => console.log("进入完成")}
          onExit={(el) => console.log("开始退出")}
          onExiting={(el) => console.log("正在退出")}
          onExited={(el) => console.log("退出完成")}
        >
          <Card hoverable style={{ width: 240, margin: "12px 0" }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
