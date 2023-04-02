import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import styles from "./Searchbar.module.css";
import Btn from "../ui/btn/Btn";

// Adds custom styling to MUI component
const CustomTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--text-color-gg)",
  },
});

function Searchbar({
  inputHandler,
  buttonHandler,
  enterHandler,
  clearInput,
  inputValue,
}) {
  return (
    <div className={styles.querySection}>
      <>
        <CustomTextField
          // Basic styling for textfield
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          fullWidth
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={inputHandler}
          value={inputValue}
          // Handles input submission when the enter key is pressed
          onKeyPress={enterHandler}
        />
        <div className={styles.clearBtnSection}>
          <button className={styles.clearBtn} onClick={clearInput}>
            X
          </button>
        </div>
        <div className={styles.searchBtnSection}>
          <Btn type="submit" onClick={buttonHandler}>
            search
          </Btn>
        </div>
      </>
    </div>
  );
}

export default Searchbar;
