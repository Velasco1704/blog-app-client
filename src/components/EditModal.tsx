import { useState } from "react";
import { useUpdatePostMutation } from "../api/apiSlice";
import "../styles/EditModal.scss";

export const EditModal = ({
  id,
  editModal,
  setEditModal,
}: {
  id: string;
  editModal: { state: boolean; postId: string; prevPost: string };
  setEditModal: (value: {
    state: boolean;
    postId: string;
    prevPost: string;
  }) => void;
}) => {
  const [updatePost] = useUpdatePostMutation();
  const [form, setForm] = useState(editModal.prevPost);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePost({
      body: form,
      id,
    })
      .then(() => setEditModal({ postId: "", state: false, prevPost: "" }))
      .catch((res) => console.log(res));
  };

  return (
    <div className="editModal__container">
      <form className="editModal__form" onSubmit={handleSubmit}>
        <div className="editModal__form__container__textarea">
          <label className="editModal__form__label">Edit Your Post</label>
          <textarea
            className="editModal__form__textarea"
            onChange={({ target }) => setForm(target.value)}
            value={form}
            name="body"
            id="body"
            cols={20}
            rows={10}
          />
        </div>
        <div className="editModal__form__container__buttons">
          <button
            className="editModal__form__button editModal__form__save"
            type="submit"
          >
            save
          </button>
          <button
            className="editModal__form__button editModal__form__close"
            onClick={() => setEditModal({ ...editModal, state: false })}
          >
            close
          </button>
        </div>
      </form>
    </div>
  );
};
