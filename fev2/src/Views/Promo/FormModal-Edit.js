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
import { UpdatePromoById } from '../../services/Promo'


export default class FormModalEditPromo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MAKM:'',
                TENKM: '',
                NGAYBATDAU: '',
                NGAYKETTHUC: '',
                LIDO: '',
                MANV:'',

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
                MAKM: row.MAKM,
                TENKM: row.TENKM,
                NGAYBATDAU: row.NGAYBATDAU,
                NGAYKETTHUC: row.NGAYKETTHUC,
                LIDO: row.LIDO,
                MANV: row.MANV,
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
        await this.updatePromo()
        this.Close()
    }





    ///api
    async updatePromo() {
        const data = {
            TENKM: this.state.data.TENKM,
            NGAYBATDAU: this.state.data.NGAYBATDAU,
            NGAYKETTHUC: this.state.data.NGAYKETTHUC,
            LIDO: this.state.data.LIDO,
            MANV: this.state.data.MANV,


        }
        await UpdatePromoById(this.state.data.MAKM, data)

    }



render = () => {
    return (
        <Dialog
            className='dialog edit promo'

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
                                label="Tên"
                                defaultValue={Object(this.state.data.TENKM).length && this.state.data.TENKM}
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENKM: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày bắt đầu"
                                defaultValue={Object(this.state.data.NGAYBATDAU).length && this.state.data.NGAYBATDAU}
                                InputProps={{
                                    name: "SDT"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,NGAYBATDAU: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày kết thúc"
                                defaultValue={Object(this.state.data.NGAYKETTHUC).length && this.state.data.NGAYKETTHUC}
                                InputProps={{
                                    name: "Email"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,NGAYKETTHUC: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Lí do"
                                defaultValue={Object(this.state.data.LIDO).length && this.state.data.LIDO}
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,LIDO: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã NV"
                                defaultValue={Object(this.state.data.MANV).length && this.state.data.MANV}
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MANV: e.target.value} })}

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
