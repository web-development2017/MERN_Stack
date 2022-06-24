import logo from "./assets/logo.png"
export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <img src={logo} alt="logo" className="mr-2" />
                    <div>Project Managment</div>
                </div>
            </a>
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/register">Register</a>
            <a className="nav-link" href="/login">Login</a>
            <a className="nav-link" href="/about">About</a>
        </div>
    </nav>
  );
}
