import './userList.css';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import faker from 'faker';
import { userRows } from '../../dummyData';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const UserList = () =>{
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !==id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 300, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img src={faker.image.avatar() } alt="avatar"  className="userListImg"/> 
                </div>
            )
        } },
     
        { field: 'username', headerName: 'userName', width: 250, renderCell:(params) =>{
            return(
                <div >
                    {faker.name.findName()}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 300, renderCell:()=>{
            return(
                <div>
                    {faker.internet.email()}
                </div>
            )
        } },
        { field: 'status', headerName: 'Status', width: 200 },
        
        {
          field: 'transaction',
          width: 150,
          headerName: 'Transaction Volume',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150, renderCell: (params) => {
                return (
                    <>
                    <Link to={`/user/${params.id}`}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() =>handleDelete(params.row.id)} />
                    </>
                )
            }
        }

      ];
      
      
      
    return(
        <div className="userList">
         
        <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            checkboxSelection
        />
    
        </div>
    )
}
export default UserList;