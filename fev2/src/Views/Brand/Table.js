import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GetListBrand} from '../../services/Brand'
import { useState, useEffect } from 'react'
import FormModalEdit from './FormModal-Edit'
import FormModalDelete from './FormModal-Delete'



export default function DenseTable() {

    function Edit(data){
        //console.log(MANCC)
        // console.log('d',data.EMAIL)
        React.refModalEditBrand?.open()
        React.refModalEditBrand.Edit( data)

        
    }

    function Delete(MATH) {
        //console.log(MANCC)
        // console.log('d',data.EMAIL)
        React.refModalDeleteBrand?.open()

        React.refModalDeleteBrand.Delete( MATH)
        const index = listBrands.findIndex(x => x.MATH === MATH)
        console.log(index)
        if(index >= 0) {
            listBrands.splice(index,1)
            setListWineTypes([...listBrands])
        }

        
    }


    const [listBrands, setListWineTypes] = useState([])


    useEffect(() => {
        async function fetchListBrands() {
            const brands = (await GetListBrand()).data

            setListWineTypes(brands)
        }

        fetchListBrands()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên thương hiệu</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listBrands.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MATH}</TableCell>
                            <TableCell align="left">{row.TENTH}</TableCell>
                            <TableCell align="right">
                                <i className="fas fa-pencil-alt" style={{paddingRight:'10px'}} onClick= {() => Edit(row)} ></i>
                                <i className="fas fa-trash-alt"  onClick= {() => Delete(row.MATH)} ></i>
                            </TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
            <FormModalEdit ref={ref => React.refModalEditBrand = ref} />
            <FormModalDelete ref={ref => React.refModalDeleteBrand = ref} />
        </TableContainer>
    );
}
