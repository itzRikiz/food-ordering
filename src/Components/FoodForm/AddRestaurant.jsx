import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import db from "../../appwrite/databases";
import CardTable from "./CardTable";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  const [row, setRow] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await db.Restaurants.list();
      setRow(response.documents);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
      setRow([]);
    }
  };

  const emptyFunction = () => {
    setName("");
    setCuisines([]);
    setRating("");
    setCostForTwo("");
    setImageFile(null);
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "fooddeliveryapp");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/domfaq9kv/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error("Image upload failed:", error);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let cloudinaryImageUrl = "";
    if (imageFile) {
      cloudinaryImageUrl = await uploadImage();
    }

    if (cloudinaryImageUrl) {
      const newRestaurant = {
        name,
        cuisines,
        rating: parseFloat(rating),
        costForTwo,
        cloudinaryImageId: cloudinaryImageUrl,
      };

      try {
        await db.Restaurants.create(newRestaurant);
        fetchData();
        emptyFunction();
      } catch (error) {
        console.error("Failed to add restaurant:", error);
      }
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
      <div className="flex justify-center mt-16 drop-shadow-xl">
        <h2 className="px-20 text-2xl m-10">Add Restaurant</h2>
      </div>
      <div>
        <div className="px-20">
          <form onSubmit={handleSubmit}>
            <div className="p-20 border rounded-xl shadow-xl">
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
                  ></TextField>
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
                      MenuProps={MenuProps}
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
                  ></TextField>
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
                  ></TextField>
                </div>
                <div className="form-field">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
              <div className="float-right mt-5">
                <Button variant="contained" type="submit">
                  Add Restaurant
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 px-20 shadow-xl">
          <CardTable rows={row} />
        </div>
      </div>
    </>
  );
};

export default AddRestaurant;
