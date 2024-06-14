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
import { GetListBill } from "../../services/Bill";
import { GetListStaff } from "../../services/Staff";
import { getDDH } from "../../services/OrderNCC";

export default function DenseTable() {
  function Edit(data) {
    //console.log(MANCC)
    // console.log('d',data.EMAIL)
    React.refModalEditDDH?.open();
    React.refModalEditDDH.Edit(data);
  }

  function Delete(MANCC) {
    //console.log(MANCC)
    // console.log('d',data.EMAIL)
    React.refModalDeleteDDH?.open();

    React.refModalDeleteDDH.Delete(MANCC);
    
  }

  const [listProviders, setListProviders] = useState([]);
  const [listBill, setListBill] = useState([])
  const [listStaff, setListStaff] = useState([])


  useEffect(() => {
    async function fetchListDDHs() {
      const getListProviders = GetListProvider().then((res) => {
        return res.data;
      });
      const getListBills = getDDH().then((res) => {
        return res.data;
      });
      const getListStaffs = GetListStaff().then((res) => {
        return res.data;
      });

      const promises = [getListProviders, getListBills, getListStaffs];

      const [providers, bills, staffs] = await Promise.all(promises);

      setListProviders(providers);
      setListBill(bills);
      setListStaff(staffs);
    }

    fetchListDDHs();
  }, []);

  return (
    <>
      <TableContainer TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Mã DDH</TableCell>
              <TableCell align="left">Ngày đặt</TableCell>
              <TableCell align="left">NCC</TableCell>
              <TableCell align="left">Nhân viên</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listBill && listBill.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.MADDH}
                </TableCell>
                <TableCell align="left">{row.NGAYDAT}</TableCell>
                {listProviders.map(prov => {
                    if(prov.MANCC === row.MANCC){
                        return  <TableCell align="left">{prov.TENNCC}</TableCell>

                    }
                })}
                {listStaff.map(staff => {
                    if(staff.MANV === row.MANV){
                        return  <TableCell align="left">{staff.HO.concat(' ').concat(staff.TEN)}</TableCell>

                    }
                })}
                
                <TableCell align="right">
                  <i
                    className="fa fa-search"
                    style={{ paddingRight: "10px" }}
                    onClick={() => Edit(row)}
                  ></i>
                  <i
                    className="fas fa-pencil-alt"
                    onClick={() => Delete(row.MANCC)}
                  ></i>
                </TableCell>  
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <FormModalEdit ref={(ref) => (React.refModalEditDDH = ref)} />
        <FormModalDelete ref={(ref) => (React.refModalDeleteDDH = ref)} />
      </TableContainer>
    </>
  );
}
