// import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import db from "../../appwrite/databases";

const CardTable = ({ rows }) => {
  const formatPrice = (val) => {
    if (val !== null && val !== undefined) {
      val = val.toString().replace(/,/g, "");
      val = parseFloat(val);
      if (!isNaN(val)) {
        val = val.toFixed(2);
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  };

  // useEffect(() => {
  //   fetchDocuments();
  // }, []);

  // const fetchDocuments = async () => {
  //   try {
  //     console.log(db.Brands, "db");
  //     const response = await db.Restaurants.list();
  //     console.log(response, "res");
  //   } catch (error) {
  //     console.error("Failed to fetch documents:", error);
  //   }
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Restaurant Name</TableCell>
            <TableCell align="center">Cuisines&nbsp;</TableCell>
            <TableCell align="center">Rating&nbsp;</TableCell>
            <TableCell align="center">Cost For Two&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.cuisines.join(", ")}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              <TableCell align="center">
                ₹{formatPrice(row.costForTwo)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CardTable;
