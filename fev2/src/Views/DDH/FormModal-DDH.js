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
import {CreateProvider, GetListProvider} from '../../services/Provider'
import { GetListProduct } from '../../services/Product';


export default class FormModalDDH extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                
                NGAYDAT: '',
                MANV: '',
                MANCC: '',
                CTODS:'',
                MADONG:'',

            },
            listSelectNCC: [],
            listSelectWL: [],
            MANCC:'',
            MADONG:'',
        }
    }

    
    async componentDidMount(){
        let listTempNCC = []
        await GetListProvider().then(res => {
            listTempNCC = res.data
        })

        let listTempWL = []
        await GetListProduct().then(res => {
            listTempWL = res.data
        })

        this.setState({
            listSelectNCC:listTempNCC,
            listSelectWL:listTempWL
        })
        console.log(listTempNCC,listTempWL)
    }


    Close = () => {
        this.setState({ open: false })
    }
    open = () => {
        this.setState({ open: true })
    }

    


    onSubmit = async (event) => {
        event.preventDefault()
        this.createProvider()
        this.close()
        
    }

    async createProvider() {
        const data = {
            NGAYDAT: this.state.data.NGAYDAT,
            MANCC: this.state.data.MANCC,
            MANV: this.state.data.MANV,

            //tao arr ctod
            CTODS: [{
                //MADONG,SL,GIA
                MADONG: this.state.data.MADONG,
                SOLUONG: this.state.data.SOLUONG,
                GIA: this.state.data.GIA,

            }]

        }
        console.log(data)
        // await CreateOrderNCC( data)

    }

    handleChangeNCC = async (event) => {
        this.setState({data:{...this.state.data,
            MANCC:event.target.value}})

    }
    handleChangeWL = async (event) => {
        this.setState({data:{...this.state.data,
            MADONG:event.target.value}})
    }

    handleClickPlus = (event) => {
        return(
            <div className='row'>
                        <div className='col-9'>
                        <FormControl fullWidth style={{marginTop:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Chọn dòng rượu</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.MADONG}
                                label="Chọn dong ruou"
                                onChange={(e) => this.handleChangeWL(e)}
                            >
                                

                                {this.state.listSelectWL.map((cur) => {
                                    return(
                                    <MenuItem value={cur.MADONG}>{cur.TENDONG}</MenuItem>)
                                })}
                                
                                
                            </Select>
                        </FormControl>
                        </div>

                        <div className='col-3' style={{marginTop:'10px'}}>
                        <FormControl fullWidth >
                            <TextField
                                label="SL"
                                InputProps={{
                                    name: "date"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,SOLUONG: e.target.value} })}

                            />
                        </FormControl>
                        </div>
                    </div>
        )
    }
    render = () => {
        return (
            <Dialog
                className='dialog create provider'
                fullWidth
                maxWidth={'col-lg-'}
                
                open={this.state.open}
                onClose={this.Close}
            >
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.onSubmit}
                >
                    <DialogTitle>Lập DDH</DialogTitle>
                    <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}

                    >
                    <div className='row' >
                        <div className='col-6' style={{marginTop:'10px'}}>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Chọn NCC</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.data.MANCC}
                                label="Chọn ncc"
                                onChange={(e) => this.handleChangeNCC(e)}
                            >
                                

                                {this.state.listSelectNCC.map((cur) => {
                                    return(
                                    <MenuItem value={cur.MANCC}>{cur.TENNCC}</MenuItem>)
                                })}
                                
                                
                            </Select>
                        </FormControl>
                        </div>
                        <div className='col-6'>
                        <FormControl fullWidth >
                            <TextField
                                label="Ngày đặt"
                                defaultValue={new Date()}
                                InputProps={{
                                    name: "date"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,EMAIL: e.target.value} })}

                            />
                        </FormControl>
                        </div>

                    </div>
                        
                    <div className='row'>
                        <div className='col-9'>
                        <FormControl fullWidth style={{marginTop:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Chọn dòng rượu</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.data.MADONG}
                                label="Chọn dong ruou"
                                onChange={(e) => this.handleChangeWL(e)}
                            >
                                

                                {this.state.listSelectWL.map((cur) => {
                                    return(
                                    <MenuItem value={cur.MADONG}>{cur.TENDONG}</MenuItem>)
                                })}
                                
                                
                            </Select>
                        </FormControl>
                        </div>

                        <div className='col-3' style={{marginTop:'10px'}}>
                        <FormControl fullWidth >
                            <TextField
                                label="SL"
                                InputProps={{
                                    name: "date"
                                }}
                                onChange={(e) => this.setState({data: {...this.state.data,EMAIL: e.target.value} })}

                            />
                        </FormControl>
                        </div>
                    </div>


                    <div className='row' style={{marginTop:'20px'}}>
                    <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', borderColor: "#FF5733", color:'#FF5733'}} variant="outlined" 
                    onClick={ (e) => this.handleClickPlus(e)}> +
                        
                     </Button>
                    </div>

                        


                        

                        
                        
                    </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='success' variant='contained' onClick={() =>  this.onSubmit()}>Submit</Button>
                        <Button onClick={this.Close}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }

}
