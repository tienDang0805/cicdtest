import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import { GetListStaff,GetStaffById  } from '../../services/Staff'




export default function DenseTable() {


    const [listStaffs, setListStaffs] = useState([])


    useEffect(() => {
        async function fetchListStaffs() {
            const staffs = (await GetListStaff()).data

            setListStaffs(staffs)
        }

        fetchListStaffs()
    }, [])

    return (

        <TableContainer  component = { Paper }>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Họ & Tên</TableCell>
                        <TableCell align="left">Địa chỉ</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">SĐT</TableCell>
                        <TableCell align="left">Username</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {listStaffs.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MANV}</TableCell>
                            <TableCell align="left">{row.HO + ' ' + row.TEN}</TableCell>
                            <TableCell align="left">{row.DIACHI}</TableCell>
                            <TableCell align="left">{row.EMAIL}</TableCell>
                            <TableCell align="left">{row.SDT}</TableCell>
                            <TableCell align="left">{row.USERNAME}</TableCell>
                            <TableCell align="right">
                            {/* <i
                                className="fas fa-pencil-alt"
                                style={{ paddingRight: "10px" }}
                                onClick={() => Edit(row)}
                            ></i> */}
                            {/* <i
                                className="fas fa-trash-alt"
                                onClick={() => Delete(row.MANCC)}
                            ></i> */}
                            </TableCell>

                            {/* <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i> */}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
