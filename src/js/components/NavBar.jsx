import React from "react";


const NavBar = () => {
    return (
       <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://images.unsplash.com/photo-1632334738554-95c79fb27eb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627" 
      alt="Logo" width="30" height="24" className="rounded-circle d-inline-block align-text-start me-2"></img>
      Surf School
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Clases</a>
        <a className="nav-link" href="#">Visita</a>
      </div>
    </div>
  </div>
</nav>
    );
};

export default NavBar;