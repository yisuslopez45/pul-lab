import { useState } from "react";
import { NavLink } from "react-router";
// COMPONENTS
import Card from "../components/Card";
import CardIU from "../components/CardIU";
import Button from "../components/Button";
// HELPERS
import { ListNavigationDisease, ListNavigationTest } from "../helpers/ListTabs";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header>
      <nav className=" relative border-gray-200 px-20 sm:max-w-full md:max-w-full lg:max-w-7xl flex items-center justify-between mx-auto p-4">
        <NavLink
           to={'/'} end
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/Logo.svg" alt="Flowbite Logo" className="h-10 w-auto" />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            PulLab
          </span>
        </NavLink>

        <div className="flex gap-3">
          <ul className=" flex gap-3">
            <li>
              <a
                onClick={() => toggleDropdown("enfermedad")}
                className="bg-white p-2 rounded-3xl font-bold flex text-gray-800"
              >
                ENFERMEDAD
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "enfermedad" && (
                <div className="absolute sm:max-w-full md:max-w-full lg:max-w-7xl top-16 left-2 right-2  mt-2 rounded-3xl shadow-lg bg-white  ring-opacity-5 z-10">
                  <div className="flex gap-4 justify-between py-12 sm:px-10 md:px-15 lg-px-40 xl:px-40">
                    {ListNavigationDisease.map((item) => (
                      <NavLink to={item.to} end>
                        <Card
                          key={item.id}
                          title={item.title}
                          imageUrl={item.imageUrl}
                        />
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <a
                onClick={() => toggleDropdown("quiz")}
                className="bg-white p-2 rounded-3xl font-bold flex text-gray-800"
              >
                QUIZ
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "quiz" && (
                <div className="absolute sm:max-w-full md:max-w-full lg:max-w-7xl top-16 left-2 right-2  mt-2 rounded-3xl shadow-lg bg-white  ring-opacity-5 z-10">
                  <div className="flex gap-4  justify-between py-12 sm:px-10 md:px-15 lg-px-40 xl:px-40 ">
                    {ListNavigationTest.map((item) => (
                      <Card
                        key={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <a
                onClick={() => toggleDropdown("sobre")}
                className="bg-white p-2 rounded-3xl font-bold flex text-gray-800"
              >
                SOBRE
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </a>
              {openDropdown === "sobre" && (
                <div className="absolute sm:max-w-full md:max-w-full lg:max-w-7xl top-16 left-2 right-2  mt-2 rounded-3xl shadow-lg bg-white  ring-opacity-5 z-10">
                  <div className="p-4">
                    <CardIU title="Sobre Nosotros" isShowClose={false} >
                      <p className="font-bold uppercase">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="font-bold uppercase">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet.
                      </p>

                      <div className="mt-6 flex justify-center">
                        <Button label="Saber Mas" color="amber" />
                      </div>
                    </CardIU>
                  </div>
                </div>
              )}
            </li>
          </ul>

          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <svg
              className="w-7 h-7 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15"
              />
            </svg>
          </div>

          <div
            onClick={() => toggleDropdown("account")}
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
          >
            <div>
              <svg
                className=" text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {openDropdown === "account" && (
              <div className="absolute  lg:max-w-2xl  top-50 left-50 right-50  rounded-3xl shadow-lg bg-white   z-10  m-max">
                <div className="">
                  <CardIU title="Iniciar Sesion">
                    <img src="/images/Google.png" className="w-52 h-52 m-auto" ></img>
                    <div className="mt-6 flex justify-center">
                      <Button label="Iniciar con Goolge"  color="amber"  />
                    </div>
                  </CardIU>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
