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
import { async } from 'q';
import { CreateProduct, GetListWinetype } from '../../services/Product'
import { getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import jwt from 'jwt-decode'
import { GetListProvider } from '../../services/Provider';
import { GetListBrand } from '../../services/Brand';

export default class FormModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            listWinetype: [],
            listBrand: [],
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

            },
            isSubmit: false,

        }
    }

    async componentDidMount() {
        await GetListWinetype().then(res => {
            console.log(res.data)
            this.setState({ listWinetype: res.data })
        })
        await GetListBrand().then(res => {
            this.setState({ listBrand: res.data })
        })
    }


    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }




    onSubmit = async (event) => {
        event.preventDefault()
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
            await this.createProduct()
            this.Close()
        }

    }

    async createProduct() {
        let token = await jwt(getAccessTokenFromLocalStorage())
        console.log(token)

        const data = {
            MADONG: '050',
            TENDONG: this.state.data.TENDONG,
            GIA: this.state.data.GIA,
            TRANGTHAI: this.state.data.TRANGTHAI,
            HINHANH: this.state.data.HINHANH,
            MOTA: this.state.data.MOTA,
            CHITIET: this.state.data.CHITIET,
            SOLUONGTON: this.state.data.SOLUONGTON,
            MALOAI: this.state.data.MALOAI,
            MATH: this.state.data.MATH,
            MANV: token.userId,



        }
        console.log(data)
        await CreateProduct(data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create product'
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
                    <DialogTitle>Product form</DialogTitle>
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
                                    onChange={(e) => this.setState({ data: { ...this.state.data, TRANGTHAI: e.target.value } })}

                                />
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField
                                    label=""
                                    InputProps={{
                                        name: "hinhanh"
                                    }}
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
                        <Button type='submit' color='success' variant='contained'>Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
