import logo from "../../assets/images/kickto-logo-text.svg";
function navbar(){


  return(
<div className="navbar  fixed  text-white bg-orange-300 backdrop-blur bg-opacity-5 z-50">
  <div className="navbar-start  ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-40  backdrop-blur-md rounded-box w-52">
      <li><a>Whitepaper</a></li> <li><a href="https://kicktofarming.netlify.app/" target="_blank">DEX</a></li>
      <li><a>Marketplace</a></li>  
      </ul>
    </div>
    <img src={logo} className="h-16 w-36 sm:ml-24"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><a>Whitepaper</a></li> <li><a href="https://kicktofarming.netlify.app/" target="_blank">DEX</a></li>
      <li><a>Marketplace</a></li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-orange-500 text-white">Download</a>
  </div>
</div>)
}

export default navbar;