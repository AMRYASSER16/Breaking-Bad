import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ItemsList from './components/ItemsList/ItemsList';
import Search from './components/UI/Search';
import Spinner from './components/UI/Spinner';
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setIsQuery] = useState('');

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then(response => response.json())
      .then(result => setItems(result));
      setIsLoading(false)
  }, [query]);

  const recieveInputTextHandler = e => {
    setIsQuery(e)
  }

  return (
    <Fragment>
      <Header />
      <Search searchInput={recieveInputTextHandler} />
      {isLoading && <Spinner />}
      <ItemsList items={items} />
    </Fragment>
  );
}

export default App;
