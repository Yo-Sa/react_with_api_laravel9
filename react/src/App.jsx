import { Routes, Route } from "react-router-dom";
import './App.css';
import { Create } from "./components/Create";
import { Home } from "./components/Home";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
            {/* 画面遷移の記述 */}
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
