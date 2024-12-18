import { useEffect, useState } from "react";
import List from "../List";
import Search from "../Search/Search";
import "./App.css";

const data = ["HTML", "CSS", "JS", "REACT", "Vue"];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(el => el.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
  }, [search])

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
