import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    return await axios
      .post("http://localhost:3003/api/login", {
        email: form.email,
        password: form.password,
      })
      .then(({ data }) =>
        dispatch(loginUser({ id: data.id, token: data.token }))
      )
      .catch((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        required
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        required
        onChange={handleChange}
        name="password"
        placeholder="******"
      />
      <button type="submit">Login</button>
    </form>
  );
};
