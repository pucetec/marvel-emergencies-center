import React from "react";
import { Table as MuiTable } from '@mui/material'

const MyTable = ({ children }) => {
    return <MuiTable>{children}</MuiTable>
};

export default MyTable;
