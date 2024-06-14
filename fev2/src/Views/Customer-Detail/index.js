import React, { Component } from 'react'
import { Box, Button, TableRow, TableContainer } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { GetListPD } from '../../services/Bill';
import { findByState } from "../../services/Phieudat";
import { GetCustomerById, updateCustomerDetail, updateCustomerPassword } from '../../services/Customer';
import { getUser } from '../../helper/accessToken'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { getUserProfileFromLS } from '../../helper/accessToken';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as moment from "moment";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import jwt from 'jwt-decode' 
import { getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import { loginUser } from '../../services/Customer';






export default class CustomerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'ALL',
      customer: JSON.parse(getUserProfileFromLS()),
      oldPass:'',
      newPass:'',
      data: {
        MAKH: '',
        HO: '',
        TEN: '',
        GIOITINH: '',
        NGAYSINH: '',
        DIACHI: '',
        SDT: '',
        EMAIL: '',
        USERNAME: '',
        PASSWORD: '',
      },

    }
  }

  componentDidMount() {
    const token = jwt(getAccessTokenFromLocalStorage())
    // let id = JSON.parse(getUser()).userId
    GetCustomerById(token.userId).then(res => {
      // console.log('date', res.data)
      this.setState({
        customer: res.data, data: {
          MAKH: res.data.MAKH,
          HO: res.data.HO,
          TEN: res.data.TEN,
          GIOITINH: res.data.GIOITINH,
          NGAYSINH: res.data.NGAYSINH,
          DIACHI: res.data.DIACHI,
          SDT: res.data.SDT,
          EMAIL: res.data.EMAIL,
          USERNAME: res.data.USERNAME,
          PASSWORD: res.data.PASSWORD,

        }
      })
    })

  }

  handleName = (e) => {
    let ho = e.target.value.trim().split(' ').slice(0, -1).join(' ')
    let ten = e.target.value.trim().split(' ').slice(-1).join(' ')
    this.setState({ data: { ...this.state.data, HO: ho, TEN: ten } })
  }

  handleSubmit(data) {
    // console.log(data)
    updateCustomerDetail(data.MAKH, data).then(res => {
      if (res.status === 200) {
        alert('Cập nhập thành công')
      }

    })
  }

  handleDate = (time) => {
    // console.log('timeeeee', time)
    let vTime = moment(time).format("YYYY-MM-DD");
    this.setState({
      data: {
        ...this.state.data,
        NGAYSINH: vTime
      }
    })
  }
  handleGender = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        GIOITINH: event.target.value
      }
    })
  }

  handleSubmitPassword = async (oldPass, newPass, data) => {
    // console.log(oldPass, newPass)

    //validate
    if(oldPass === '' || newPass === ''){
      alert('Mật khẩu cũ & mới không được để trống')
    }

    const payload = {
      USERNAME:this.state.data.USERNAME,
      PASSWORD: oldPass
    }

    console.log(payload)

    await loginUser(payload).then(response => {
      
      if((response.status === 201 || response.status === 200) && response.data.role === 'customer') {
        // alert('Mật khẩu chính xác')

        let newData = {
          MAKH: data.MAKH,
          HO: data.HO,
          TEN: data.TEN,
          GIOITINH: data.GIOITINH,
          NGAYSINH: data.NGAYSINH,
          DIACHI: data.DIACHI,
          SDT: data.SDT,
          EMAIL: data.EMAIL,
          USERNAME: data.USERNAME,
          PASSWORD: newPass,

        }

        updateCustomerPassword(data.MAKH, newData).then(res => {
          if (res.status === 200) {
            alert('Cập nhập thành công')
          }
    
        })
      }
    },reason => {
      alert('Mật khẩu không chính xác')
    })
    


  }

  render() {
    return (
      <TableContainer TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <div className="billing-address">

            <Box
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <div className='row'>
                <div className='col-8'>
                  <FormControl fullWidth>
                    <TextField
                      label="Họ và tên"
                      defaultValue={this.state.customer && this.state.customer.HO.concat(
                        " "
                      ).concat(this.state.customer.TEN)}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.handleName(e)}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                  <FormControl fullWidth>
                    <TextField
                      label="Số điện thoại"
                      defaultValue={this.state.customer ? this.state.customer.SDT : ''}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.setState({ data: { ...this.state.data, SDT: e.target.value } })}
                    />
                  </FormControl>
                </div>
              </div>

              <div className='row'>
                <div className='col-8'>
                  <FormControl fullWidth>
                    <TextField
                      label="Địa chỉ"
                      defaultValue={this.state.customer && this.state.customer.DIACHI}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.setState({ data: { ...this.state.data, DIACHI: e.target.value } })}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                  {/* <FormControl fullWidth>
                    <TextField
                      label="Giới tính"
                      defaultValue={this.state.customer ? this.state.customer.GIOITINH : ''}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.setState({ data: { ...this.state.data, GIOITINH: e.target.value } })}
                    />
                  </FormControl> */}
                  <FormControl style={{marginTop:'8px', marginLeft:'7px'}}>
                    <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={this.state.customer ? this.state.customer.GIOITINH : ''}
                      label="Giới tính"
                      onChange={(e) => this.handleGender(e)}
                    >
                      <MenuItem value={'Nam'}>Nam</MenuItem>
                      <MenuItem value={'Nữ'}>Nữ</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className='row'>
                <div className='col-8'>
                  <FormControl fullWidth>
                    <TextField
                      label="Email"
                      defaultValue={this.state.customer && this.state.customer.EMAIL}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.setState({ data: { ...this.state.data, EMAIL: e.target.value } })}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Ngày sinh"
                        // views={['year', 'month']}
                        inputFormat='yyyy/MM/dd'
                        value={this.state.data.NGAYSINH}
                        onChange={this.handleDate}
                        renderInput={(params) => <TextField {...params} />}
                      />

                    </LocalizationProvider>
                  </FormControl>
                </div>
              </div>







            </Box>
            <Table style={{ marginTop: "20px" }}>
              <TableRow
                style={{ textAlign: "center", fontSize: "30px" }}
              >
                <Button
                  variant="outlined"
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    color: "#FF5733",
                    borderColor: "#FF5733",
                    marginBottom: '20px',
                  }}
                  onClick={() => this.handleSubmit(this.state.data)}
                >
                  Cập nhập
                </Button>
              </TableRow>
            </Table>
          </div>

        </Table>


        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <div className='row'>
            <div className='col-1'>

            </div>
            <div className='col-11'>
              <p style={{fontSize:'30px'}}>Đổi mật khẩu: </p>
            </div>
          </div>
          <div className="billing-address">

            <Box
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <div className='row'>
                <div className='col-8'>
                  <FormControl fullWidth>
                    <TextField
                      type={'password'}
                      label="Mật khẩu cũ"
                      defaultValue={''}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.setState({ oldPass: e.target.value })}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                 
                </div>
              </div>

              <div className='row'>
                <div className='col-8'>
                  <FormControl fullWidth>
                    <TextField
                      type={'password'}
                      label="Mật khẩu mới"
                      defaultValue={''}
                      InputProps={{
                        name: "Email",
                      }}
                      onChange={(e) => this.setState({ newPass: e.target.value })}
                    />
                  </FormControl>
                </div>
                <div className='col-4'>
                  
                </div>
              </div>
              







            </Box>
            <Table style={{ marginTop: "20px" }}>
              <TableRow
                style={{ textAlign: "center", fontSize: "30px" }}
              >
                <Button
                  variant="outlined"
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    color: "#FF5733",
                    borderColor: "#FF5733",
                    marginBottom: '20px',
                  }}
                  onClick={() => this.handleSubmitPassword(this.state.oldPass, this.state.newPass, this.state.data)}
                >
                  Xác nhận
                </Button>
              </TableRow>
            </Table>
          </div>

        </Table>
      </TableContainer>
    )
  }
}
