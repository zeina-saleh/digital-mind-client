import React, { useState, useEffect } from 'react'
import { useTable } from "react-table";
import { sendRequest2 } from '../../../config/request2';
import './style.css'
import Button2 from '../../UI/Button2';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const UsersTable = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await sendRequest2({ route: "users", body: "" });
      setUsers(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="main-container">
     <table className="Table w-full">
        <thead className='t-head'>
          <tr className='TableRow'>
            <th className="TableHeader">ID</th>
            <th className="TableHeader">Name</th>
            <th className="TableHeader">Email</th>
            <th className="TableHeader action">Actions</th>
          </tr>
        </thead>
        <tbody className='t-body'>       
          {users.map((user) => (
            <tr key={user.id} className="TableRow">
              <td className="TableCell">{user.id}</td>
              <td className="TableCell">{user.name}</td>
              <td className="TableCell">{user.email}</td>                      
              <td className="TableCell ActionsCell">
                <div className='flex w-fit gap-2 m-0'>
                <Button2 text={"Edit"}  icon={faPen}>Update</Button2>
                <Button2 text={"Delete"} icon={faTrash}>Delete</Button2>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable