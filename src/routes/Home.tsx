import { useDispatch } from "react-redux";
import { logOutUser } from "../features/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <h1>Home</h1>
      <button onClick={() => dispatch(logOutUser())}>Log Out</button>
    </section>
  );
};
pwd