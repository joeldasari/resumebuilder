import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Form from "./pages/form";
import Resume from "./pages/resume";

function App() {
  const [formItems, setFormItems] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Career: "",
    Skills: "",
    Experience: "",
    Education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormItems((item) => {
      return { ...item, [name]: value };
    });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Form handleChange={handleChange} />} />
          <Route path="/resume" element={<Resume formItems={formItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
