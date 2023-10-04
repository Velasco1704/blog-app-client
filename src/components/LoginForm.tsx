import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { PiWarningDiamond } from "react-icons/pi";
import { useLoginMutation } from "../api/apiSlice";
import "../styles/Form.scss";
import { DotsLoader } from "./Loaders/DotsLoader";

export const LoginForm = ({
  typeOfForm,
  setTypeOfForm,
}: {
  typeOfForm: boolean;
  setTypeOfForm: (value: boolean) => void;
}) => {
  const [login, { data, isSuccess, isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email: form.email, password: form.password });
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(loginUser({ id: data.data.id, token: data.token }));
      navigate("/");
    }
  }, [data, dispatch, isError, isSuccess, navigate]);

  return (
    <div className="Form__container">
      <h1 className="Form__container__h1">Login</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__inputs__container">
          <input
            className="Form__input"
            type="email"
            required
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            className="Form__input"
            type="password"
            required
            onChange={handleChange}
            name="password"
            placeholder="******"
          />
        </div>
        {isError && (
          <div className="Form__error">
            <span className="Form__error__icon">
              <PiWarningDiamond />
            </span>
            <p className="Form__error__p">Invalid Credentials</p>
          </div>
        )}
        <button className="Form__button" type="submit">
          {isLoading ? <DotsLoader /> : "Login"}
        </button>
      </form>
      <button
        className="change__form"
        onClick={() => setTypeOfForm(!typeOfForm)}
      >
        Register
      </button>
    </div>
  );
};
