import CourseDetails from "./screens/CourseDetailsScreen";
import Dashboard from "./screens/DashboardScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./screens/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details" element={<CourseDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
