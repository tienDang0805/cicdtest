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


export default class FormModalEditProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MANCC:'',
                TENNCC: '',
                SDT: '',
                EMAIL: '',
                DIACHI: '',

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
                MANCC: row.MANCC,
                TENNCC: row.TENNCC,
                SDT: row.SDT,
                EMAIL: row.EMAIL,
                DIACHI: row.DIACHI,
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
        await this.updateProvider()
        this.Close()
    }





    ///api
    async updateProvider() {
        const data = {
            TENNCC: this.state.data.TENNCC,
            DIACHI: this.state.data.DIACHI,
            EMAIL: this.state.data.EMAIL,
            SDT: this.state.data.SDT,

        }
        await UpdateProviderById(this.state.data.MANCC, data)

    }



render = () => {
    return (
        <Dialog
            className='dialog edit provider'

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
                <DialogTitle>Provider form</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Tên"
                                defaultValue={Object(this.state.data.TENNCC).length && this.state.data.TENNCC}
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENNCC: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="SĐT"
                                defaultValue={Object(this.state.data.SDT).length && this.state.data.SDT}
                                InputProps={{
                                    name: "SDT"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,SDT: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Email"
                                defaultValue={Object(this.state.data.EMAIL).length && this.state.data.EMAIL}
                                InputProps={{
                                    name: "Email"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,EMAIL: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Địa chỉ"
                                defaultValue={Object(this.state.data.DIACHI).length && this.state.data.DIACHI}
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,DIACHI: e.target.value} })}

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
