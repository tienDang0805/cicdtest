import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetListWinetype } from '../../services/Product';
import { useState, useEffect } from 'react'
import FormModalEdit from './FormModal-Edit'
import FormModalDelete from './FormModal-Delete'




export default function DenseTable() {
    function Edit(data){
        //console.log(MANCC)
        // console.log('d',data.EMAIL)
        React.refModalEditProductType?.open()
        React.refModalEditProductType.Edit( data)

        
    }

    function Delete(MALOAI) {
        //console.log(MANCC)
        // console.log('d',data.EMAIL)
        React.refModalDeleteProductType?.open()

        React.refModalDeleteProductType.Delete( MALOAI)
        const index = listWineTypes.findIndex(x => x.MALOAI === MALOAI)
        console.log(index)
        if(index >= 0) {
            listWineTypes.splice(index,1)
            setListWineTypes([...listWineTypes])
        }

        
    }

    const [listWineTypes, setListWineTypes] = useState([])


    useEffect(() => {
        async function fetchListWineTypes() {
            const winetypes = (await GetListWinetype()).data

            setListWineTypes(winetypes)
        }

        fetchListWineTypes()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên loại rượu</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listWineTypes.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MALOAI}</TableCell>
                            <TableCell align="left">{row.TENLOAI}</TableCell>
                            <TableCell align="right">
                                <i className="fas fa-pencil-alt" style={{paddingRight:'10px'}} onClick= {() => Edit(row)} ></i>
                                <i className="fas fa-trash-alt"  onClick= {() => Delete(row.MALOAI)} ></i>
                            </TableCell>    
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
            <FormModalEdit ref={ref => React.refModalEditProductType = ref} />
            <FormModalDelete ref={ref => React.refModalDeleteProductType = ref} />
        </TableContainer>
    );
}
