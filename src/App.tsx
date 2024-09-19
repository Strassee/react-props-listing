import React from 'react';
// import data from './etsy.json';
import Listing from './components/listing/Listing';
import './App.css';
import { useState, useEffect } from 'react';
import { Item } from './components/listing/Listing';



function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('etsy.json')
      .then(response => response.json())
      .then(json => {
        setData(json);}
    );
  },[]);
  const dataFiltered = data.filter((item: Item) => (item.state === 'active'));

  return (
    <Listing data={dataFiltered} />
  );
}

export default App;
