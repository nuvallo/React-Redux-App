import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://www.freelancer.com/api/projects/0.1/jobs/search/?job_names%5B%5D=PHP&job_names%5B%5D=website%20design"
      )
      .then(res => console.log(res.data.result))
      .catch(err => console.log("API request App: ", err));
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
