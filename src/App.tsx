import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};
