import axios from "axios";
import { DarkThemeToggle, Navbar, useThemeMode } from "flowbite-react";
import React from "react";
import { toast } from "react-toastify";
import { download_icon } from "../assets/svgs/svgs";

const Header = () => (
  <Navbar
    fluid
    rounded
    className="dark:bg-themebg-dark bg-themebg-light py-3 px-7 w-full fixed top-0"
  >
    <h1 className="text-themebg-dark dark:text-themebg-light font-sans font-bold text-lg">
      Happy Patel
    </h1>
    <div className="flex md:order-2 gap-2">
      <DarkThemeToggle className="rounded-full" />
      <a
        href="/Happy_Patel_Resume.pdf"
        download
        target="_blank"
        rel="noreferrer"
        className="text-themeText-light dark:text-themeText-dark flex items-center gap-1 py-2 px-3 border rounded-full border-borderTheme-dark dark:border-borderTheme-light hover:bg-gradient-to-l  from-primary1 to-transparent hover:border-primary1 dark:hover:border-borderTheme-light"
      >
        {download_icon()}Download Resume
      </a>
    </div>
  </Navbar>
);

const AdminLogin = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const theme = useThemeMode();

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswords = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    if (userName && password) {
      axios
        .post(process.env.REACT_APP_API_URL + "/admin/sign-in", {
          userName,
          password,
        })
        .then((response) => {
          toast.success("Logged In Successfully", {
            theme: theme.mode,
            position: "top-center",
          });
          localStorage.setItem("adminToken", "adminToken");
          // window.location.href = "/admin";
        })
        .catch((error) => {
          toast.error("Invalid credentials", {
            theme: theme.mode,
            position: "top-center",
          });
        });
    } else {
      toast.error("fill in user name and passwords", {
        theme: theme.mode,
        position: "top-center",
      });
    }
    setIsLoading(false);
  };

  return (
    <section className="flex items-center flex-col justify-center bg-themebg-light dark:bg-themebg-dark min-h-dvh">
      <Header />
      <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14]">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={handleUserName}
              value={userName}
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={handlePasswords}
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required={true}
            />
          </div>

          <button
            disabled={isLoading}
            onClick={handleLogin}
            class="w-full text-white bg-primary1 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
