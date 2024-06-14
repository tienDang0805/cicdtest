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
import { UpdateBillById } from '../../services/Bill';
import { TextareaAutosize } from '@mui/material';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Item from '../Checkout/Item';
import ItemPd from './Item';


export default class FormModalEditBillCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MAPD: '',
                NGAYDAT: '',
                HONN: '',
                TENNN: '',
                DIACHINN: '',
                SDTNN: '',
                GHICHU: '',
                TRANGTHAI: '',
                MANVD: '',
                MANVGH: '',
                MAKH: '',
            },
            listCTPD: [],
            total:0,
        }
    }
    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    Edit(row) {
        console.log('row',row)
        let totalTemp = 0
        row.ct_phieudats.map(cur => {
            totalTemp += (cur.GIA * cur.SOLUONG)
        })
        this.setState({total:totalTemp.toFixed(2)})

        this.setState({
            data: {
                MAPD: row.MAPD,
                NGAYDAT: row.NGAYDAT,
                HONN: row.HONN,
                TENNN: row.TENNN,
                DIACHINN: row.DIACHINN,
                SDTNN: row.SDTNN,
                GHICHU: row.GHICHU,
                TRANGTHAI: row.TRANGTHAI,
                MANVD: row.MANVD,
                MANVGH: row.MANVGH,
                MAKH: row.MAKH,

            },
            listCTPD: row.ct_phieudats
        })
        // this.setState({data: {SDT: row.SDT}})
        // this.setState({data: {EMAIL: row.EMAIL}})
        // this.setState({data: {DIACHI: row.DIACHI}})
        // console.log('f',this.state.data.EMAIL)


    }



    render = () => {
        return (
            <Dialog
                className='dialog edit bill'

                fullWidth
                maxWidth={'col-lg-'}
                open={this.state.open}
                onClose={this.Close}
            >
                <form
                    noValidate
                    autoComplete="off"
                >
                    <div className='row'>
                        <div className='col-4'>
                            <DialogTitle >Thông tin phiếu đặt</DialogTitle>
                            <DialogContent

                            >
                                <Box

                                    sx={{
                                        '& .MuiTextField-root': { m: 1 },
                                    }}

                                >
                                    <FormControl fullWidth >
                                        <TextField
                                            label="Ngày đặt"
                                            value={Object(this.state.data.NGAYDAT).length && this.state.data.NGAYDAT}
                                            InputProps={{
                                                name: "day"
                                            }}
                                        // onChange={(e) => {
                                        //     this.setState({data: {...this.state.data,NGAYDAT: e.target.value} })
                                        // }}

                                        />
                                    </FormControl>
                                    <FormControl fullWidth >
                                        <TextField
                                            label="Họ tên người nhận"
                                            value={Object(this.state.data.TENNN).length && this.state.data.HONN.concat(' ').concat(this.state.data.TENNN)}
                                            InputProps={{
                                                name: "name"
                                            }}
                                        // onChange={(e) => this.setState({data:{ ...this.state.data,TENNN: e.target.value} })}

                                        />
                                    </FormControl>
                                    <FormControl fullWidth >
                                        <TextField
                                            label="Địa chỉ"
                                            value={Object(this.state.data.DIACHINN).length && this.state.data.DIACHINN}
                                            multiline rows={2}
                                            InputProps={{
                                                name: "add"
                                            }}
                                        // onChange={(e) => this.setState({data: {...this.state.data,MASOTHUE: e.target.value} })}

                                        />
                                    </FormControl>
                                    <FormControl fullWidth >
                                        <TextField
                                            label="SĐT"
                                            value={Object(this.state.data.SDTNN).length && this.state.data.SDTNN}
                                            InputProps={{
                                                name: "phone"
                                            }}
                                        // onChange={(e) => this.setState({data: {...this.state.data,SDTNN: e.target.value} })}

                                        />
                                    </FormControl>
                                    <FormControl fullWidth >
                                        <TextField
                                            label="Trạng thái"
                                            value={Object(this.state.data.TRANGTHAI).length && this.state.data.TRANGTHAI}
                                            InputProps={{
                                                name: "l"
                                            }}
                                        // onChange={(e) => this.setState({data: {...this.state.data,TRANGTHAI: e.target.value} })}

                                        />
                                    </FormControl>
                                </Box>


                            </DialogContent>
                        </div>
                        <div className='col-8' >
                            {/* <Box >Chi tiết: </Box> */}
                            <DialogTitle >Chi tiết:</DialogTitle>
                            <TableContainer TableContainer component={Paper}>
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
                                            <TableCell>Đơn giá</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.listCTPD.map(cur => {
                                            return (
                                                <ItemPd
                                                    
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
                                </Table>
                            </TableContainer>

                        </div>
                        <DialogActions>
                            {/* <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button> */}
                            <Button onClick={this.Close}>Close</Button>
                        </DialogActions>
                    </div>
                </form>

            </Dialog>
        );
    }

}
