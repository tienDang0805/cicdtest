import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react'
import { GetListProvider, UpdateProviderById } from '../../services/Provider'
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import ItemDDH from './Item';
import { getCtDDHById } from '../../services/OrderNCC';
import { GetStaffById } from '../../services/Staff';


export default class FormModalEditDDH extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MADDH: '',
            },
            listCTDDH: [],
            total:0,
            MANV:''
        }
    }
    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    async Edit(row) {
        let listTemp = []
        let temp = 0
        await getCtDDHById(row.MADDH).then(res => {
            listTemp = res.data
            this.setState({listCTDDH: res.data})
        })


        listTemp.map(cur => {
            temp += cur.GIA * cur.SOLUONG
        })
        
        this.setState({total:temp})
        
        await GetStaffById(row.MANV).then(res => {
            this.setState({NV: res.data.HO.concat(' ').concat(res.data.TEN)})
        })

    }

    render = () => {
        return (
            <Dialog
                className='dialog edit provider'

                fullWidth
                maxWidth={'md'}
                open={this.state.open}
                onClose={this.Close}
            >
                <form
                    noValidate
                    autoComplete="off"
                    
                >
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 650 }}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sản phẩm</TableCell>
                                    <TableCell style={{ width: '25%' }}>Hình ảnh</TableCell>

                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.listCTDDH.map(cur => {
                                    return (
                                                <ItemDDH
                                                    
                                                    data={{productId:cur.MADONG,quantity:cur.SOLUONG,GIA:cur.GIA}}
                                                    
                                                />
                                            );
                                })}
                            </TableBody>
                        </Table>
                        <Table style={{ marginTop: "20px" }}>
                            <TableRow
                                style={{ textAlign: "center", fontSize: "30px" }}
                            >
                                Tổng tiền: {this.state.total}${"   "}
                            </TableRow>
                            <TableRow
                                style={{ textAlign: "left", fontSize: "15px" }}
                            >
                                Nhân viên lập: {this.state.NV}{"   "}
                            </TableRow>
                        </Table>
                    </TableContainer>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
