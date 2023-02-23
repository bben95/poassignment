import LandingPage from "./pages/LandingPage";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />}>
          <Route index path="profile" element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
