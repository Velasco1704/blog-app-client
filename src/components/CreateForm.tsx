import { useState } from "react";
import { useCreatePostMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";
import { PiWarningDiamond } from "react-icons/pi";
import "../styles/CreateForm.scss";

export const CreateForm = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const [charactersLimit, setCharactersLimit] = useState(false);
  const [create] = useCreatePostMutation();
  const [newPost, setNewPost] = useState({
    body: null,
    userId: id,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNewPost({ ...newPost, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    create({ body: newPost.body ?? "", userId: newPost.userId ?? "" })
      .then(() => navigate("/"))
      .catch((res) => console.log(res));
  };

  return (
    <form className="createForm__container" onSubmit={handleSubmit}>
      <div className="creteForm__container__textarea">
        <label className="createForm__label">
          Write your <span>Post</span>
        </label>
        <textarea
          className="creteForm__textarea"
          onChange={handleChange}
          name="body"
          id="body"
          cols={20}
          rows={10}
          onInput={({ currentTarget }) =>
            currentTarget.value.length > 250
              ? setCharactersLimit(true)
              : setCharactersLimit(false)
          }
        />
      </div>
      <p></p>
      {charactersLimit && (
        <div className="createForm__error">
          <PiWarningDiamond />
          <p>Characters Limit</p>
        </div>
      )}
      <button
        disabled={charactersLimit}
        className="createForm__button"
        type="submit"
      >
        save
      </button>
    </form>
  );
};
