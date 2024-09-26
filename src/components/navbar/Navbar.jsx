import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estate</span>
        </Link>
        <Link href="/">Home</Link>
        <Link to="/list">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>AE</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/list" onClick={() => setOpen(false)}>
            Agents
          </Link>
          <Link
            to="/profile"
            className="profile"
            onClick={() => setOpen(false)}
          >
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
