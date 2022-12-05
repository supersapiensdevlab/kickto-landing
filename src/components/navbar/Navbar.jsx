import logo from "../../assets/images/kickto-logo-text-alt.svg";
function navbar() {
  return (
    <div className="navbar  fixed  text-black/80 bg-primary backdrop-blur bg-opacity-5 z-50">
      <div className="navbar-start  ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content  p-2 shadow bg-purple-100 mt-6
          backdrop-blur-md rounded-box w-52"
          >
            <li>
              <a className="hover:bg-primary hover:text-white">Whitepaper</a>
            </li>{" "}
            <li>
              <a
                className="hover:bg-primary hover:text-white"
                href="https://kicktofarming.netlify.app/"
                target="_blank"
              >
                DEX
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-white">Marketplace</a>
            </li>
          </ul>
        </div>
        <div className="flex"><img src={logo} className="h-16 w-36 lg:ml-24" /><ul className="menu menu-horizontal p-0 hidden lg:flex">
          <li>
            <a>Whitepaper</a>
          </li>{" "}
          <li>
            <a href="https://kickto-dex.netlify.app/" target="_blank">
              DEX
            </a>
          </li>
          <li>
            <a>Marketplace</a>
          </li>
        </ul>
      </div></div>
      <div className="navbar-start hidden  ">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Whitepaper</a>
          </li>{" "}
          <li>
            <a href="https://kickto-dex.netlify.app/" target="_blank">
              DEX
            </a>
          </li>
          <li>
            <a>Marketplace</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-primary rounded-full border-none hover:scale-95 text-white lg:mr-24">
          Download
        </a>
      </div>
    </div>
  );
}

export default navbar;
