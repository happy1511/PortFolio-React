import axios from "axios";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SideBarLayout from "../layout/SideBarLayout";

const header = ["Icon", "Name", "Official Website", "Actions"];

const AddNewSkillModal = ({ data, isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Skill, setSkill] = useState({
    name: "",
    icon: null,
    officialLink: "",
  });

  const handleFile = async () => {
    if (data?.icon) {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + data.icon);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const fileName = data?.icon.split("/");
        const file = new File([blob], fileName[fileName.length - 1], {
          type: "image/svg+xml",
        });

        setSkill((prev) => ({
          ...prev,
          icon: file,
        }));
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    }
  };

  useEffect(() => {
    setSkill(
      data || {
        name: "",
        officialLink: "",
        icon: null,
      }
    );
    handleFile();
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skillsUsed") {
      const updatedSkills = [...Skill.skillsUsed];
      updatedSkills[e.target.dataset.index] = value;
      setSkill({ ...Skill, skillsUsed: updatedSkills });
    } else {
      setSkill({ ...Skill, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", Skill.name);
    formData.append("icon", Skill.icon);
    formData.append("officialLink", Skill.officialLink);

    data
      ? axios
          .put(
            `${process.env.REACT_APP_API_URL}/admin/skills/${data._id}`,
            formData
          )
          .then((data) => {
            toast.success("Skill updated successfully");
            closeModal();
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            toast.error("Failed to update skill");
            setIsLoading(false);
          })
      : axios
          .post(process.env.REACT_APP_API_URL + "/admin/skills", formData)
          .then((data) => {
            console.log("Skill added successfully:", data);
            toast.success("Skill added successfully");
            closeModal();
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            toast.error("Failed to add Skill");
            setIsLoading(false);
          });
  };

  return (
    <>
      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>Add New Skill</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name" value="Skill Name" />
              <TextInput
                id="name"
                name="name"
                value={Skill.name}
                onChange={handleChange}
                placeholder="Enter skill name"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="officialLink" value="Official Link" />
              <TextInput
                id="officialLink"
                name="officialLink"
                value={Skill.officialLink}
                onChange={handleChange}
                placeholder="Enter official link"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="svg" value="Upload Svg" />
              <input
                id="svg"
                name="svg"
                type="file"
                accept=".svg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setSkill((prevState) => ({
                    ...prevState,
                    icon: file,
                  }));
                }}
                className="block w-full text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              />
              {Skill.icon && Skill.icon instanceof File && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(Skill.icon)}
                    alt="SVG Preview"
                    className="object-cover w-48 h-36"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                disabled={isLoading}
                type="submit"
                gradientMonochrome="info"
                className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
              >
                Save Skill
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const TableHeader = () => {
  return (
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {header.map((headerItem, index) => (
          <th scope="col" class="px-6 py-3">
            {headerItem}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [skills, setSkills] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  const getSkills = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/admin/skills")
      .then((response) => setSkills(response.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = async (project) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/skills/${project._id}`)
      .then((response) => {
        toast.success("Skill deleted successfully");
        getSkills();
      })
      .catch((error) => toast.error("some error occured"));
  };

  useEffect(() => {
    !isModalOpen && getSkills();
  }, [isModalOpen]);

  return (
    <SideBarLayout>
      <div className="pb-8 bg-themebg-light dark:bg-themebg-dark flex w-full justify-between">
        <h1 className="text-themebg-dark dark:text-themebg-light font-sans font-bold text-3xl">
          Skills
        </h1>

        <button
          onClick={openModal}
          className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
        >
          +Add New
        </button>
        <AddNewSkillModal
          data={selected}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader />
          <tbody>
            {!skills.length && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center font-bold py-4 text-lg text-black dark:text-white"
                >
                  No Skills
                </td>
              </tr>
            )}
            {skills?.map((skill) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src={
                      skill.icon.includes("cloudinary")
                        ? skill.icon
                        : `${process.env.REACT_APP_API_URL}${skill.icon}`
                    }
                    alt=""
                    className="max-h-10 max-w-10"
                  />
                </th>
                <th class="px-6 py-4">{skill?.name}</th>
                <td class="px-6 py-4">
                  {skill?.officialLink && (
                    <a
                      href={skill?.officialLink}
                      target="__blank"
                      className="text-blue-600 underline"
                    >
                      Link
                    </a>
                  )}
                </td>
                <td class="px-6 py-4 text-start">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelected(skill);
                        openModal();
                      }}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(skill);
                      }}
                      class="font-medium text-red-600 dark:text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SideBarLayout>
  );
};

export default Skills;
