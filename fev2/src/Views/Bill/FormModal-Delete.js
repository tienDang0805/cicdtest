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
import { getAccessTokenFromLocalStorage, getUserProfileFromLS } from '../../helper/accessToken';
import { getMe } from '../../services/Getme';
import jwt from 'jwt-decode' 
import { CreateBill } from '../../services/Bill';
import { updateSLTminus } from '../../services/Product';


export default class FormModalDeleteBill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            MANVGH:'',
            MANVD:'',
            MAPD: '',
            listSelect: [],
            canAbort: false,
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

    // componentDidMount(){
    //     getUserProfileFromLS().then(res => {
    //         console.log(res.data)
    //     })
    // }

    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    handleAbort = async (event) => {
        event.preventDefault()
        // set state to 'da huy'

        const token  = jwt(getAccessTokenFromLocalStorage())
        // console.log(token)
        // let user = {}
        // await getMe(token.userId).then(res => {
        //     user = res.data
        // })

        let tempData = {
            MAPD: '',
            NGAYDAT: '',
            HONN: '',
            TENNN: '',
            DIACHINN: '',
            SDTNN: '',
            GHICHU: '',
            TRANGTHAI: '',
            MANVD: token.userId,
            MANVGH: '',
            MAKH: '',
            CTPDS: [],
        }
        
        tempData = {
            MAPD: this.state.data.MAPD,
            NGAYDAT: this.state.data.NGAYDAT,
            HONN: this.state.data.HONN,
            TENNN: this.state.data.TENNN,
            DIACHINN: this.state.data.DIACHINN,
            SDTNN: this.state.data.SDTNN,
            GHICHU: this.state.data.GHICHU,
            TRANGTHAI: 'Đã huỷ',
            MANVD: token.userId,
            MANVGH: this.state.MANVGH,
            MAKH: this.state.data.MAKH,
            CTPDS: this.state.data.CTPDS,
        }
        

        


        let totalTemp = 0
        this.state.data.CTPDS.map(cur => {
            totalTemp += cur.GIA * cur.SOLUONG
        })

        
        console.log(tempData)
        UpdatePdById(this.state.MAPD, tempData)
        this.state.data.CTPDS.map(item => {
            updateSLTminus(item.MADONG, item.SOLUONG)
        })
        updateSLTminus()
        // CreateBill(billData)
        this.Close()

    }

    onSubmit = async (event) => {
        event.preventDefault()
        ///update lai pd
        const token  = jwt(getAccessTokenFromLocalStorage())
        // console.log(token)
        // let user = {}
        // await getMe(token.userId).then(res => {
        //     user = res.data
        // })

        let tempData = {
            MAPD: '',
            NGAYDAT: '',
            HONN: '',
            TENNN: '',
            DIACHINN: '',
            SDTNN: '',
            GHICHU: '',
            TRANGTHAI: '',
            MANVD: token.userId,
            MANVGH: '',
            MAKH: '',
            CTPDS: [],
        }
        if(this.state.data.TRANGTHAI === 'Chưa duyệt' ){
            tempData = {
                MAPD: this.state.data.MAPD,
                NGAYDAT: this.state.data.NGAYDAT,
                HONN: this.state.data.HONN,
                TENNN: this.state.data.TENNN,
                DIACHINN: this.state.data.DIACHINN,
                SDTNN: this.state.data.SDTNN,
                GHICHU: this.state.data.GHICHU,
                TRANGTHAI: 'Đã phân công',
                MANVD: token.userId,
                MANVGH: this.state.MANVGH,
                MAKH: this.state.data.MAKH,
                CTPDS: this.state.data.CTPDS,
            }
        }
        else{
            tempData = {
                MAPD: this.state.data.MAPD,
                NGAYDAT: this.state.data.NGAYDAT,
                HONN: this.state.data.HONN,
                TENNN: this.state.data.TENNN,
                DIACHINN: this.state.data.DIACHINN,
                SDTNN: this.state.data.SDTNN,
                GHICHU: this.state.data.GHICHU,
                TRANGTHAI: this.state.data.TRANGTHAI,
                MANVD: token.userId,
                MANVGH: this.state.MANVGH,
                MAKH: this.state.data.MAKH,
                CTPDS: this.state.data.CTPDS,
            }
        }

        


        let totalTemp = 0
        this.state.data.CTPDS.map(cur => {
            totalTemp += cur.GIA * cur.SOLUONG
        })

        let r = (Math.random() + 1).toString().substring(8);
        // console.log("random", r);
        let billData = {
            MAHD: '',
            NGAY: this.state.data.NGAYDAT,
            THANHTIEN: totalTemp,
            MASOTHUE: r,
            MANV: token.userId,
            MAPD: this.state.data.MAPD,
        }
        console.log(billData)
        console.log(tempData)
        UpdatePdById(this.state.MAPD, tempData)
        if(this.state.data.TRANGTHAI === 'Chưa duyệt' ){
            CreateBill(billData)
        }
        
        
        this.Close()
    }

    Delete(MAPD,listNVGH, row) {
        
        
        let listTemp = []
        let canAbortTemp = false
        listNVGH.map(cur => {
            listTemp.push({key:cur.MANV,value:cur.HO.concat(' ').concat(cur.TEN)})
        })

        // console.log('state', row.TRANGTHAI)
        if(row.TRANGTHAI !== 'Đã giao' && row.TRANGTHAI !== 'Đã huỷ'){
            // console.log('1')
            canAbortTemp = true
        }else{
            canAbortTemp = false
        }

        // console.log('canAbort delete', canAbortTemp)

        this.setState({ 
            MAPD: MAPD, 
            canAbort: canAbortTemp,
            //listNVGH: listNVGH,
            listSelect: listTemp,
            data: {
                MAPD: row.MAPD,
                NGAYDAT: row.NGAYDAT,
                HONN: row.HONN,
                TENNN: row.TENNN,
                DIACHINN: row.DIACHINN,
                SDTNN: row.SDTNN,
                GHICHU: row.GHICHU,
                TRANGTHAI: row.TRANGTHAI,
                MANVD: row.MANVD,
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
                    <DialogTitle>Duyệt đơn</DialogTitle>
                    <DialogContent >
                        <FormControl fullWidth style={{marginTop:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Chọn nhân viên giao</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.MANVGH}
                                label="Chọn nhân viên giao"
                                onChange={(e) => this.handleChange(e)}
                            >
                                

                                {this.state.listSelect.map((cur) => {
                                    return(
                                    <MenuItem value={cur.key}>{cur.value}</MenuItem>)
                                })}
                                
                                
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={this.onSubmit} >Submit</Button>
                        {console.log('canabort',this.state.canAbort)}
                        {this.state.canAbort === true ? 
                            <Button type='submit' color='success' variant='contained' onClick={this.handleAbort} >Cancel</Button>
                        : null}
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
