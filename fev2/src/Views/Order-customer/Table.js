import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { GetListBill, GetListPD } from "../../services/Bill";
import { GetListCustomer } from "../../services/Customer";
import { GetNVGH } from "../../services/Staff";
import { findByState } from "../../services/Phieudat";
import FormModalEditBillCustomer from "./FormModal-Edit";
import FormModalDeleteBillCustomer from "./FormModal-Delete";


export default function DenseTable(props) {
    
    const listPds = props.list
    const [listCustomers, setListCustomers] = useState([]);
    const [listNVGH,setListNVGH] = useState([])

    

    useEffect(() => {
        async function fetchListCus() {
            const getcustomers = (await GetListCustomer()).data;
            const getListNVGH = (await GetNVGH()).data
            const promises = [getcustomers, getListNVGH];

            const [customers, nvghs] = await Promise.all(promises);
            setListCustomers(customers);
            setListNVGH(nvghs)
            
        }

        fetchListCus();
    }, []);

    
    function Edit(data) {
        console.log('data',data)
        React.refModalEditBillCustomer?.open();
        React.refModalEditBillCustomer.Edit(data);
    }

    // function Delete(MAPD, listNVGH ,data) {
    //     React.refModalDeleteBillCustomer?.open();
    //     React.refModalDeleteBillCustomer.Delete(MAPD,listNVGH, data);

    // }
    const totalCTPD = (list) => {
        let total = 0
        list.map(cur => {
            total += (cur.GIA * cur.SOLUONG)
        })
        
        return total.toFixed(2)
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã số</TableCell>
                            <TableCell align="left">Ngày</TableCell>
                            <TableCell align="left">Thông tin người đặt</TableCell>
                            <TableCell align="left">Trạng thái</TableCell>
                            <TableCell align="left">Tổng tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {listPds && listPds.map((row,index) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="left">{row.NGAYDAT}</TableCell>
                                <TableCell align="left">
                                    <TableRow align="left">
                                        Họ & tên: {row.HONN.concat(" ").concat(row.TENNN)}
                                    </TableRow>
                                    <TableRow align="left">Địa chỉ: {row.DIACHINN}</TableRow>
                                    <TableRow align="left">SĐT: {row.SDTNN}</TableRow>
                                    {listCustomers &&
                                        listCustomers.map((customer) => {
                                            if (row.MAKH == customer.MAKH) {
                                                return (
                                                    <TableRow align="left">
                                                        Email: {customer.EMAIL}
                                                    </TableRow>
                                                );
                                            }
                                        })}
                                </TableCell>

                                <TableCell align="left">{row.TRANGTHAI}</TableCell>
                                <TableCell align="left">{totalCTPD(row.ct_phieudats)} $</TableCell>
                                <TableCell align="left">

                                <i
                                    className="fa fa-search"
                                    style={{ paddingRight: "10px" }}
                                    onClick={() => Edit(row)}
                                ></i>
                                {/* <i
                                    className="fas fa-pencil-alt"
                                    onClick={() => Delete(row.MAPD, listNVGH, row)}
                                ></i> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <FormModalEditBillCustomer ref={(ref) => (React.refModalEditBillCustomer = ref)} />
                {/* <FormModalDeleteBillCustomer ref={(ref) => (React.refModalDeleteBill = ref)} listNVGH={listNVGH} /> */}
            </TableContainer>
        </>
    );
}
