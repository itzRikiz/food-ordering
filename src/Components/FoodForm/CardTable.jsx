import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CardTable = () => {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState({
    dishName: "",
    category: "",
    type: "veg",
    price: "",
    image: "",
    restaurantId: "",
    res_name: "",
  });
  const [resFormData, setResFormData] = useState({
    restaurantName: "",
    cuisines: [],
    rating: "",
    costForTwo: "",
    image: null,
  });

  const cuisineOptions = [
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Japanese",
    "Thai",
    "Mediterranean",
    "American",
  ];
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", resFormData.image);
    formData.append("upload_preset", "fooddeliveryapp");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/domfaq9kv/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      // toast.success("Image Upoaded Succesfully");
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      return "";
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("Saved data:", formData);
    handleClose();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(resFormData);

    let cloudinaryImageUrl = "";
    if (resFormData.image) {
      cloudinaryImageUrl = await uploadImage();
    }
    if (!cloudinaryImageUrl) {
      resFormData;
    }
    console.log(resFormData, "resFormData");

    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(e, "e");
    console.log(file, "file");

    if (file) {
      setResFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };
  useEffect(() => {
    fetchData();
    // emptyFunction();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/restaurants");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setRow(data.restaurants);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
      setRow([]);
    }
  };

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl">
      <div className="flex items-center justify-between mb-6 space-x-4">
        <input
          type="text"
          placeholder="Type To Search"
          className="w-full max-w-xs px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Restaurant
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Restaurant Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Cuisines&nbsp;
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Rating&nbsp;
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Cost For Two&nbsp;
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Actions&nbsp;
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {row.map((row, index) => (
                  <tr
                    key={row.name}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {row.cuisines.join(", ")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {row.rating}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      ₹{row.costForTwo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      <div className="d-flex justify-between">
                        <AddBoxIcon />
                        <DriveFileRenameOutlineIcon />
                        <DeleteForeverIcon />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Add Restaurant</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  value={resFormData.restaurantName}
                  onChange={(e) =>
                    setResFormData((prev) => ({
                      ...prev,
                      restaurantName: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Cuisines
                </label>
                <select
                  multiple
                  value={resFormData.cuisines}
                  onChange={(e) =>
                    setResFormData((prev) => ({
                      ...prev,
                      cuisines: Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      ),
                    }))
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {cuisineOptions.map((cuisine, index) => (
                    <option key={index} value={cuisine}>
                      {cuisine}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Hold Ctrl/Cmd to select multiple
                </p>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Rating
                </label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={resFormData.rating}
                  onChange={(e) =>
                    setResFormData((prev) => ({
                      ...prev,
                      rating: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Cost For Two
                </label>
                <input
                  type="number"
                  value={resFormData.costForTwo}
                  onChange={(e) =>
                    setResFormData((prev) => ({
                      ...prev,
                      costForTwo: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Restaurant Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Restaurant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 800,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {selectedRow && (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Add Dish
                </Typography>
                <TextField
                  margin="dense"
                  name="Restaurant Name"
                  label="Restaurant Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  disabled
                  value={formData.res_name}
                />
                <TextField
                  margin="dense"
                  name="dishName"
                  label="Dish Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={formData.dishName}
                  onChange={handleChange}
                />
                <FormControl fullWidth margin="dense">
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    value={formData.category}
                    label="Category"
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="North Indian">North Indian</MenuItem>
                    <MenuItem value="South Indian">South Indian</MenuItem>
                    <MenuItem value="Chinese">Chinese</MenuItem>
                    <MenuItem value="Italian">Italian</MenuItem>
                    <MenuItem value="Mexican">Mexican</MenuItem>
                    <MenuItem value="Desserts">Desserts</MenuItem>
                    <MenuItem value="Beverages">Beverages</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset" margin="dense">
                  <Typography component="legend">Type</Typography>
                  <RadioGroup
                    aria-label="type"
                    name="type"
                    value={formData.type}
                    onChange={handleRadioChange}
                    row
                  >
                    <FormControlLabel
                      value="veg"
                      control={<Radio />}
                      label="Veg"
                    />
                    <FormControlLabel
                      value="non-veg"
                      control={<Radio />}
                      label="Non-Veg"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  margin="dense"
                  name="price"
                  label="Price"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={formData.price}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  name="image"
                  label="Image URL"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={formData.image}
                  onChange={handleChange}
                />
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CardTable;
