import React, { PureComponent } from "react";

import CommentInput from "./components/commentInput/commentInput";
import CommentItem from "./components/commentItem/commentItem";
import ArticleItem from "./components/articleItem/articleItem";

import "./App.css";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  render() {
    const { commentList } = this.state;
    return (
      <div className="App">
        <h2 className="app_title">Hello, FLuoxetine!</h2>
        <ArticleItem />
        <CommentInput submitComment={(info) => this.submitComment(info)} />
        <CommentItem commentList={commentList} removeItem={(indey) => this.removeItem(indey)} />
      </div>
    );
  }
  submitComment(info) {
    this.setState({
      commentList: [info, ...this.state.commentList],
    });
  }
  removeItem(indey) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(indey, 1);
    this.setState({
      commentList: newCommentList,
    });
  }
}
