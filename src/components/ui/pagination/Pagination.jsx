import React from "react";

function Pagination({ increaseCount, decreaseCount, products, page }) {
  return (
    <>
      {page > 1 && <button onClick={decreaseCount}>Prev</button>}
      <span className="justify-center	text-center	"> {page} </span>
      {page < products.length && <button onClick={increaseCount}>Next</button>}
    </>
  );
}

export default Pagination;
