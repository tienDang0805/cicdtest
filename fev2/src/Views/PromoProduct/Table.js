import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  GetListProduct,
  GetWinetypeById,
  GetListWinetype,
} from "../../services/Product";
import { useState, useEffect } from "react";
import { GetListPromo, GetListCtPromo } from "../../services/Promo";
import FormModalDeletePromoProduct from "./FormModal-Delete";

export default function DenseTable() {
  const [listProducts, setListProducts] = useState([]);
  const [listWinetypes, setListWinetypes] = useState([]);
  const [listPromos, setListPromos] = useState([]);
  const [listCtPromos, setListCtPromos] = useState([]);

  useEffect(() => {
    async function fetchListProducts() {
      const getListProducts = GetListProduct().then((res) => {
        return res.data;
      });
      const getListWinetypes = GetListWinetype().then((res) => {
        return res.data;
      });
      const getListPromos = GetListPromo().then((res) => {
        return res.data;
      });
      const getListCtPromos = GetListCtPromo().then((res) => {
        return res.data;
      });

      const promises = [
        getListProducts,
        getListWinetypes,
        getListPromos,
        getListCtPromos,
      ];

      const [products, winetypes, promos, ctpromos] = await Promise.all(
        promises
      );

      setListProducts(products);
      setListWinetypes(winetypes);
      setListPromos(promos);
      setListCtPromos(ctpromos);
    }

    fetchListProducts();
  }, []);

    function Edit(data){
    //console.log(MANCC)
    // console.log('d',data.EMAIL)
    React.refModalEditPromoProduct?.open()
    React.refModalEditPromoProduct.Edit( data)

    
    }

    function Delete(MAKM, MADONG) {
    React.refModalDeletePromoProduct?.open()

    React.refModalDeletePromoProduct.Delete( MAKM, MADONG)
    // const index = listProviders.findIndex(x => x.MANCC === MANCC)
    // console.log(index)
    // if(index >= 0) {
    //     listProviders.splice(index,1)
    //     setListProviders([...listProviders])
    // }
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Mã KM</TableCell>
            <TableCell align="left">Tên KM</TableCell>
            <TableCell align="left">Hình ảnh</TableCell>
            <TableCell align="left">Sản phẩm</TableCell>
            <TableCell align="left">Giảm</TableCell>
            <TableCell style={{width: '10%'}} ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listPromos.map((row) =>
            listCtPromos.map((ctpromo) => {
              if (row.MAKM == ctpromo.MAKM) {
                return (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.MAKM}</TableCell>
                    <TableCell align="left">{row.TENKM}</TableCell>
                    <TableCell align="left">
                      <img
                        src={"../../../".concat(ctpromo.wineline.HINHANH)}
                        width={"18%"}
                        height={"auto"}
                      />
                    </TableCell>
                    <TableCell align="left">{ctpromo.wineline.TENDONG}</TableCell>
                    <TableCell align="left">{ctpromo.PHANTRAMGIAM} %</TableCell>
                    <TableCell align="right">
                    {console.log(ctpromo.MADONG)}
                      <i className="fas fa-pencil-alt" style={{ paddingRight: "10px" }} onClick={() => Edit(row)}></i>
                      <i className="fas fa-trash-alt" onClick={() => Delete(row.MAKM,ctpromo.MADONG)}></i>
                    </TableCell>
                  </TableRow>
                );
              }
            })
          )}

        </TableBody>
      </Table>
      {/* <FormModalEdit ref={(ref) => (React.refModalEditProvider = ref)} /> */}
      <FormModalDeletePromoProduct ref={(ref) => (React.refModalDeletePromoProduct = ref)} />
    </TableContainer>
  );
}
