import React, { useContext } from "react";
import { ContextProvider } from "../Global/Context";
import Comment from "./Comments";
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts__header">
            <div className="posts__header-avator"></div>
            <div className="posts__header-name">{post.username}</div>
          </div>
          <div className="posts__img">
            <img src={post.image} alt={post.image} />
          </div>
          <Comment id={post.id} />
        </div>
      ))}
    </>
  );
};

export default Posts;
