import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { PiWarningDiamond } from "react-icons/pi";
import "../styles/Form.scss";
import { useRegisterMutation } from "../api/apiSlice";

export const RegisterForm = ({
  typeOfForm,
  setTypeOfForm,
}: {
  typeOfForm: boolean;
  setTypeOfForm: (value: boolean) => void;
}) => {
  const [register, { data, isSuccess, isError }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    });
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(loginUser({ id: data.data.id, token: data.token }));
      navigate("/");
    }
  }, [data, dispatch, isError, isSuccess, navigate]);

  return (
    <div className="Form__container">
      <h1 className="Form__container__h1">Register</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__inputs__container">
          <input
            required
            className="Form__input"
            type="text"
            name="fullName"
            placeholder="Full Name"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            required
            className="Form__input"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            required
            className="Form__input"
            type="password"
            name="password"
            placeholder="******"
            autoComplete="off"
            onChange={handleChange}
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
          Register
        </button>
      </form>
      <button
        className="change__form"
        onClick={() => setTypeOfForm(!typeOfForm)}
      >
        Login
      </button>
    </div>
  );
};
