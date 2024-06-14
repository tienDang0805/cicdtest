import React, { Component } from 'react'
import { Box, Button } from '@mui/material'
import Table from './Table'
import FormModalPromo from './FormModal'




export default class Promo extends Component {
  onCreate = () => {
    this.refModal?.open()
    //this.refModal.Create()
}
  render() {
    return (
      <div className='container'>
                <div className='row'>
                    <Box className='col-6' sx={{ display: 'flex' }}>
                    </Box>
                    <Box className='col-6' sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={this.onCreate} variant="contained">Create</Button>
                        
                    </Box>
                </div>
                <div className='row mt-2'>
                    <div className='col-12'>
                        <Table/>
                    </div>
                </div>
                <FormModalPromo ref={ref => this.refModal = ref} />

            </div>
    )
  }
}
