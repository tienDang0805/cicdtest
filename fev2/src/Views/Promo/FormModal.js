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
import { CreatePromo } from '../../services/Promo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import jwt from 'jwt-decode' 
import * as moment from "moment";



export default class FormModalPromo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MAKM: '',
                TENKM: '',
                NGAYBATDAU: new Date,
                NGAYKETTHUC: new Date,
                LIDO: '',
                MANV: '',

            },
            isSubmit: false,

        }
    }



    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }




    onSubmit = async (event) => {
        event.preventDefault()
        // this.setState({data:{
        //     ...this.state.data,
        //     MANV: token.userId
        // }})
        console.log(this.state.data)

        this.setState({ isSubmit: true })

        let newdate = new Date

        if (this.state.data.TENKM.length === 0 ||
            this.state.data.NGAYKETTHUC <= newdate ||
            this.state.data.NGAYKETTHUC <= this.state.data.NGAYBATDAU ||
            this.state.data.LIDO.length === 0
        ) {
            return
        } else {
            await this.createPromo()
            this.Close()
        }

    }

    async createPromo() {
        let token = await jwt(getAccessTokenFromLocalStorage())
        const data = {
            MAKM: '050',
            TENKM: this.state.data.TENKM,
            NGAYBATDAU: moment(this.state.data.NGAYBATDAU).format("YYYY-MM-DD"),
            NGAYKETTHUC: moment(this.state.data.NGAYKETTHUC).format("YYYY-MM-DD"),
            LIDO: this.state.data.LIDO,
            MANV: token.userId,

        }
        console.log(data)
        await CreatePromo( data)

    }
    
    handleFromTime = (time) => {
        this.setState({data:{
            ...this.state.data,
            NGAYBATDAU:time,
        }})
        console.log(time)
      };
    handleToTime = (time) => {
        this.setState({data:{
            ...this.state.data,
            NGAYKETTHUC:time,
        }})
        console.log(time)
      };

    render = () => {
        return (
            <Dialog
                className='dialog create promo'
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
                    <DialogTitle>Promotion form</DialogTitle>
                    <DialogContent>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1 },
                            }}

                        >
                            <FormControl fullWidth >
                                <TextField
                                    label="Tên KM"
                                    InputProps={{
                                        name: "Ten"
                                    }}
                                    onChange={(e) => {
                                        this.setState({ data: { ...this.state.data, TENKM: e.target.value } })
                                    }}

                                />
                                {(this.state.isSubmit && this.state.data.TENKM.length === 0) && (
                                    <div style={{ color: "red" }}>Vui lòng điền tên đợt khuyến mãi!</div>
                                )}
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Ngày bắt đầu"
                                    // views={['year', 'month']}
                                    value={this.state.data.NGAYBATDAU}
                                    onChange={(e) => this.handleFromTime(e)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DatePicker
                                    label="Ngày kết thúc"
                                    // views={['year', 'month']}
                                    value={this.state.data.NGAYKETTHUC}
                                    onChange={(e) => this.handleToTime(e)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                {(this.state.isSubmit && this.state.data.NGAYKETTHUC <= this.state.data.NGAYBATDAU) && (
                                    <div style={{ color: "red" }}>Ngày kết thúc phải lớn hơn ngày bắt đầu!</div>
                                )}
                                {(this.state.isSubmit && this.state.data.NGAYKETTHUC <= new Date) && (
                                    <div style={{ color: "red" }}>Ngày kết thúc phải lớn hơn ngày hiện tại!</div>
                                )}
                                
                            </LocalizationProvider>
                            {/* <div className='row'>
                                <div className='col-6'>
                                    <FormControl fullWidth >
                                        <TextField
                                            label="Ngày bắt đầu"
                                            InputProps={{
                                                name: "SDT"
                                            }}
                                            onChange={(e) => this.setState({ data: { ...this.state.data, NGAYBATDAU: e.target.value } })}

                                        />
                                    </FormControl>
                                </div>
                                <div className='col-6'>
                                    <FormControl fullWidth >
                                        <TextField
                                            label="Ngày kết thúc"
                                            InputProps={{
                                                name: "Email"
                                            }}
                                            onChange={(e) => this.setState({ data: { ...this.state.data, NGAYKETTHUC: e.target.value } })}

                                        />
                                    </FormControl>
                                </div>
                            </div> */}


                            <FormControl fullWidth >
                                <TextField
                                    label="Lí do"
                                    InputProps={{
                                        name: "Diachi"
                                    }}
                                    onChange={(e) => this.setState({ data: { ...this.state.data, LIDO: e.target.value } })}

                                />
                                {(this.state.isSubmit && this.state.data.LIDO.length === 0) && (
                                    <div style={{ color: "red" }}>Vui lòng điền lí do!</div>
                                )}
                            </FormControl>
                            {/* <FormControl fullWidth >
                                <TextField
                                    label="Mã NV"
                                    InputProps={{
                                        name: "Diachi"
                                    }}
                                    onChange={(e) => this.setState({ data: { ...this.state.data, MANV: e.target.value } })}

                                />
                            </FormControl> */}
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
