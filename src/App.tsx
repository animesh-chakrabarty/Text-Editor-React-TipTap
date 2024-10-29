import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
};

export default App;
