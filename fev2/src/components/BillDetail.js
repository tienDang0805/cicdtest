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
import { GetBillByMAPD, UpdateBillById } from '../services/Bill';
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
import Item from '../Views/Checkout/Item';
import ItemPd from '../Views/Bill/Item';
import { GetCustomerById } from '../services/Customer';
import { GetStaffById } from '../services/Staff';
import Pdf from "react-to-pdf";



export default class BillDetailDialog extends React.Component {
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
            customer: {},
            bill: {},
            staff: {},
            nvgh:{},
            total: 0,
            ref : React.createRef()

        }
    }
    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    async Detail(row) {
        console.log(row)
        let totalTemp = 0
        row.ct_phieudats.map(cur => {
            totalTemp += cur.GIA * cur.SOLUONG
        })
        this.setState({ total: totalTemp.toFixed(2) })


        await GetCustomerById(row.MAKH).then(res => {
            this.setState({ customer: res.data })
        })
        
        
        this.setState({staff:row.staff})

        await GetStaffById(row.MANVGH).then(res => {
            this.setState({ nvgh: res.data })
        })


        await GetBillByMAPD(row.MAPD).then(res => {
            console.log(res.data)
            this.setState({bill: res.data})
        })

        

        // console.log('ghi chu',row.GHICHU)

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
                className='bill detail'

                fullWidth
                maxWidth={'md'}
                
                open={this.state.open}
                onClose={this.Close}
            >
                <form
                    noValidate
                    autoComplete="off"

                >
                    
                    <div className='row'>
                        <div ref={this.state.ref}>
                        <div className="container">
                        <div className="row" style={{marginTop:'10px'}}>
                            <div className='col-md-6'>
                                {(this.state.bill.MAHD !== undefined) && <p style={{fontSize:'13px'}}>{'Mã hoá đơn: '.concat(this.state.bill.MAHD)}</p>}
                                {(this.state.staff.HO !== undefined) && <p style={{fontSize:'13px'}}>{'Nhân viên lập: '.concat(this.state.staff.HO.concat(' ').concat(this.state.staff.TEN))}</p>   } 
                                {(this.state.nvgh.HO !== undefined) &&<p style={{fontSize:'13px'}}>{'Nhân viên giao hàng: '.concat(this.state.nvgh.HO.concat(' ').concat(this.state.nvgh.TEN))}</p>}    

                            </div>
                            <div className="col-md-6">
                                
                                <img style={{width:'200px'}} src="/img/logoReport.PNG" alt="" />
                                
                            </div>

                            
                        </div>
                    </div>
                        <div className='col-12' >
                            {/* <Box >Chi tiết: </Box> */}

                            <TableContainer TableContainer component={Paper} style={{marginLeft:'10px'}}>
                                <Table
                                    sx={{ minWidth: 820 , maxWidth: 820}}
                                    size="small"
                                    aria-label="a dense table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Sản phẩm</TableCell>
                                            <TableCell style={{ width: '25%' }}>Hình ảnh</TableCell>

                                            <TableCell>Số lượng</TableCell>
                                            <TableCell>Đơn giá</TableCell>
                                            <TableCell>Tỉ giá</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.listCTPD.map(cur => {
                                            return (
                                                <ItemPd

                                                    data={{ productId: cur.MADONG, quantity: cur.SOLUONG, GIA: cur.GIA }}

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
                        </div>
                        <DialogActions>
                            {/* <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button> */}
                            {/* <Button onClick={this.Close}>Xuất hoá đơn</Button> */}
                            <Pdf targetRef={this.state.ref} filename="bill.pdf" 
                                margin = '0 auto'
                                width=' 50% !important'
                                height= '100% !important'
                            >
                                {({ toPdf }) => <Button onClick={toPdf}>Xuất hoá đơn</Button>}
                            </Pdf>
                            <Button onClick={this.Close}>Close</Button>
                        </DialogActions>
                    </div>
                </form>

            </Dialog>
        );
    }

}
