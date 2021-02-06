import React, { PureComponent } from "react";

import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDownloadOn: true,
    };
  }
  render() {
    const { isDownloadOn } = this.state;

    return (
      <div>
        <h2>Hello, SwitchTransition!</h2>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isDownloadOn ? "download" : "undownload"} classNames={"downloadBtn"} timeout={300}>
            <Button
              className="downloadBtn"
              type={isDownloadOn ? "primary" : "default"}
              shape="round"
              icon={isDownloadOn ? <DownloadOutlined /> : ""}
              size="large"
              onClick={(e) => this.setState({ isDownloadOn: !isDownloadOn })}
            >
              {isDownloadOn ? "Download" : "Undowmload"}
            </Button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
