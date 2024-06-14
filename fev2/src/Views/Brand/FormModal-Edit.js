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
import {UpdateBrandById} from '../../services/Brand'


export default class FormModalEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MATH:'',
                TENTH: '',

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
                MATH: row.MATH,
                TENTH: row.TENTH,
                
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
        await this.updateBrand()
        this.Close()
    }





    ///api
    async updateBrand() {
        const data = {
            TENTH: this.state.data.TENTH,

        }
        await UpdateBrandById(this.state.data.MATH, data)

    }



render = () => {
    return (
        <Dialog
            className='dialog edit brand'
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
                <DialogTitle>Brand form</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Tên"
                                defaultValue={Object(this.state.data.TENTH).length && this.state.data.TENTH}
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENTH: e.target.value} })
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
