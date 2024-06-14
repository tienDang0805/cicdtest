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
import { CreateBill } from '../../services/Bill';

export default class FormModalBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MAHD:'',
                NGAY: '',
                THANHTIEN: '',
                MASOTHUE: '',
                MANV: '',
                MAPD:'',

            },
        }
    }

    

    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    


    onSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.data)
        await this.createBill()
        this.close()
        
    }

    async createBill() {
        const data = {
            MAHD: '050',
            NGAY: this.state.data.NGAY,
            THANHTIEN: this.state.data.THANHTIEN,
            MASOTHUE: this.state.data.MASOTHUE,
            MANV: this.state.data.MANV,
            MAPD: this.state.data.MAPD,
        }
        console.log(data)
        await CreateBill( data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create bill'
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
                    <DialogTitle>Bill form</DialogTitle>
                    <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày"
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,NGAY: e.target.value} })
                                }}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Thành tiền"
                                InputProps={{
                                    name: "SDT"
                                }}
                                onChange={(e) => this.setState({data:{ ...this.state.data,THANHTIEN: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã số thuế"
                                InputProps={{
                                    name: "Email"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MASOTHUE: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã nhân viên"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MANV: e.target.value} })}

                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <TextField
                                label="Mã phiếu đặt"
                                InputProps={{
                                    name: "Diachi"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,MAPD: e.target.value} })}

                            />
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
