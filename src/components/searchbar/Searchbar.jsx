import React from "react";
import TextField from "@mui/material/TextField";

function Searchbar({
  inputHandler,
  buttonHandler,
  enterHandler,
  clearInput,
  inputValue,
}) {
  return (
    <div>
      <>
        <button onClick={clearInput}>X</button>
      </>
      <>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={inputHandler}
          value={inputValue}
          // Handles input submittion when the enter key is pressed
          onKeyPress={enterHandler}
        />
        <button type="submit" onClick={buttonHandler}>
          Search
        </button>
      </>
    </div>
  );
}

export default Searchbar;
