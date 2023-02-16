
function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="offcanvasExample"
      >
        <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
      </button>
      <a
        className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
        href="#"
        >SKR-Moringa</a
      >
      <button
        className="btn btn-danger"
        type="button"
      >
        Login
      </button>
      
    </div>
  </nav>
    </div>
  );
}

export default Navbar;