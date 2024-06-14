let myData = [];
let myHeader = [];
let myFooter = [];
var iddh;

function getData() {
  let result = JSON.parse(localStorage.getItem("keycart1"));
  showData(result);
}

function showData(data) {
  // console.log(data);
  iddh = document.getElementById("idorder").value;
  myData = data.map((d) => {
    return {
      madong: d?.MADONG,
      tendong: d?.TENDONG,
      soluong: d?.quantity,
      dongia: d?.GIA,
      thanhtien: d?.quantity * d?.GIA,
    };
  });

  console.log("myData", myData);
  console.log("id", iddh);
  let html =
    "<tr><td>Mã dòng</td><td>Tên dòng</td><td>Số lượng</td><td>Đơn giá</td><td>Thành tiền</td></tr>";
  let total = 0;
  $.each(myData, function (key, value) {
    html += "<tr>";
    html += "<td>" + value?.madong + "</td>";
    html += "<td>" + value?.tendong + "</td>";
    html += "<td>" + value?.soluong + "</td>";
    html += "<td>" + value?.dongia + "</td>";
    html += '<td align="right">' + value?.thanhtien + "</td>";
    html += "</tr>";
  });
  // console.log('html', html);
  $("table tbody").html(html);
}

async function exportToExcel(fileName, sheetName, report) {
  getData();
  if (!myData || myData.length === 0) {
    console.error("Chưa có data");
    return;
  }
  console.log("exportToExcel", myData);

  if (report !== "") {
    myHeader = ["Mã dòng", "Tên dòng", "Số lượng", "Đơn giá", "Thành tiền"];
    exportToExcelPro("Orders", "Orders", report, myHeader, myFooter, [
      { width: 10 },
      { width: 50 },
      { width: 10 },
      { width: 15 },
      { width: 15 },
    ]);
    return;
  }

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet(sheetName);
  const header = Object.keys(myData[0]);
  console.log("header", header);
  ws.addRow(header);
  myData.forEach((rowData) => {
    console.log("rowData", rowData);
    row = ws.addRow(Object.values(rowData));
  });

  const buf = await wb.xlsx.writeBuffer();
  saveAs(new Blob([buf]), `${fileName}.xlsx`);
}

async function exportToExcelPro(
  fileName,
  sheetName,
  report,
  myHeader,
  myFooter,
  widths
) {
  if (!myData || myData.length === 0) {
    console.error("Chưa có data");
    return;
  }
  console.log("exportToExcel", myData);

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet(sheetName);
  const columns = myHeader?.length;
  const company = {
    border: false,
    money: false,
    height: 50,
    font: { size: 15, bold: false, color: { argb: "#000000" } },
    alignment: { horizontal: "left", vertical: "middle" },
    fill: {
      type: "pattern",
      pattern: "solid", //darkVertical
      fgColor: {
        argb: "FFFFFF",
      },
    },
  };

  const address = {
    border: false,
    money: false,
    height: 30,
    font: { size: 12, bold: false, color: { argb: "#000000" } },
    alignment: { horizontal: "left", vertical: "middle" },
    fill: {
      type: "pattern",
      pattern: "solid", //darkVertical
      fgColor: {
        argb: "FFFFFF",
      },
    },
  };
  const title = {
    border: false,
    money: false,
    height: 30,
    font: { size: 15, bold: false, color: { argb: "#000000" } },
    alignment: { horizontal: "center", vertical: "middle" },
    fill: {
      type: "pattern",
      pattern: "solid", //darkVertical
      fgColor: {
        argb: "FFFFFF",
      },
    },
  };
  const header = {
    border: true,
    money: false,
    height: 30,
    font: { size: 12, bold: false, color: { argb: "#000000" } },
    alignment: { horizontal: "center", vertical: "middle" },
    fill: {
      type: "pattern",
      pattern: "solid", //darkVertical
      fgColor: {
        argb: "FFFFFF",
      },
    },
  };
  const data = {
    border: true,
    money: true,
    height: 0,
    font: { size: 12, bold: false, color: { argb: "000000" } },
    alignment: null,
    fill: null,
  };

  if (widths && widths.length > 0) {
    ws.columns = widths;
  }
  let currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  addRow(ws, ["            Công ty Bia Rượu Lusion Wine"], company);
  addRow(
    ws,
    [
      `                90 Man Thiện, TP Thủ Đức                                                                       Ngày lập     ${datetime}`,
    ],
    address
  );

  let row0 = addRow(ws, [""], title);
  mergeCells(ws, row0, 1, columns);
  let row2 = addRow(ws, [""], title);
  mergeCells(ws, row2, 1, columns);

  let row = addRow(ws, [report], title);
  mergeCells(ws, row, 1, columns);

  let row1 = addRow(
    ws,
    [
      `                                       Mã đơn hàng                           ${iddh}`,
    ],
    title
  );
  mergeCells(ws, row1, 1, columns);
  let row3 = addRow(ws, [""], title);
  mergeCells(ws, row3, 1, columns);
  let row4 = addRow(ws, [""], title);
  mergeCells(ws, row4, 1, columns);

  addRow(ws, myHeader, header);
  // console.log('wb', wb);
  myData.forEach((row) => {
    addRow(ws, Object.values(row), data);
  });
  // console.log('myFooter', myFooter);

  const buf = await wb.xlsx.writeBuffer();
  saveAs(new Blob([buf]), `${fileName}.xlsx`);
}

function addRow(ws, data, section) {
  const borderStyles = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
  const row = ws.addRow(data);
  console.log("addRow", section, data);
  row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    if (section?.border) {
      cell.border = borderStyles;
    }
    if (section?.money && typeof cell.value === "number") {
      cell.alignment = { horizontal: "right", vertical: "middle" };
      cell.numFmt = "$#,##0.00;[gray]-$#,##0.00";
    }
    if (section?.alignment) {
      cell.alignment = section.alignment;
    } else {
      cell.alignment = { vertical: "middle" };
    }
    if (section?.font) {
      cell.font = section.font;
    }
    if (section?.fill) {
      cell.fill = section.fill;
    }
  });
  if (section?.height > 0) {
    row.height = section.height;
  }
  return row;
}

function mergeCells(ws, row, from, to) {
  // console.log(
  // 	'mergeCells',
  // 	row,
  // 	from,
  // 	to,
  // 	row.getCell(from)._address,
  // 	row.getCell(to)._address
  // );
  ws.mergeCells(`${row.getCell(from)._address}:${row.getCell(to)._address}`);
}

function columnToLetter(column) {
  var temp,
    letter = "";
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}
