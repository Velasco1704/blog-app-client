import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import "../styles/Login.scss";

export const Login = () => {
  const [typeOfForm, setTypeOfForm] = useState(false);
  return (
    <section className="login__container">
      {typeOfForm ? (
        <RegisterForm typeOfForm={typeOfForm} setTypeOfForm={setTypeOfForm} />
      ) : (
        <LoginForm typeOfForm={typeOfForm} setTypeOfForm={setTypeOfForm} />
      )}
    </section>
  );
};
