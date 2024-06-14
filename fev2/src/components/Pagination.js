import React, {Component, useState} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dividerClasses, Pagination} from "@mui/material";
import {CustomCard} from "./Card";
import {CustomCardProduct} from "./CardProduct";

const CustomePagination = (props) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(props.data.length / PER_PAGE);
  const data = usePagination(props.data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  }

  return (
      <div className="row">
        <Pagination count={count} page={page} color={"primary"} size={"large"} variant={"outlined"}
                    shape={"circular"} showFirstButton showLastButton onChange={handleChange}
          style={{margin: 20}}/>
        <div className="row">
          {
            data.currentData().map(item => {
              return (
                  <CustomCardProduct data={item}></CustomCardProduct>
              )
            })
          }
        </div>
        <Pagination count={count} page={page} color={"primary"} size={"large"} variant={"outlined"}
                    shape={"circular"} showFirstButton showLastButton onChange={handleChange}/>            
      </div>
  );
};
export default CustomePagination;


function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}