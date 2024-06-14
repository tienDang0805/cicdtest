import { Box, Button } from '@mui/material'
import React, { Component } from 'react'
import Table from './Table'
import FormModal from './FormModal-Provider'
export default class Provider extends Component {
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
                    
                        <Table />
                    </div>
                </div>
                <FormModal ref={ref => this.refModal = ref} />
                

            </div>
        )
    }
}
