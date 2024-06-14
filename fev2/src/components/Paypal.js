import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { getListCartItemsFromLocalStorage } from "../helper/addToCart";
import { getPaypalDetail } from "../services/Product";
import { createPhieuDatPaypal } from "../services/Phieudat";
import { removeUserProfileToLS } from "../helper/accessToken";

const paypalScriptOptions = {
  "client-id": "AeMSCBo543IZhLXERfPVLZ5fyuYvpZ4OrgzbiKAfSsjY25sVg9jkXFVIY6_R9Qo-Ef-haY4rZAIIrxZG",
  // "token": "AaaFcJt0sRvpH2wvW0ZvhaD2myM0PpZyEAM4vzamKXoWRAOyuIgkNXXKOKRJpAa4ACvjTiuWwF714d3_",
  currency: "USD"
};

function Button(props) {
  const [purchaseUnits, setPurchaseUnits] = useState([
    {
      amount: {
        // value: props.total.toString(), // value phai = tong tat cả value trong breakdown
        value: "11",
        breakdown: {
          item_total: { // item_total phai = unit_amount * quantity trong tat ca item
            currency_code: "USD",
            value: "11"
          },
          shipping: {
            currency_code: "USD",
            value: "0"
          }
        }
      },
      items: [ // sau nay thay bang list product khi thanh toan  
      ],
    }
  ])

  const [{ isPending }] = usePayPalScriptReducer();

  

  const paypalbuttonTransactionProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) { // ham nay goi khi bam vao nut pop up Paypal
      return actions.order.create({
        purchase_units: purchaseUnits
     
      });
    },
    onApprove(data, actions) { // ham nay goi khi thanh toan thanh cong
      // gọi api tạo phiếu đặt ở đây (tạo order theo carts ở local storage)
      let pd = props.pd
      createPhieuDatPaypal(pd, JSON.stringify(data.orderID))

      
      // data:{
      //   orderID: string;
      //   payerID: string;
      //   paymentID: string | null;
      //   billingToken: string | null;
      //   facilitatorAccesstoken: string;
      // }

      return actions.order.capture({}).then((details) => {
        removeUserProfileToLS()
        alert(
            "Transaction completed by" +
            (details?.payer.name.given_name ?? "No details")
        );
      });
    },
    onError(err) { // ham nay goi khi thanh toan loi
      console.log('error paypal', err.toString())
      alert("The Transaction has error!!!!")
    }
  };

  useEffect(() => {
    const items = []
    const carts = JSON.parse(getListCartItemsFromLocalStorage())

    console.log(carts,'asdasd')

    getPaypalDetail(carts).then(res => {
      let arrs = res.data
      let total = 0
      if (arrs && arrs.length) {
        for (const arr of arrs) {
          const item = {
            name: arr?.product.TENDONG,
            unit_amount: {
              currency_code: "USD",
              value: arr?.price.toFixed(2).toString() //tofixed ?
            },
            quantity: arr?.quantity.toString(),
          }
          items.push(item)
          total += (arr?.price.toFixed(2)* arr?.quantity)
        }


        purchaseUnits[0].items = items
        purchaseUnits[0].amount.value = total.toString()
        purchaseUnits[0].amount.breakdown.item_total.value = total.toString()
        
        console.log(purchaseUnits);
        setPurchaseUnits(purchaseUnits)
      }
    })

    
  }, [purchaseUnits])

  return (
      <>
        {isPending ? <h2>Load Smart Payment Button...</h2> : null}
        <PayPalButtons {...paypalbuttonTransactionProps} />
      </>
  );
}
export default function Paypal(props) {
  // const [carts, setCarts] = useState([])
  const [total, setTotal] = useState()
  const [pd, setPd] = useState({})
  // console.log('222')


  useEffect(() => {
    // console.log(getListCartItemsFromLocalStorage())
    // setCarts(JSON.parse(getListCartItemsFromLocalStorage()))
    // console.log('111')
    setTotal(props.total)
    setPd(props.pd)
    console.log('total', props.total, 'data', props.pd)
  }, [ total])

  return (
      <div style={{textAlign: "center"}}>
        <PayPalScriptProvider options={paypalScriptOptions}>
          <Button total={total} pd={pd}/>
        </PayPalScriptProvider>
      </div>
  );
}
