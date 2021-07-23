import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const companies = [
    "Google",
    "Facebook",
    "Amazon",
    "YouTube",
    "LinkedIn",
    "Instagram",
    "Twitter",
    "Telegram",
  ];

  useEffect(() => {
    const results = companies.filter((company) =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="data">
        {searchResults.map((company, index) => (
          <div className="row" key={index}>
            {company}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
