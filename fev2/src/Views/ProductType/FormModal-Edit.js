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
import {UpdateProductTypeById} from '../../services/Product'


export default class FormModalEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MALOAI:'',
                TENLOAI: '',

            },
        }
    }
    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }
    Edit(row) {


        this.setState({
            data: {
                MALOAI: row.MALOAI,
                TENLOAI: row.TENLOAI,
                
            }
        })
        // this.setState({data: {SDT: row.SDT}})
        // this.setState({data: {EMAIL: row.EMAIL}})
        // this.setState({data: {DIACHI: row.DIACHI}})
        // console.log('f',this.state.data.EMAIL)


    }



    onSubmit = async (event) => {
        event.preventDefault()

        // const formData = Array.from(new FormData(event.target))
        // console.log(formData)
        console.log(this.state.data)
        await this.updateProductType()
        this.Close()
    }





    ///api
    async updateProductType() {
        const data = {
            TENLOAI: this.state.data.TENLOAI,

        }
        await UpdateProductTypeById(this.state.data.MALOAI, data)

    }



render = () => {
    return (
        <Dialog
            className='dialog edit product type'
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
                <DialogTitle>Product type form</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Tên"
                                defaultValue={Object(this.state.data.TENLOAI).length && this.state.data.TENLOAI}
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENLOAI: e.target.value} })
                                }}

                            />
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
