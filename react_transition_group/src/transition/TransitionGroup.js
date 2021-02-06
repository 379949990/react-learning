import React, { PureComponent } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { List, Button } from "antd";
import { Button } from "antd";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books: ["《冷场 》", "《笑场》", "《候场》"],
    };
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>Hello, TransitionGroup!</h2>
        {/* <List size="small"
          header={<div>作者：李诞</div>}
          bordered dataSource={books}
          renderItem={(item) => {
            <CSSTransition>
              <List.Item>{item}</List.Item>
            </CSSTransition>
          }} /> */}
        <TransitionGroup>
          {books.map((item, index) => {
            return (
              <CSSTransition key={item} timeout={300} classNames="booksItem" className="booksItem">
                <div>
                  {item}
                  <Button shape="round" onClick={(e) => this.removeBooksItem(index)}>
                    删除
                  </Button>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <Button type="primary" shape="round" onClick={(e) => this.addBooks()}>
          Add
        </Button>
      </div>
    );
  }
  addBooks() {
    this.setState({
      books: [...this.state.books, "FLuoxetine"],
    });
  }
  removeBooksItem(index) {
    const { books } = this.state;
    this.setState({
      books: books.filter((item, indey) => index !== indey),
    });
  }
}
