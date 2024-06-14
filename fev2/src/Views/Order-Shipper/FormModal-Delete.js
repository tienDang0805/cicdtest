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
import { GetNVGH } from '../../services/Staff'
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { UpdatePdById } from '../../services/Phieudat';
import { getMe } from '../../services/Getme';
import { getAccessTokenFromLocalStorage } from '../../helper/accessToken';


export default class FormModalDeleteBillShipper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            MANVGH:'',
            MAPD: '',
            listSelect: [],
            data: {
                MAPD: '',
                NGAYDAT: '',
                HONN: '',
                TENNN: '',
                DIACHINN: '',
                SDTNN: '',
                GHICHU: '',
                TRANGTHAI: '',
                MANVD: '',
                MANVGH: '',
                MAKH: '',
                CTPDS: [],
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
        ///update lai pd
        let tempData = {
            MAPD: '',
            NGAYDAT: '',
            HONN: '',
            TENNN: '',
            DIACHINN: '',
            SDTNN: '',
            GHICHU: '',
            TRANGTHAI: '',
            MANVD: '',
            MANVGH: '',
            MAKH: '',
            CTPDS: [],
        }
        if(this.state.data.TRANGTHAI === 'Đã phân công' ){
            tempData = {
                MAPD: this.state.data.MAPD,
                NGAYDAT: this.state.data.NGAYDAT,
                HONN: this.state.data.HONN,
                TENNN: this.state.data.TENNN,
                DIACHINN: this.state.data.DIACHINN,
                SDTNN: this.state.data.SDTNN,
                GHICHU: this.state.data.GHICHU,
                TRANGTHAI: 'Đã giao',
                MANVD: this.state.data.MANVD,
                MANVGH: this.state.data.MANVGH,
                MAKH: this.state.data.MAKH,
                CTPDS: this.state.data.CTPDS,
            }

        }
        
        UpdatePdById(this.state.MAPD, tempData)
        this.Close()
    }

    Delete(MAPD,listNVGH, row ) {
        


        this.setState({ 
            MAPD: MAPD, 
            data: {
                MAPD: row.MAPD,
                NGAYDAT: row.NGAYDAT,
                HONN: row.HONN,
                TENNN: row.TENNN,
                DIACHINN: row.DIACHINN,
                SDTNN: row.SDTNN,
                GHICHU: row.GHICHU,
                TRANGTHAI: row.TRANGTHAI,
                MANVD: row.staff.MANV,
                MANVGH: row.MANVGH,
                MAKH: row.MAKH,
                CTPDS: row.ct_phieudats
            },
            
        })

        
        
        
    }

    handleChange = (event) => {
        this.setState({MANVGH:event.target.value})
       
    };

    

    render = () => {
        return (
            <Dialog
                className='dialog delete bill'
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
                    <DialogTitle>Xác nhận đơn</DialogTitle>
                    {/* <DialogContent >
                        
                    </DialogContent> */}
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
