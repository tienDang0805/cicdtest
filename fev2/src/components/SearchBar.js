import React, { Component, useState } from "react";
import "./../assets/css/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { KeyNavigate } from "../helper/KeyNavigate";
import { addSearchWordToLocalStorage } from "../helper/searchWord";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
//   const [wordResult, setWordResult] = useState("")

  let navigate = useNavigate();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord)
    //  fixWordEntered(searchWord)

    setWordEntered(searchWord);
    // setWordResult(fixWordEntered(searchWord))
    // console.log(searchWord)
    addSearchWordToLocalStorage(searchWord.trim())

    const newFilter = data.filter((value) => {
      return value.TENDONG.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <p>
        {parts.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
        )}
      </p>
    );
  };


  const fixWordEntered = (text) => {
    let arr = text.split(" ")
      let i, kq='',temp
      for(i=0;i<arr.length;i++){
        temp = arr[i].trim().toLowerCase()
        if(temp != ''){
            kq += temp + ' '
        }
      }
      return kq.trim()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do navigate')
      let temp = fixWordEntered(wordEntered)

    //   console.log(wordEntered)
        
      addSearchWordToLocalStorage(temp.trim())
      navigate(KeyNavigate.Search.concat('/').concat(temp.trim()))
    
    }
  }

  return (
    <div className="search-bar">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onKeyDown={handleKeyDown}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {/* {console.log('filer:', filteredData)} */}
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link to={KeyNavigate.Detail.concat("/").concat(value.MADONG)}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={"../../../".concat(value.HINHANH && value.HINHANH)}
                      width={"auto"}
                      height={"100px"}
                    />
                  </div>
                  <div className="col-md-10">
                    <a className="dataItem" href={value.link} target="_blank">
                      {/*<p>{value.TENDONG} </p>*/}
                      {getHighlightedText(value.TENDONG, wordEntered)}
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
