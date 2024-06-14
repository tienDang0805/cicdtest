import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetListPromo, GetPromoById } from '../../services/Promo';
import { useState, useEffect } from 'react'
import FormModalEditPromo from './FormModal-Edit';
import FormModalDeletePromo from './FormModal-Delete';


export default function DenseTable() {
    function Edit(data){
        
        //console.log(data)
        
        React.refModalEditPromo?.open()
        React.refModalEditPromo.Edit( data)

        
    }

    function Delete(MAKM) {
        React.refModalDeletePromo?.open()

        React.refModalDeletePromo.Delete( MAKM)
        const index = listPromos.findIndex(x => x.MAKM === MAKM)
        console.log(index)
        if(index >= 0) {
            listPromos.splice(index,1)
            setListPromos([...listPromos])
        }

        
    }

    const [listPromos, setListPromos] = useState([])


    useEffect(() => {
        async function fetchListPromos() {
            const promos = (await GetListPromo()).data

            setListPromos(promos)
        }

        fetchListPromos()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên KM</TableCell>
                        <TableCell align="left">Ngày bắt đầu</TableCell>
                        <TableCell align="left">Ngày kết thúc</TableCell>
                        <TableCell align="left">Lý Do</TableCell>
                        <TableCell align="left">Mã NV</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {listPromos.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MAKM}</TableCell>
                            <TableCell align="left">{row.TENKM}</TableCell>
                            <TableCell align="left">{row.NGAYBATDAU}</TableCell>
                            <TableCell align="left">{row.NGAYKETTHUC}</TableCell>
                            <TableCell align="left">{row.LIDO}</TableCell>
                            <TableCell align="left">{row.MANV}</TableCell>
                            <TableCell align="right">
                                <i className="fas fa-pencil-alt" style={{paddingRight:'10px'}} onClick={()=>Edit(row)} ></i>
                                <i className="fas fa-trash-alt"  onClick= {() => Delete(row.MAKM)} ></i>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            <FormModalEditPromo ref={ref => React.refModalEditPromo = ref} />
            <FormModalDeletePromo ref={ref => React.refModalDeletePromo = ref} />
        </TableContainer>
    );
}
