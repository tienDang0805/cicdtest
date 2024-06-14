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
import { async } from 'q';
import {CreateProvider} from '../../services/Provider'

export default class FormModalProvider extends React.Component {
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
            //
            isSubmit: false,
        }
    }

    

    Close = () => {
        console.log('dad')
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    


    onSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.data)
        this.setState({isSubmit: true})

        if (this.state.data.TENNCC.length === 0 ||
            this.state.data.DIACHI.length === 0 ||
            this.state.data.EMAIL.length === 0 ||
            this.state.data.SDT.length === 0 
        ) {
            return
        }else{
            await this.createProvider()
            this.Close()
        }
        
        
    }

    async createProvider() {
        const data = {
            MANCC: this.state.data.MANCC,
            TENNCC: this.state.data.TENNCC,
            DIACHI: this.state.data.DIACHI,
            EMAIL: this.state.data.EMAIL,
            SDT: this.state.data.SDT,

        }
        console.log(data)
        await CreateProvider( data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create provider'
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
                        {/* <FormControl fullWidth >
                            <TextField
                                label="Mã nhà cung cấp"
                                InputProps={{
                                    name: "ncc"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,MANCC: e.target.value} })
                                }}

                            />
                        </FormControl> */}
                        <FormControl fullWidth >
                            <TextField
                                label="Tên"
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENNCC: e.target.value} })
                                }}
                            />
                            {(this.state.isSubmit && this.state.data.TENNCC.length === 0) && (
                                <div style={{color: "red"}}>Vui lòng điền tên nhà cung cấp!</div>
                            )}
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="SĐT"
                                InputProps={{
                                    name: "SDT"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,SDT: e.target.value} })}

                            />
                            {(this.state.isSubmit && this.state.data.TENNCC.length === 0) && (
                                <div style={{color: "red"}}>Vui lòng điền số điện thoại!</div>
                            )}
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Email"
                                InputProps={{
                                    name: "Email"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,EMAIL: e.target.value} })}

                            />
                            {(this.state.isSubmit && this.state.data.TENNCC.length === 0) && (
                                <div style={{color: "red"}}>Vui lòng điền email!</div>
                            )}
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Địa chỉ"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,DIACHI: e.target.value} })}

                            />
                            {(this.state.isSubmit && this.state.data.TENNCC.length === 0) && (
                                <div style={{color: "red"}}>Vui lòng điền địa chỉ</div>
                            )}
                        </FormControl>
                    </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained'>Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
