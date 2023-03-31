import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
// import Searchbar from "../components/searchbar/Searchbar";
import MediaCard from "../components/ui/MediaCard/MediaCard";
import TextField from "@mui/material/TextField";

import styles from "./Home.module.css";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  // Initial Fetch to populate product page
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://api.searchspring.net/api/search/search.json?resultsFormat=native&siteId=scmq7n&q=&resultsPerPage=10&page=1&fields=
        %2A&sort=%7B%22price%22%3A%22asc%22%7D`
      );
      setProducts(response.data.results);
    };
    fetchProducts();
  }, []);

  // fetching with query that was inputted to populate products related to query
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://api.searchspring.net/api/search/search.json?resultsFormat=native&siteId=scmq7n&q=${query}&resultsPerPage=8&fields=
        %2A&sort=%7B%22price%22%3A%22asc%22%7D`
      );
      setProducts(response.data.results);
    };
    fetchProducts();
  }, [submittedQuery]);

  // Action handlers
  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  const buttonHandler = () => {
    setSubmittedQuery(query);
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      setSubmittedQuery(query);
    }
  };

  console.log(submittedQuery.toString());

  return (
    <div>
      <Hero />
      <div className={styles.productSection}>
        <div className={styles.searchbarSection}>
          <>
            <button>X</button>
          </>
          <div>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              onChange={inputHandler}
              // Handles input submittion when the enter key is pressed
              onKeyPress={enterHandler}
            />
            <button type="submit" onClick={buttonHandler}>
              Search
            </button>
          </div>
        </div>
        <div className={styles.productCards}>
          {products.map((product) => {
            return <MediaCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
