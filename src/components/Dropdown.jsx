import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ apisource, setapisource }) {
  const handleChange = (event) => {
    setapisource(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, color: "white" }}>
      <FormControl
        fullWidth
        style={{
          color: "black",
          border: "1px solid  #1976d2",
          borderRadius: "10px",
        }}
      >
        <InputLabel style={{ color: "black" }} id="demo-simple-select-label">
          Api Source
        </InputLabel>
        <Select
          style={{ color: "black" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={apisource}
          label="apisource"
          onChange={handleChange}
          variant="outlined"
          displayEmpty
        >
          <MenuItem
            value={"16c5212158ba49f2b5868e6e61bdcdcd"}
            style={{ borderBottom: "1px solid white", margin: "0px 10px" }}
          >
            NewsApi
          </MenuItem>
          <MenuItem value={"c4b18f95-1060-4080-bb49-1c80cfd6d31c"}>
            Guardian Api
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
