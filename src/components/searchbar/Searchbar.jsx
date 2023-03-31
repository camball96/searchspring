import React from "react";
import TextField from "@mui/material/TextField";

function Searchbar() {
  return (
    <div>
      <TextField id="standard-basic" label="Search" variant="standard" />
      <button>Search</button>
    </div>
  );
}

export default Searchbar;
