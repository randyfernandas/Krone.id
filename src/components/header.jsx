import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ back }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="24px">
              <path
                d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
                fill="#e8eaed"
              />
            </svg>
          </Link>
        )}
        <h1>
          <Link to="/home">Krone.id</Link>
        </h1>
      </div>
      <button className="sign-out-btn" onClick={handleSignOut}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          id="sign-out"
          width="24px"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            points="174.011 86 216 128 174.011 170"
          ></polyline>
          <line
            x1="104"
            x2="215.971"
            y1="128"
            y2="128"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            d="M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56"
          ></path>
        </svg>
      </button>
    </header>
  );
}
