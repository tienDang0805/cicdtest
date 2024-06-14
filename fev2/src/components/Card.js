import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {checkKm, convertKm, convertPrice, fixedPrice, checkPrice, convertGIA} from "../helper/convertPrice";
import { KeyNavigate } from "../helper/KeyNavigate";
import { addCartItemToLocalStorage } from "../helper/addToCart"
import { getQuantity } from "../services/Product";


export const CustomCard = (props) => {
  const addToCart = async (productId, price) => {

    let slt = await getQuantity(props.data.MADONG).then(res =>  (res.data[0].soluongton))
    if(slt === 0)
    {
      alert('Sản phầm đã hết')
    }
    else{
      addCartItemToLocalStorage(productId, price, 1)
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <Link to={KeyNavigate.Detail.concat('/').concat(props.data.MADONG)}>
      <CardContent>
        <Typography
          sx={{ fontSize: props.fontSize || 14 }}
          color="text.secondary"
          gutterBottom
        >
          {/* {checkKm(props.data.ct_khuyenmais)} */}
          {(checkKm(props.data.ct_khuyenmais) !== '0%') ? '-'.concat(checkKm(props.data.ct_khuyenmais)) : 
          <Typography
          sx={{ fontSize: props.fontSize || 14 }}
          style={{color:'#FFFFFF'}}
          gutterBottom
        >j</Typography> }

        </Typography>

        <Typography
          sx={{ fontSize: 14 }}
          noWrap={true}
          style={{ textOverFlow: "ellipsis" }}
        >
          {props.data.TENDONG && props.data.TENDONG}
        </Typography>

        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <img
          src={"../../../".concat(props.data.HINHANH && props.data.HINHANH)}
          width={"25%"}
          height={"auto"}
        />
        {/* {console.log('ngay:', new Date() > new Date(props.data.changeprices[0].NGAYTHAYDOI))} */}
        <Typography variant="body2">
          {convertPrice(
            checkPrice(props.data.changeprices),
            convertKm(props.data.ct_khuyenmais)/100 || 0
          )}
          $
        </Typography>
        {(checkKm(props.data.ct_khuyenmais) !== '0%') ? 
        <del>{fixedPrice(checkPrice(props.data.changeprices) && checkPrice(props.data.changeprices))}$</del>
         : 
        <del style={{color:'#FFFFFF'}}>{fixedPrice(checkPrice(props.data.changeprices) && checkPrice(props.data.changeprices))}$</del>
         }
      </CardContent>
      </Link>
      <CardActions>
        <Button size="small" onClick={() => addToCart(props.data.MADONG, checkPrice(props.data.changeprices))}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
