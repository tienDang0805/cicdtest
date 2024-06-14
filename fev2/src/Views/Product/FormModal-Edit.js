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
import { UpdateProductById } from '../../services/Product'
import { checkPrice } from '../../helper/convertPrice';
import { GetListBrand } from '../../services/Brand';
import { CreateProduct, GetListWinetype } from '../../services/Product'
import { getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import jwt from 'jwt-decode'




export default class FormModalEditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            listWinetype: [],
            listBrand: [],
            isSubmit: false,
            data: {
                MADONG: '',
                TENDONG: '',
                GIA: 0,
                TRANGTHAI: '',
                HINHANH: '',
                MOTA: '',
                CHITIET: '',
                SOLUONGTON: 0,
                MALOAI: '',
                MATH: '',
                MANCC: '',
            },
        }
    }
    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    async componentDidMount() {
        await GetListWinetype().then(res => {
            // console.log(res.data)
            this.setState({ listWinetype: res.data })
        })
        await GetListBrand().then(res => {
            this.setState({ listBrand: res.data })
        })
    }

    Edit(row) {


        let tempPrice = checkPrice(row.changeprices)

        // console.log(row)

        this.setState({
            data: {
                MADONG: row.MADONG,
                TENDONG: row.TENDONG,
                GIA: tempPrice,
                TRANGTHAI: row.TRANGTHAI,
                HINHANH: row.HINHANH,
                MOTA: row.MOTA,
                CHITIET: row.CHITIET,
                SOLUONGTON: row.SOLUONGTON,
                MALOAI: row.winetype.MALOAI,
                MATH: row.MATH,
                // MANCC: row.MANCC,
            }
        })


    }



    onSubmit = async (event) => {
        event.preventDefault()

        // const formData = Array.from(new FormData(event.target))
        // console.log(formData)
        console.log(this.state.data)

        this.setState({isSubmit: true})

        if (this.state.data.MALOAI.length === 0 ||
            this.state.data.MATH.length === 0 ||
            this.state.data.TENDONG.length === 0 ||
            this.state.data.GIA < 0 ||
            isNaN(this.state.data.GIA) === true ||
            isNaN(this.state.data.SOLUONGTON) === true ||
            this.state.data.SOLUONGTON < 0 ||
            this.state.data.HINHANH === 0 ||
            this.state.data.MOTA === 0 ||
            this.state.data.CHITIET === 0 

        ) {
            return
        }else{
            await this.updateProduct()
            this.Close()
        }
    }





    ///api
    async updateProduct() {
        let token = await jwt(getAccessTokenFromLocalStorage())
        const data = {
            TENDONG: this.state.data.TENDONG,
            GIA: this.state.data.GIA,
            TRANGTHAI: this.state.data.TRANGTHAI,
            HINHANH: this.state.data.HINHANH,
            MOTA: this.state.data.MOTA,
            CHITIET: this.state.data.CHITIET,
            SOLUONGTON: this.state.data.SOLUONGTON,
            MALOAI: this.state.data.MALOAI,
            MATH: this.state.data.MATH,
            MANCC: this.state.data.MANCC,
            MANV: token.userId,



        }
        await UpdateProductById(this.state.data.MADONG, data)

    }



    render = () => {
        return (
            <Dialog
                className='dialog edit product'

                fullWidth
                maxWidth={'md'}
                open={this.state.open}
                onClose={this.Close}
            >
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.onSubmit}
                >
                    <DialogTitle>Product edit form</DialogTitle>
                    <DialogContent>
                    <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1 },
                            }}

                        >

                            <div className='row'>
                                <div className='col-6'>
                                    <FormControl fullWidth style={{ marginTop: '20px' }}>
                                        <InputLabel id="demo-simple-select-label">Loại rượu</InputLabel>
                                        <Select
                                            MenuProps={{
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 40 * 4.5 + 8,
                                                        width: 250
                                                    }
                                                },
                                                // Show dropdow at bottom of select
                                                getContentAnchorEl: null,

                                                MenuListProps: {
                                                    tabindex: "1",
                                                    tabIndex: "1"
                                                }
                                            }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.data.MALOAI}
                                            // label="Chọn nhân viên giao"
                                            onChange={(e) => this.setState({ data: { ...this.state.data, MALOAI: e.target.value } })}
                                        >


                                            {this.state.listWinetype && this.state.listWinetype.map((cur) => {
                                                return (
                                                    <MenuItem value={cur.MALOAI}>{cur.TENLOAI}</MenuItem>)
                                            })}


                                        </Select>
                                        {(this.state.isSubmit && this.state.data.MALOAI.length === 0) && (
                                            <div style={{color: "red"}}>Vui lòng chọn loại rượu!</div>
                                        )}
                                    </FormControl>
                                </div>
                                <div className='col-6'>
                                    <FormControl fullWidth style={{ marginTop: '20px' }}>
                                        <InputLabel id="demo-simple-select-label">Thương hiệu</InputLabel>
                                        <Select
                                            MenuProps={{
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 40 * 4.5 + 8,
                                                        width: 250
                                                    }
                                                },
                                                // Show dropdow at bottom of select
                                                getContentAnchorEl: null,

                                                MenuListProps: {
                                                    tabindex: "1",
                                                    tabIndex: "1"
                                                }
                                            }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.data.MATH}
                                            // label="Chọn nhân viên giao"
                                            onChange={(e) => this.setState({ data: { ...this.state.data, MATH: e.target.value } })}
                                        >


                                            {this.state.listBrand && this.state.listBrand.map((cur) => {
                                                return (
                                                    <MenuItem value={cur.MATH}>{cur.TENTH}</MenuItem>)
                                            })}


                                        </Select>
                                        {(this.state.isSubmit && this.state.data.MATH.length === 0) && (
                                            <div style={{color: "red"}}>Vui lòng chọn thương hiệu!</div>
                                        )}
                                    </FormControl>
                                </div>
                            </div>

                            <FormControl fullWidth >
                                <TextField
                                    label="Tên dòng"
                                    InputProps={{
                                        name: "tendong"
                                    }}
                                    value={this.state.data.TENDONG}
                                    onChange={(e) => {
                                        this.setState({ data: { ...this.state.data, TENDONG: e.target.value } })
                                    }}

                                />
                                {(this.state.isSubmit && this.state.data.MALOAI.length === 0) && (
                                    <div style={{color: "red"}}>Vui lòng nhập tên dòng!</div>
                                )}
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label="Giá"
                                    InputProps={{
                                        name: "gia"
                                    }}
                                    value={this.state.data.GIA}
                                    onChange={(e) => this.setState({ data: { ...this.state.data, GIA: Number(e.target.value) } })}

                                />
                                {(this.state.isSubmit && this.state.data.GIA < 0) && (
                                    <div style={{color: "red"}}>Giá phải lớn hơn 0!</div>
                                )}
                                {(this.state.isSubmit && isNaN(this.state.data.GIA) === true) && (
                                    <div style={{color: "red"}}>Giá phải là 1 số!</div>
                                )}
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label="Trạng thái"
                                    InputProps={{
                                        name: "trangthai"
                                    }}
                                    value={this.state.data.TRANGTHAI}

                                    onChange={(e) => this.setState({ data: { ...this.state.data, TRANGTHAI: e.target.value } })}

                                />
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label=""
                                    InputProps={{
                                        name: "hinhanh"
                                    }}
                                    // value={this.state.data.HINHANH}

                                    type='file'
                                    onChange={(e) => this.setState({ data: { ...this.state.data, HINHANH: `img/${e.target.files[0].name}` } })}

                                />
                                {(this.state.isSubmit && this.state.data.HINHANH.length === 0) && (
                                    <div style={{color: "red"}}>Vui lòng chọn hình ảnh!</div>
                                )}
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label="Mô tả"
                                    InputProps={{
                                        name: "mota"
                                    }}
                                    value={this.state.data.MOTA}
                                    onChange={(e) => this.setState({ data: { ...this.state.data, MOTA: e.target.value } })}

                                />
                                {(this.state.isSubmit && this.state.data.MOTA.length === 0) && (
                                    <div style={{color: "red"}}>Vui lòng nhập mô tả!</div>
                                )}
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label="Chi tiết"
                                    InputProps={{
                                        name: "chitiet"
                                    }}
                                    value={this.state.data.CHITIET}
                                    onChange={(e) => this.setState({ data: { ...this.state.data, CHITIET: e.target.value } })}

                                />
                                {(this.state.isSubmit && this.state.data.CHITIET.length === 0) && (
                                    <div style={{color: "red"}}>Vui lòng nhập chi tiết!</div>
                                )}
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label="Số lượng tồn"
                                    InputProps={{
                                        name: "soluongton"
                                    }}
                                    value={this.state.data.SOLUONGTON}

                                    onChange={(e) => this.setState({ data: { ...this.state.data, SOLUONGTON: Number(e.target.value) } })}

                                />
                                {(this.state.isSubmit && this.state.data.SOLUONGTON < 0) && (
                                    <div style={{color: "red"}}>SLT phải lớn hơn 0!</div>
                                )}
                                {(this.state.isSubmit && isNaN(this.state.data.SOLUONGTON) === true) && (
                                    <div style={{color: "red"}}>SLT phải là 1 số!</div>
                                )}
                            </FormControl>




                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
