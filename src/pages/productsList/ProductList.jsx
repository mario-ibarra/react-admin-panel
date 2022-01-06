import './productlist.css';

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import faker from 'faker';
import { productRows } from '../../dummyData';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !==id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Image', width: 300, renderCell: (params)=>{
            return (
                <div className="productListproduct">
                    <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  className="productListImg"/> 
                </div>
            )
        } },
     
        { field: 'productname', headerName: 'Product Name', width: 250, renderCell:(params) =>{
            return(
                <div >
                    {faker.commerce.productName()}
                </div>
            )
        } },
        { field: 'price', headerName: 'Price', width: 200, renderCell:()=>{
            return(
                <div>
                    {faker.finance.amount()}
                </div>
            )
        } },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'stock', headerName: 'Stock', width: 200 },
        
     
        {
            field: 'action',
            headerName: 'Action',
            width: 150, renderCell: (params) => {
                return (
                    <>
                    <Link to={`/product/${params.id}`}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() =>handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    
      ];

    return (
        <div className="products">
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={16}
            rowsPerPageOptions={[16]}
            checkboxSelection
        />
        </div>
    )
};

export default ProductList;