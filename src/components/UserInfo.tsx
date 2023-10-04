import { useState } from "react";
import { useDeletePostMutation, useGetUserQuery } from "../api/apiSlice";
import { EditModal } from "./EditModal";
import "../styles/UserInfo.scss";
import { Loading } from "./Loading";

export const UserInfo = ({ id }: { id: string }) => {
  const [editModal, setEditModal] = useState({
    state: false,
    prevPost: "",
    postId: "",
  });
  const [deletePost] = useDeletePostMutation();
  const { data: user } = useGetUserQuery(id);

  if (user === undefined) {
    return <Loading />;
  } else {
    return (
      <div className="userInfo__container">
        <h1 className="userInfo__h1">
          <span className="userInfo__h1__span">Welcome</span>{" "}
          {user.data.fullName}
        </h1>
        <div className="userInfo__posts">
          <h3 className="userInfo__posts__h3">Your Post</h3>
          <div className="userInfo__posts__list">
            {user.data.posts.length === 0 ? (
              <div className="userInfo__posts__list__no__posts">
                <p className="userInfo__posts__list__no__posts__p">
                  You don't have Posts
                </p>
              </div>
            ) : (
              user.data.posts.map((post) => (
                <div className="userInfo__card" key={post.id}>
                  <textarea
                    className="userInfo__post__textarea"
                    readOnly
                    value={post.body}
                  />
                  <div className="userInfo__card__container__buttons">
                    <button
                      className="userInfo__card__button userInfo__button__delete"
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="userInfo__card__button userInfo__button__edit"
                      onClick={() =>
                        setEditModal({
                          state: true,
                          postId: post.id,
                          prevPost: post.body,
                        })
                      }
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {editModal.state && (
          <EditModal
            id={editModal.postId}
            editModal={editModal}
            setEditModal={setEditModal}
          />
        )}
      </div>
    );
  }
};
