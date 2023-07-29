import { useGetPostsQuery } from "../api/apiSlice";
import "../styles/PostList.scss";
import { Loading } from "./Loading";

export const PostsList = () => {
  const { data: posts } = useGetPostsQuery(undefined);
  if (posts === undefined) return <Loading />;
  return (
    <div className="postList__container">
      {posts.result.map((post) => (
        <div className="postList__card" key={post.id}>
          <div className="postList__header">
            <h3 className="postList__card__h3">
              By{" "}
              <span className="postList__card__span">{post.user.fullName}</span>
            </h3>
            <span className="postList__card__at">@{post.user.email}</span>
          </div>
          <textarea readOnly value={post.body} className="postList__card__p" />
        </div>
      ))}
    </div>
  );
};
