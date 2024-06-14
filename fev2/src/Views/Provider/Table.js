import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { GetListProvider } from "../../services/Provider";
import FormModalEdit from "./FormModal-Edit";
import FormModalDelete from "./FormModal-Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ENUMBODY_TYPES } from "@babel/types";

export default function DenseTable() {
  function Edit(data) {
    //console.log(MANCC)
    // console.log('d',data.EMAIL)
    React.refModalEditProvider?.open();
    React.refModalEditProvider.Edit(data);
  }

  function Delete(MANCC) {
    //console.log(MANCC)
    // console.log('d',data.EMAIL)
    React.refModalDeleteProvider?.open();

    React.refModalDeleteProvider.Delete(MANCC);
    const index = listProviders.findIndex((x) => x.MANCC === MANCC);
    console.log(index);
    if (index >= 0) {
      listProviders.splice(index, 1);
      setListProviders([...listProviders]);
    }
  }

  const [listProviders, setListProviders] = useState([]);

  useEffect(() => {
    async function fetchListProviders() {
      const providers = (await GetListProvider()).data;

      setListProviders(providers);
    }

    fetchListProviders();
  }, []);

  return (
    <>
      <TableContainer TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Mã số</TableCell>
              <TableCell align="left">Tên</TableCell>
              <TableCell align="left">SĐT</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Địa chỉ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listProviders.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.MANCC}
                </TableCell>
                <TableCell align="left">{row.TENNCC}</TableCell>
                <TableCell align="left">{row.SDT}</TableCell>
                <TableCell align="left">{row.EMAIL}</TableCell>
                <TableCell align="left">{row.DIACHI}</TableCell>
                <TableCell align="right">
                  <i
                    className="fas fa-pencil-alt"
                    style={{ paddingRight: "10px" }}
                    onClick={() => Edit(row)}
                  ></i>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => Delete(row.MANCC)}
                  ></i>
                </TableCell>  
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <FormModalEdit ref={(ref) => (React.refModalEditProvider = ref)} />
        <FormModalDelete ref={(ref) => (React.refModalDeleteProvider = ref)} />
      </TableContainer>
    </>
  );
}
