import logo from "../../assets/images/kickto-logo-text-alt.svg";
import logoWhite from "../../assets/images/kickto-logo-text-white.svg";
import logoPurpleWhite from "../../assets/images/kickto-logo-text-alt-stroke.svg";

function navbar() {
  return (
    // <div className="navbar  fixed  text-black/80 bg-primary backdrop-blur bg-opacity-5 z-50 lg:px-24">
    //   <div className="navbar-start  ">
    //     <div className="dropdown ">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden ">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content  p-2 shadow bg-purple-100 mt-6
    //       backdrop-blur-md rounded-box w-52  "
    //       >
    //         <li>
    //           <a className="hover:bg-primary hover:text-white">Whitepaper</a>
    //         </li>{" "}
    //         <li>
    //           <a
    //             className="hover:bg-primary hover:text-white"
    //             href="https://kicktofarming.netlify.app/"
    //             target="_blank"
    //           >
    //             DEX
    //           </a>
    //         </li>
    //         <li>
    //           <a className="hover:bg-primary hover:text-white">Marketplace</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex">
    //       <img src={logoWhite} className="h-16 w-36 hidden  " />

    //     </div>
    //   </div>

    //   <div data-aos="fade-bottom"
    //           data-aos-duration="1000"
    //           data-aos-delay="1500"
    //           data-aos-easing="ease-in-out" className="navbar-center hidden md:flex   ">
    //   <div >  <a className="btn bg-primary   border-none hover:scale-95 text-white ">
    //       Marketplace
    //     </a></div>  <div>
    //   <a className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block "
    //      href="https://kickto-dex.netlify.app/" target="_blank">
    //           DEX
    //         </a></div>

    //   </div>
    // </div>

    <div
      data-aos="fade-bottom"
      data-aos-duration="1000"
      data-aos-delay="1500"
      data-aos-easing="ease-in-out"
      className="navbar  z-[200] fixed  text-black/80 bg-primary backdrop-blur bg-opacity-5   lg:px-24"
    >
      <div className="navbar-start">
<img src={logoWhite} className="h-16 w-36  "></img>
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <ul className="p-2">
                <li>
                  <a className="btn bg-primary    border-none hover:scale-95 text-white ">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a>
                    <a
                      className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block "
                      href="https://kickto-dex.netlify.app/"
                      target="_blank"
                    >
                      DEX
                    </a>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="flex align-middle items-center">
            <a className="rounded btn-block py-4 btn bg-primary   border-none hover:scale-95 text-white ">
              Marketplace
            </a>
          </li>{" "}
          <li>
            <a>
              <a
                className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block "
                href="https://kickto-dex.netlify.app/"
                target="_blank"
              >
                DEX
              </a>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn opacity-0">Get started</a>
      </div>
    </div>
  );
}

export default navbar;
