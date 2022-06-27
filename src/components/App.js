import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./containers/NavBar.js";
import "../scss/components/App.scss";
import RenderScene from "./RenderScene.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavBar/>} />
        </Routes>
        <Routes>
          <Route path="/" element={<RenderScene/>}/>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
