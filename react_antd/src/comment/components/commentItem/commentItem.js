import React, { PureComponent } from "react";

import { Comment, List, Tooltip, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
  render() {
    const { commentList } = this.props;
    return (
      <div>
        <List
          className="comment-list"
          header={`${commentList.length} replies`}
          itemLayout="horizontal"
          dataSource={commentList}
          renderItem={(item, index) => (
            <li>
              <Comment
                author={<a href="/#">{item.nickName}</a>}
                avatar={<Avatar src={item.avatar} alt={item.nickName} />}
                content={<pre>{item.content}</pre>}
                datetime={
                  <Tooltip title={item.dateTime.format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{item.dateTime.fromNow()}</span>
                  </Tooltip>
                }
                actions={[
                  <span onClick={(e) => this.removeItem(index)}>
                    <DeleteOutlined /> 删除
                  </span>,
                ]}
              />
            </li>
          )}
        />
      </div>
    );
  }
  removeItem(index) {
    this.props.removeItem(index);
  }
}
