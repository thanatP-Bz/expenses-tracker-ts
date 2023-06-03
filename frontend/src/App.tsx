import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "./hooks/UseAppContext";

function App() {
  const { authentication } = useAppContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/"
            element={
              authentication.userName ? <Home /> : <Navigate to="/auth" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
