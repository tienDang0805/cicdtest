import usePagination from "@mui/material/usePagination/usePagination";
import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const params = useParams();
        
        return (
            <Component 
                navigate={navigate}
                params={params}
                {...props}>
            </Component>
        )
    };
    return Wrapper;
}