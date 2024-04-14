import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const CustomTextField = ({ label, value, onChange }) => {
  
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      className="custom-text-field"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#00b67a",
          },
        },
        "& .MuiInputLabel-root": {
          color: "grey",
          "&.Mui-focused": {
            color: "#00b67a",
          },
        },
      }}
    />
  );
};

export default CustomTextField;