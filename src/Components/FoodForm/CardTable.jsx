import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
import db from "../../appwrite/databases";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';


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

const CardTable = ({ rows,onEdit,onDelete }) => {
  const [open, setOpen] = useState(false);
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

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setFormData({
      dishName: row.dishName || "",
      category: row.category || "",
      type: row.type || "veg",
      price: row.price || "",
      image: row.image || "",
      res_name: row.name || "",
    });
    setOpen(true);
  };
  const handleEdit = (row) => {
    onEdit(row);
  };
  const handleDelete = async (row)=>{
    try {
      const documentId = row.$id; 
      await onDelete(documentId); 
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };
  

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("Saved data:", formData);
    try {
      const restaurantId = selectedRow.$id;
      const dishitem = {
        dish_name: formData.dishName,
        category: formData.category,
        type: formData.type,
        price: formData.price,
        img_url: formData.image,
        restaurantId: restaurantId,
        restaurant_name: formData.res_name,
      };
      console.log(dishitem, "dishitem");
      const response = await db.dishes.create(dishitem);
      console.log(response, "response");
    } catch (error) {
      console.error(error);
    }

    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  return (
    <>
      <div className="shadow-2xl rounded-xl">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">S/N</TableCell>
                <TableCell align="center">Restaurant Name</TableCell>
                <TableCell align="center">Cuisines&nbsp;</TableCell>
                <TableCell align="center">Rating&nbsp;</TableCell>
                <TableCell align="center">Cost For Two&nbsp;</TableCell>
                <TableCell align="center">Actions&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    {row.cuisines.join(", ")}
                  </TableCell>
                  <TableCell align="center">{row.rating}</TableCell>
                  <TableCell align="center">₹{row.costForTwo}</TableCell>
                  <TableCell align="center">
                    <div className='d-flex justify-between'>
                      <AddBoxIcon onClick={() => handleRowClick(row)}/>
                      <DriveFileRenameOutlineIcon  onClick={() => handleEdit(row)}/>
                      <DeleteForeverIcon onClick={() => handleDelete(row)}/>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

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
    </>
  );
};

export default CardTable;
