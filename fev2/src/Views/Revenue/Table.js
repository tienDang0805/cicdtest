import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { GetListProduct, GetWinetypeById, GetListWinetype} from "../../services/Product";
import { GetListRevProduct } from "../../services/rev";
import { GetListPdFromTo, GetTotalIncomeFromTo } from "../../services/rev";
import { useState, useEffect } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button } from "@mui/material";
import * as moment from "moment";
import { letterSpacing } from "@mui/system";
import ExportCSV from "../../components/ExportExcel";
import LineChart from "./Chart";
import Pdf from "react-to-pdf";

const ref1 = React.createRef();


export default function DenseTable() {
  const [fromTime, setFromTime] = React.useState(new Date());
  const [toTime, setToTime] = React.useState(new Date());
  const [totalPd,setTotalPd] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [listPds, setListPds] = useState([]);
  const [lable1,setListLable1] = useState([]) 
  const [data1,setListData1] = useState([])  
  const [filterState,setFilterState] = useState(false) 
  const [table,setTable] = useState([]) 
  


  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];




  const handleFromTime = (time) => {
    setFromTime(time);
    // console.log(fromTime)
  };
  const handleToTime = (time) => {
    setToTime(time);
    // console.log(toTime)
  };


  const handleRev = async (fromTime, toTime) => {
    const vFromTime = moment(fromTime).format("YYYY-MM-01");
    const vToTime = moment(toTime).format("YYYY-MM-01");

    GetListPdFromTo(vFromTime,vToTime).then(res => {
      setListPds(res.data)
      setTotalPd(res.data.length)
    })
    GetTotalIncomeFromTo(vFromTime,vToTime).then(res => {
      //
      console.log(res.data)
      let totalTemp = 0
      if(res.data) {
      // console.log(res.data[0].gia)
        res.data.map(cur => {
          totalTemp += cur.tong
        })

        setTotalIncome(totalTemp)}
    })
    setFilterState(true)

    var fromMonth = Number(moment(fromTime).format('M'));
    var toMonth = Number(moment(toTime).format('M'));
    var fromYear = Number(moment(fromTime).format('Y'));
    var toYear = Number(moment(toTime).format('Y'));
    var index = 0


    /// xem lai xu li tg
    if(toYear > fromYear){
      index = (toYear - fromYear) * 12 + (toMonth - fromMonth)
    }
    else if(toYear === fromYear){
      if(toMonth > fromMonth){
        index = (toYear - fromYear) * 12 + (toMonth - fromMonth)
      }
      else {
        return <></>}
    }
    else return <></>


    let listLable = []
    let listData = []
    for (let i = 0; i <= index; i++) {
        const temp = new Date()
        temp.setFullYear(fromTime.getFullYear())
        temp.setDate(1)
        temp.setMonth(fromTime.getMonth() + i)

        const nextTemp = new Date()
        nextTemp.setFullYear(fromTime.getFullYear())
        nextTemp.setDate(1)
        nextTemp.setMonth(fromTime.getMonth() + i + 1)
        await GetTotalIncomeFromTo(moment(temp).format("YYYY-MM-DD"),moment(nextTemp).format("YYYY-MM-DD"))
        .then(res => {
            // console.log('chart',res.data[0].tong)
            let totalIncomeTemp = 0

            res.data.map(cur => {
              totalIncomeTemp += cur.tong
            })
            if(totalIncomeTemp === null) totalIncomeTemp = 0
            listLable.push(mS[temp.getMonth()].concat(' ').concat(temp.getFullYear()))
            listData.push(totalIncomeTemp.toFixed(2))
        })
    }
    
    setListLable1(listLable)
    setListData1(listData)
    let listTableTemp = []
    listLable.map((cur,index) => {
      let obj = {
        thang: cur,
        doanhthu: listData[index]
      }
      listTableTemp.push(obj)
    })
    setTable(listTableTemp)
    console.log('tab',listTableTemp)
    console.log(listData)

  };
  

  const tableRev = (lable,data) => {
    console.log('tablerev', lable)
    lable.forEach(cur => {
      <TableRow>
        <TableCell align="center">?</TableCell>
        <TableCell align="center">Doanh thu</TableCell>
      </TableRow>
    });
  }
  return (
    <>
      <Box display="flex" gap={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="From"
            views={['year', 'month']}
            value={fromTime}
            onChange={handleFromTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="To"
            views={['year', 'month']}
            value={toTime}
            onChange={handleToTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button
            variant="outlined"
            style={{ marginLeft: "30px" }}
            onClick={(e) => handleRev(fromTime, toTime)}
          >
            Lọc
          </Button>

          {(filterState === true) && <Pdf targetRef={ref1} filename="rev.pdf" 
                                margin = '0 auto'
                                width=' 50% !important'
                                height= '100% !important'
                            >
                                {({ toPdf }) => <Button 
                                variant="outlined"
                                onClick={toPdf}>Xuất Pdf</Button>}
                            </Pdf>}
        </LocalizationProvider>
      </Box>
      <div ref={ref1}>
      <Box className='col-6' sx={{ display: 'flex' }} style={{ marginTop: "20px" } }>
        <CardContent
        component={Paper} 
        // style={{backgroundColor:'#00BFFF'}}
        >

          <Typography variant="h6" component="div" >
            Tổng đơn hàng: {totalPd} {' '}  đơn
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            
          </Typography>
          <Typography variant="h6" component="div" >
            Tổng doanh thu: {totalIncome.toFixed(2)} {' '} $
          </Typography>
          <Typography variant="body2">
            
          <TableContainer TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tháng/năm</TableCell>
              <TableCell align="center">Doanh thu</TableCell>
            </TableRow>
            {/* {console.log('render', lable1)} */}
          </TableHead>
          <TableBody>
            {lable1.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row}
                </TableCell>
                <TableCell align="center">{data1[index].concat(' $')}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
           
          </Typography>
        </CardContent>
      </Box>
      </div>

      <LineChart 
        
        listPds={listPds} 
        listLable = {lable1}
        listData = {data1}
        fromTime = {fromTime}
        toTime = {toTime}
        ></LineChart>

      {/* <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "10%" }}>STT</TableCell>
              <TableCell style={{ width: "35%" }} align="left">
                Tên dòng
              </TableCell>
              <TableCell style={{ width: "40%" }} align="left">
                Hình ảnh
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                Số lượng bán
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRev.map((item) => (
              <TableRow>
              
                <TableCell style={{ width: "10%" }}>{item.stt}</TableCell>
                <TableCell style={{ width: "35%" }} align="left">
                  {item.TENDONG}
                </TableCell>
                <TableCell style={{ width: "40%" }} align="left">
                  <img
                    src={"../../../".concat(item.HINHANH)}
                    width={"18%"}
                    height={"auto"}
                  />
                </TableCell>
                <TableCell style={{ width: "15%" }} align="left">
                  {item.so_luong_ban}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
}
