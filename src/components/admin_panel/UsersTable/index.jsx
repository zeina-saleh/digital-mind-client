import React, { useState, useEffect } from 'react'
import { nodeRequest } from '../../../config/nodeRequest';
import './style.css'
import Button2 from '../../UI/Button2';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmDelete from '../ConfirmDelete';
import Modal from 'react-modal'
import AddForm from '../AddForm';

const UsersTable = () => {

  const [key, setKey] = useState(0)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({ name: null, email: null, password: null })
  const [userId, setUserId] = useState(null)
  const [change, setChange] = useState(undefined)
  const [editMode, setEditMode] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenDeleteModal = () => setOpenDeleteModal(true)
  const handleCloseDeleteModal = () => setOpenDeleteModal(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const fetchUsers = async () => {
    try {
      const response = await nodeRequest({ route: "http://127.0.0.1:8000/users", body: "" });
      setUsers(response)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  function handleDelete(id) {
    setUserId(id)
    handleOpenDeleteModal()
  }

  function handleEdit(user) {
    setUser(user)
    setEditMode(true)
    handleOpenModal()
  }

  useEffect(() => {
    fetchUsers();
  }, [change, key, editMode]);
  return (
    <div className="main-container">
      <Button2 text={"Add User"} onClick={handleOpenModal} classname='w-fit h-10 mb-3 text-[#383838]' icon={faPen}>Update</Button2>
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
                  <Button2 text={"Edit"} icon={faPen} onClick={() => handleEdit(user)} >Update</Button2>
                  <Button2 text={"Remove"} icon={faTrash} onClick={() => handleDelete(user.id)}>Delete</Button2>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal overlayClassName='overlay' isOpen={openDeleteModal} onRequestClose={handleCloseDeleteModal} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
        <ConfirmDelete handleCloseDeleteModal={handleCloseDeleteModal} userId={userId} setChange={setChange} change={change} />
      </Modal>

      <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className='modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'>
        <AddForm key={key} setKey={setKey} handleCloseModal={handleCloseModal}  setUser={setUser} user={user} />
      </Modal>

      <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className='modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'>
        <AddForm key={key} setKey={setKey} handleCloseModal={handleCloseModal}  setUser={setUser} user={user} editMode={editMode} setEditMode={setEditMode}/>
      </Modal>
    </div>
  )
}

export default UsersTable