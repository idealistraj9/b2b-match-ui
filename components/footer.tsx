import React from "react";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      ></link>
      <footer className="relative bg-secondary  pt-5 border-y border-black ">
        <div className="container mx-auto px-2">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-foreground">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-foreground">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-background text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-background text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-background text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-background text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top ">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-foreground text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-foreground hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-foreground hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="imprint"
                      >
                        imprint
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-foreground hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/data"
                      >
                        Data protection
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-foreground hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="tc"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-foreground hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300"></hr>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  Design by{" "}
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  B2bmatch.ch
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
