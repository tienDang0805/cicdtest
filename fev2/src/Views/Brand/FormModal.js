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
import {CreateBrand} from '../../services/Brand'

export default class FormModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data: {
                MATH:'',
                TENTH: '',
                
            },
            isSubmit: false,

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
        this.setState({isSubmit: true})

        if (this.state.data.TENTH.length === 0 
        ) {
            return
        }else{
            await this.createBrand()
            this.Close()
        }
        
    }

    async createBrand() {
        const data = {
            MATH: '050',
            TENTH: this.state.data.TENTH,
        }
        console.log(data)
        await CreateBrand( data)

    }

    render = () => {
        return (
            <Dialog
                className='dialog create brand'

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
                                InputProps={{
                                    name: "Ten"
                                }}
                                onChange={(e) => {
                                    this.setState({data: {...this.state.data,TENTH: e.target.value} })
                                }}

                            />
                            {(this.state.isSubmit && this.state.data.TENTH.length === 0) && (
                                <div style={{color: "red"}}>Vui lòng điền tên thương hiệu!</div>
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
