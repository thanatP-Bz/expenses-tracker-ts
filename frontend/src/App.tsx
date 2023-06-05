import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "./hooks/UseAppContext";
import { ProtectRoutes } from "./pages/ProtectRoutes";

function App() {
  const { authentication } = useAppContext();

  console.log(authentication.userName ? true : false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/"
            element={
              <ProtectRoutes>
                <Home />
              </ProtectRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
