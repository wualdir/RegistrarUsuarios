import React from "react";
import '../Components/UserCard.css'


const UserCard = ({ user,setuserSelect,setFormisOpen   ,setFormisDelete }) => {
  
  const hadledelete = () => {
    
    setuserSelect(user);
    setFormisDelete(true)
   

  };
  const handleEdit = () => {
    setuserSelect(user);
    setFormisOpen(true)
  };

  return (
    <article className="user">
      <h3 className="user__name">
        {user.first_name} {user.last_name}
      </h3>
      <hr className="user__hr" />
      <ul className="user__list">
        <li className="user__item">
          <span className="user__label">Email</span>
          <span className="user__value">{user.email}</span>
        </li>
        <li  className="user__item">
          <span className="user__label">Birthday</span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer">
      <button className="user__Btn user__delet" onClick={hadledelete}><i className='bx bx-trash'></i></button>
      <button className="user__Btn user__edit" onClick={handleEdit} ><i className='bx bxs-edit-alt'></i></button>
      </footer>
    </article>
  );
};

export default UserCard;
