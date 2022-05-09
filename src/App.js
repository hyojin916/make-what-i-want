import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AnimationBox from "./components/AnimationBox";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/animation" element={<AnimationBox />}></Route>
      </Routes>
    </div>
  );
};

export default App;
