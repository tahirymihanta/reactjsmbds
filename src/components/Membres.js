import React from "react";
import "./Membres.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Membres = ({ membre }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      Nom :  {membre.name}<br/>
      Birthday : {membre.birthDate}<br/>
      Career : {membre.begin} - {membre.end}<br/>
      Gender : {membre.gender}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.abstract}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.dbp_abstract}
    </TableCell>
  </TableRow>
);

export default Membres;