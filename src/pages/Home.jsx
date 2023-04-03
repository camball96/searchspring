import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import PCard from "../components/pCard/PCard";
import Searchbar from "../components/searchbar/Searchbar";
import Pagination from "../components/ui/pagination/Pagination";
import styles from "./Home.module.css";
import axios from "axios";

function Home() {
  // Setting states for all components
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [page, setPage] = useState(1);

  // fetching data to populate products related to query along with page
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://api.searchspring.net/api/search/search.json?resultsFormat=native&siteId=scmq7n&q=${query}&resultsPerPage=13&page=${page}&fields=
        %2A&sort=%7B%22price%22%3A%22asc%22%7D`
      );
      setProducts(response.data.results);
    };
    fetchProducts();
  }, [submittedQuery, page]);

  // Action handlers
  const increaseCount = () => setPage(page + 1);
  const decreaseCount = () => setPage(page - 1);
  const clearInput = () => {
    setInputValue("");
    setSubmittedQuery("");
    setQuery("");
    setPage(1);
  };
  const inputHandler = (e) => {
    setQuery(e.target.value);
    setInputValue(e.target.value);
  };
  const buttonHandler = () => {
    setSubmittedQuery(query);
    setPage(1);
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      setSubmittedQuery(query);
      setPage(1);
    }
  };

  return (
    <div>
      <Hero />
      <div className={styles.productSection}>
        <div className={styles.shopHeading}>
          <h2 className={styles.h2}>shop our style &darr;</h2>
        </div>
        <div className={styles.searchbarSection}>
          <Searchbar
            {...{
              inputHandler,
              buttonHandler,
              enterHandler,
              clearInput,
              inputValue,
            }}
          />
        </div>
        <div className={styles.topPag}>
          <Pagination {...{ increaseCount, decreaseCount, products, page }} />
        </div>
        <div className={styles.productList} id="products">
          {/* I had to slice here as there was a weird bug occuring on the initial fetch where different
          amounts of products were returned than what was requested. This at least will stop that from occuring. */}
          {products.slice(0, 12).map((product) => {
            return <PCard key={product.id} product={product} />;
          })}
        </div>
        <div className={styles.btmPag}>
          <Pagination {...{ increaseCount, decreaseCount, products, page }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
