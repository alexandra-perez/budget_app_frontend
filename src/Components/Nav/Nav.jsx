import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevClick) => !prevClick);
  }

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <nav className="Nav">
      <ul className="desktop_nav">
        <Link to="/">
          <li>
            {' '}
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill=" #fff"
              >
                <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
              </svg>
              <h1>BudgetBuddy</h1>
            </div>
          </li>
        </Link>
        <Link to="/transactions">
          <li>My Transactions</li>
        </Link>
        <Link to="/new">
          <li>Add New Transaction</li>
        </Link>
        <Link to="/profile">
          <li>
            <i className="fa-regular fa-user"></i>
            Profile
          </li>
        </Link>
      </ul>
      <ul className="mobile_nav">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 -960 960 960"
            width="1.5rem"
            fill=" #fff"
          >
            <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
          </svg>
        </div>
        <div className="menu">
          <i className="fa-solid fa-bars" onClick={(e) => handleClick(e)}></i>
          <div className={`dropdown ${clicked ? 'visible' : 'hidden'}`}>
            <ul>
              <Link to="/transactions">
                <li>My Transactions</li>
              </Link>
              <Link to="/new">
                <li>Add a transaction</li>
              </Link>
              <Link to="/profile">
                <li>Profile</li>
              </Link>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  );
}
