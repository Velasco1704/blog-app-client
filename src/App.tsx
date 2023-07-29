import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Create } from "./routes/Create";
import { Profile } from "./routes/Profile";
import { NotFound } from "./routes/NotFound";

export const App = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Create id={user?.id ?? ""} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile id={user?.id ?? ""} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
