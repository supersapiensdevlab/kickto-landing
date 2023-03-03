import logo from "../../assets/images/kickto-logo-text-alt.svg";
import logoWhite from "../../assets/images/kickto-logo-text-white.svg";
import logoPurpleWhite from "../../assets/images/kickto-logo-text-alt-stroke.svg";

function navbar() {
  return (
    <div
      data-aos="fade-bottom"
      data-aos-duration="1000"
      data-aos-delay="1500"
      data-aos-easing="ease-in-out"
      className="navbar  z-[200] fixed  text-black/80 bg-primary backdrop-blur bg-opacity-5   lg:px-24 w-full max-w-full"
    >
      <div className="navbar-start">
        <img src={logo} className="h-16 w-36"></img>
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <ul className="p-2">
                {/* <li>
                  <a className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
                    Coming Soon{" "}
                  </a>
                </li> */}
                {/* <li>
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
                    Public Sale{" "}
                  </a>
                </li> */}
                <li>
                  <a className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
                    Marketplace{" "}
                  </a>
                </li>
                <li>
                  <a>
                    <a
                      className="btn hidden bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block "
                      target="_blank"
                      href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C&inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
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
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <a className="  bg-transparent text-primary    ">Coming Soon </a> */}
          </li>
          {/* <li className="flex align-middle items-center mx-3">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
              Public Sale
            </a>
          </li>{" "} */}
          <li className="flex align-middle items-center mx-3">
            <a className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
              Marketplace
            </a>
          </li>{" "}
          <li className="flex align-middle items-center mx-3">
            <a
              className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block "
              href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C&inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
              target="_blank"
            >
              DEX
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden ">
        <div className="dropdown  dropdown-end">
          <button tabIndex={0} className="btn btn-square btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {/* <li>
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" >Public Sale</a>
            </li> */}
            <li>
              <a>Marketplace</a>
            </li>
            <li>
<<<<<<< HEAD
              <a
                target="_blank"
                href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=ETH&inputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C"
              >
                DEX
              </a>
=======
              <a target="_blank" href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C&inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F">DEX</a>
>>>>>>> b3a6a7249bce89bee947bccf8bf4edf4644666d8
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
