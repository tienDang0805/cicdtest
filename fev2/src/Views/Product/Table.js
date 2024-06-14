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
import { GetListBrand } from "../../services/Brand";
import FormModalEditProduct from "./FormModal-Edit";
import FormModalDeleteProduct from "./FormModal-Delete";
import {checkKm, convertKm, convertPrice, fixedPrice, checkPrice} from "../../helper/convertPrice";


export default function DenseTable() {
  function Edit(data) {
    React.refModalEditProduct?.open();
    React.refModalEditProduct.Edit(data);
  }

  function Delete(MADONG) {
    React.refModalDeleteProduct?.open();

    React.refModalDeleteProduct.Delete(MADONG);
    const index = listProducts.findIndex((x) => x.MADONG === MADONG);
    console.log(index);
    if (index >= 0) {
      listProducts.splice(index, 1);
      setListProducts([...listProducts]);
    }
  }

  const [listProducts, setListProducts] = useState([]);
  const [listWinetypes, setListWinetypes] = useState([]);
  const [listBrands, setListBrands] = useState([]);

  useEffect(() => {
    async function fetchListProducts() {
      const getListProducts = GetListProduct().then((res) => {
        return res.data;
      });
      const getListWinetypes = GetListWinetype().then((res) => {
        return res.data;
      });
      const getListBrands = GetListBrand().then((res) => {
        return res.data;
      });

      const promises = [getListProducts, getListWinetypes, getListBrands];

      const [products, winetypes, brands] = await Promise.all(promises);

      setListProducts(products);
      setListWinetypes(winetypes);
      setListBrands(brands);
    }

    fetchListProducts();
  }, []);

  /////

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Mã số</TableCell>
            <TableCell align="left">Tên dòng</TableCell>
            <TableCell align="left">Hình ảnh</TableCell>
            <TableCell align="left">Giá</TableCell>
            <TableCell align="left">SL</TableCell>
            <TableCell align="left">Loại</TableCell>
            <TableCell align="left" style={{width: '5%'}}>Thương hiệu</TableCell>
            <TableCell style={{width: '10%'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listProducts.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.MADONG}
              </TableCell>
              <TableCell align="left">{row.TENDONG}</TableCell>
              <TableCell align="left" >
                <img
                  src={"../../../".concat(row.HINHANH)}
                  width={"15%"}
                  height={"15%"}
                />
              </TableCell>
              <TableCell align="left">{checkPrice(row.changeprices)}$</TableCell>
              <TableCell align="left">{row.SOLUONGTON}</TableCell>
              {listWinetypes &&
                listWinetypes.map((wineType) => {
                  {/* console.log(row) */}

                  if (row.winetype.MALOAI === wineType.MALOAI) {
                    return (
                      <TableCell align="left">{wineType.TENLOAI}</TableCell>
                    );
                  }
                })}
              {listBrands &&
                listBrands.map((brand) => {
                  if (row.MATH == brand.MATH) {
                    return <TableCell align="left">{brand.TENTH}</TableCell>;
                  }
                })}

              {/* <TableCell align="left">{row.MATH}</TableCell> */}
              <TableCell align="right">
              <i
                className="fas fa-pencil-alt"
                style={{ paddingRight: "10px" }}
                onClick={() => Edit(row)}
              ></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => Delete(row.MADONG)}
              ></i>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FormModalEditProduct ref={(ref) => (React.refModalEditProduct = ref)} />
      <FormModalDeleteProduct
        ref={(ref) => (React.refModalDeleteProduct = ref)}
      />
    </TableContainer>
  );
}
