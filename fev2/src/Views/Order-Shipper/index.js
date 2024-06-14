import React, { Component } from 'react'
import { Box, Button, TableRow, TableContainer } from '@mui/material'
import Table from './Table'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { GetListPD } from '../../services/Bill';
import { getListPdByNVGH } from '../../services/Phieudat';
import { findByState } from "../../services/Phieudat";
import { getListPdByStateAndNVGH } from '../../services/Phieudat';
import { addAccessTokenToLocalStorage, addUserProfileToLS, getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import jwt from 'jwt-decode' 
import {getMe} from '../../services/Getme'


export default class OrderShipper extends Component {
  constructor (props) {
    super(props)
    this.state={
      filter:'ALL',
      listPds: [],
      usrId: '',
    }
  }

  async componentDidMount() {

    const uid = await (await getMe(getAccessTokenFromLocalStorage())).data.userId
    this.setState({usrId:uid})
    // console.log('id',uid)


    getListPdByNVGH(uid).then(res => {
      // console.log(res.data)
      this.setState({listPds: res.data})
    })
  }

  handleChange = (e) => {
    getListPdByStateAndNVGH(e.target.value, this.state.usrId).then(res => {
      // console.log(res.data)

      this.setState({listPds: res.data})
      this.setState({filter: e.target.value})
    })
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
              <FormControlLabel value="Đã phân công" control={<Radio />} label="Đã phân công" />
              <FormControlLabel value="Đã giao" control={<Radio />} label="Đã giao hàng" />
              {/* <FormControlLabel value="Đã huỷ" control={<Radio />} label="Đã huỷ" /> */}
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
            <Table list={this.state.listPds} id={this.state.usrId}/>
          </div>
        </div>
      </div>
    )
  }
}
