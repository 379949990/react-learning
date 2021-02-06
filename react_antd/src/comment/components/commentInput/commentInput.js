import React, { PureComponent } from "react";

import moment from "moment";
import { Input, Button } from "antd";

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {
    const { content } = this.state;
    return (
      <div>
        <Input.TextArea showCount maxLength={100} rows={3} value={content} onChange={(e) => this.handleChange(e)} onPressEnter={(e) => this.addComment()} />
        <Button type="primary" onClick={(e) => this.addComment()}>
          添加评论
        </Button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    });
  }
  addComment() {
    if (this.state.content === "") {
      return;
    }
    const commentInfo = {
      id: moment().valueOf(),
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      avatar: "https://tvax3.sinaimg.cn/crop.0.0.720.720.1024/006obR0aly8gmluv81guzj30k00k0myq.jpg?KID=imgbed,tva&Expires=1610569439&ssig=2T23OFjFD2",
      nickName: "FLuoxetine",
      dateTime: moment(),
      content: this.state.content,
    };
    this.props.submitComment(commentInfo);
    this.setState({
      content: "",
    });
  }
}
