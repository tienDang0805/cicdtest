import React, { Component } from 'react'
import { Box, Button, TableRow, TableContainer } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { GetListPD } from '../../services/Bill';
import { findByState } from "../../services/Phieudat";


export default class ShipperDetail extends Component {
  constructor (props) {
    super(props)
    this.state={
      filter:'ALL',
      listPds: []
    }
  }

  componentDidMount() {
    GetListPD().then(res => {
      this.setState({listPds: res.data})
    })
  }

  
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Box>
            
          </Box>
          
        </div>
        <div className='row mt-2'>
          <div className='col-12'>
          {/* {console.log('in',this.state.filter, this.state.listPds)} */}
            
          </div>
        </div>
      </div>
    )
  }
}
