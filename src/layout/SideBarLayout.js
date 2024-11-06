import axios from "axios";
import { Button, DarkThemeToggle, Label, Modal, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { download_icon, Logout_Icon, Resume_Icon } from "../assets/svgs/svgs";

const sideBarItems = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    icon: (
      <svg
        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
      >
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Skills Section",
    link: "/admin/skills-section",
    icon: (
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
      </svg>
    ),
  },
  {
    name: "Skills",
    link: "/admin/skills",
    icon: (
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
      </svg>
    ),
  },
  {
    name: "Projects",
    link: "/admin/projects",
    icon: (
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 18"
      >
        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
      </svg>
    ),
  },
];

const Header = () => (
  <Navbar
    fluid
    className="dark:bg-themebg-dark bg-themebg-light py-3 px-7 w-full"
  >
    <div className="flex items-center">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 me-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <h1 className="text-themebg-dark dark:text-themebg-light font-sans font-bold text-lg">
        Happy Patel
      </h1>
    </div>
    <div className="flex md:order-2 gap-2">
      <DarkThemeToggle className="rounded-full" />
      <a
        href={process.env.REACT_APP_API_URL + "/assets/resumes/Happy_Patel.pdf"}
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

const ChangeResumeModal = ({
  isOpen,
  onFileChange,
  closeModal,
  isLoading,
  handleUpload,
  isValid,
}) => {
  return (
    <Modal show={isOpen} onClose={closeModal}>
      <Modal.Header>Change Resume</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleUpload}>
          <div className="mb-4">
            <Label htmlFor="resume" value="Select Resume" />
            <input
              name="resume"
              type="file"
              accept=".pdf"
              onChange={(e) => onFileChange(e.target.files[0])}
              className="block w-full text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              onClick={closeModal}
              disabled={isLoading}
              gradientMonochrome="info"
              className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading || !isValid}
              type="submit"
              gradientMonochrome="info"
              className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
            >
              Upload
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const SideBarLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileChange = (file) => {
    setSelectedFile(file);
    uploadResume(file);
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("resume", selectedFile);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/admin/resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.message);
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message);
      console.error("Error uploading resume:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => localStorage.removeItem("adminToken");

  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-[66px] left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-7 sm:px-4 py-4 overflow-y-auto bg-themebg-light dark:bg-themebg-dark">
          <ul class="space-y-2 font-medium">
            {sideBarItems.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span class="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsModalOpen((pre) => !pre)}
                className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {Resume_Icon()}
                <span class="ms-3">Change Resume</span>
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {Logout_Icon()}
                <span class="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <ChangeResumeModal
        isValid={selectedFile !== null}
        isLoading={isLoading}
        handleUpload={uploadResume}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        onFileChange={handleFileChange}
      />
      <div class="p-4 sm:ml-64 bg-themebg-light dark:bg-themebg-dark flex-1 max-h-[calc(100dvh-66px)] overflow-y-scroll relative">
        {children}
      </div>
    </div>
  );
};

export default SideBarLayout;
