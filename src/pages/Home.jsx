import React from "react";
import Hero from "../components/hero/Hero";
import Searchbar from "../components/searchbar/Searchbar";
import MediaCard from "../components/ui/MediaCard/MediaCard";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.productSection}>
        <div className={styles.searchbarSection}>
          <Searchbar />
        </div>
        <div className={styles.productCards}>
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
