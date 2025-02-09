import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { CloudUpload } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
/*

useEffect(() => {
    if (dishes.length > 0) {
      const grouped = dishes.reduce((acc, dish) => {
        if (!acc[dish.category]) {
          acc[dish.category] = [];
        }
        acc[dish.category].push(dish);
        return acc;
      }, {});
      setGroupedDishes(grouped);
      setSelectedCategory(Object.keys(grouped)[0]);
    }
  }, [dishes]);
*/

const cuisinesOptions = [
  "Momos",
  "Chinese",
  "Snacks",
  "Fast Food",
  "Indian",
  "North Indian",
];

const getStyles = (name, cuisines, theme) => {
  return {
    fontWeight:
      cuisines.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [rating, setRating] = useState("");
  const [costForTwo, setCostForTwo] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const theme = useTheme();

  // const emptyFunction = () => {
  //   setName("");
  //   setCuisines([]);
  //   setRating("");
  //   setCostForTwo("");
  //   setImageFile(null);
  //   setEditMode(false);
  //   setRestaurantId(null);
  // };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(true);

    let cloudinaryImageUrl = "";
    if (imageFile) {
      cloudinaryImageUrl = await uploadImage();
    }

    if (!cloudinaryImageUrl) {
      const newRestaurant = {
        name,
        cuisines,
        rating: parseFloat(rating),
        costForTwo,
        cloudinaryImageId: cloudinaryImageUrl,
      };
      console.log(newRestaurant);
    }
  };

  const handleCuisinesChange = (event) => {
    const {
      target: { value },
    } = event;
    setCuisines(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <div className="py-8 md:py-12 bg-cream">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex gap-5">
                <div className="form-field">
                  <TextField
                    type="text"
                    id="name"
                    label="Restaurant Name"
                    variant="outlined"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <FormControl sx={{ width: 200 }}>
                    <InputLabel id="cuisines-label">Cuisines</InputLabel>
                    <Select
                      labelId="cuisines-label"
                      id="cuisines"
                      multiple
                      displayEmpty
                      value={cuisines}
                      onChange={handleCuisinesChange}
                      input={<OutlinedInput />}
                      renderValue={(selected) => {
                        return selected.join(", ");
                      }}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {cuisinesOptions.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, cuisines, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="form-field">
                  <TextField
                    type="number"
                    id="rating"
                    label="Rating"
                    variant="outlined"
                    name="rating"
                    step="0.1"
                    min="0"
                    max="5"
                    required
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <TextField
                    type="text"
                    id="costForTwo"
                    label="Cost for Two"
                    variant="outlined"
                    name="costForTwo"
                    required
                    value={costForTwo}
                    onChange={(e) => setCostForTwo(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <input
                    type="file"
                    accept="image/*"
                    id="upload-image"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <label htmlFor="upload-image">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      sx={{
                        backgroundColor: "#f0f0f0",
                        borderRadius: "8px",
                        padding: "10px",
                        "&:hover": {
                          backgroundColor: "#e0e0e0",
                        },
                      }}
                    >
                      <CloudUpload sx={{ fontSize: 40 }} />
                      <Typography
                        variant="subtitle1"
                        sx={{ marginLeft: "10px", color: "#555" }}
                      >
                        {imageFile ? imageFile.name : "Choose File"}
                      </Typography>
                    </IconButton>
                  </label>
                </div>
              </div>
              <div className="float-right mt-5">
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRestaurant;
