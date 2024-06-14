import React, { Component } from 'react'
import { Box, Button, TableRow, TableContainer } from '@mui/material'
import Table from './Table'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { getListPdByCustomer, getListPdByNVGH, getListPdByStateAndCustomer } from '../../services/Phieudat';
import { getListPdByStateAndNVGH } from '../../services/Phieudat';
import { addAccessTokenToLocalStorage, addUserProfileToLS, getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import jwt from 'jwt-decode' 


export default class OrderCustomer extends Component {
  constructor (props) {
    super(props)
    this.state={
      filter:'ALL',
      listPds: [],
      tokenDecode: jwt(getAccessTokenFromLocalStorage()),
    }
  }

  componentDidMount() {
    const token = getAccessTokenFromLocalStorage()
    const tokenDecode = jwt(token)
    // console.log(tokenDecode.userId)


    getListPdByCustomer(tokenDecode.userId).then(res => {
      console.log(res.data)
      this.setState({listPds: res.data})
    })
  }

  handleChange = (e) => {
    const token = getAccessTokenFromLocalStorage()
    const tokenDecode = jwt(token)
    getListPdByStateAndCustomer(e.target.value, tokenDecode.userId).then(res => {
      console.log(res.data)

      this.setState({listPds: res.data})
      this.setState({filter: e.target.value})
    })
    ///getpd by cus
  }
  onCreate = () => {
    this.refModal?.open()
    //this.refModal.Create()
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Box>
            <FormLabel id="demo-row-radio-buttons-group-label">Lọc theo: </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={this.state.filter}
              onChange={(e) => this.handleChange(e)}
            >
              <FormControlLabel value="ALL" control={<Radio />} label="Tất cả" />
              <FormControlLabel value="Đã phân công" control={<Radio />} label="Đã xác nhận" />
              <FormControlLabel value="Đã giao" control={<Radio />} label="Đã hoàn tất" />
              <FormControlLabel value="Đã huỷ" control={<Radio />} label="Đã huỷ" />
            </RadioGroup>
          </Box>
          {/* <Box className='col-6' sx={{ display: 'flex' }}>
                    </Box>
                    <Box className='col-6' sx={{ display: 'flex' }}>
                    <Button onClick={this.onCreate} variant="contained">Create</Button>
                        
                    </Box> */}
        </div>
        <div className='row mt-2'>
          <div className='col-12'>
          {/* {console.log('in',this.state.filter, this.state.listPds)} */}
            <Table list={this.state.listPds}/>
          </div>
        </div>
      </div>
    )
  }
}
