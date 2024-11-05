import axios from "axios";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SideBarLayout from "../layout/SideBarLayout";

const header = [
  "Name",
  "Description",
  "Github",
  "Website",
  "Skills Used",
  "Actions",
];

const AddNewProjectModal = ({ data, isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({
    name: "",
    description: "",
    skillsUsed: [""],
    githubLink: "",
    websiteLink: "",
    video: null,
  });

  const handleFile = async () => {
    if (data?.videoPath) {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + data.videoPath
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const fileName = data?.videoPath.split("/");
        const file = new File([blob], fileName[fileName.length - 1], {
          type: "video/mp4",
        });

        setProject((prev) => ({
          ...prev,
          video: file,
        }));
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    }
  };

  useEffect(() => {
    setProject(
      data
        ? {
            ...data,
            skillsUsed: data?.skillsUsed,
          }
        : {
            name: "",
            description: "",
            skillsUsed: [""],
            githubLink: "",
            websiteLink: "",
            video: null,
          }
    );
    handleFile();
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skillsUsed") {
      const updatedSkills = [...project.skillsUsed];
      updatedSkills[e.target.dataset.index] = value;
      setProject({ ...project, skillsUsed: updatedSkills });
    } else {
      setProject({ ...project, [name]: value });
    }
  };

  const addSkillField = () => {
    setProject((prev) => ({
      ...prev,
      skillsUsed: [...prev.skillsUsed, ""],
    }));
  };

  const removeSkillField = (index) => {
    const updatedSkills = project.skillsUsed.filter((_, i) => i !== index);
    setProject({ ...project, skillsUsed: updatedSkills });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("skillsUsed", JSON.stringify(project.skillsUsed));
    formData.append("githubLink", project.githubLink);
    formData.append("websiteLink", project.websiteLink);
    project.video && formData.append("video", project.video);

    data
      ? axios
          .put(
            `${process.env.REACT_APP_API_URL}/admin/projects/${data._id}`,
            formData
          )
          .then((data) => {
            toast.success("Project updated successfully");
            closeModal();
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            toast.error("Failed to update project");
            setIsLoading(false);
          })
      : axios
          .post(process.env.REACT_APP_API_URL + "/admin/projects", formData)
          .then((data) => {
            console.log("Project added successfully:", data);
            toast.success("Project added successfully");
            closeModal();
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            toast.error("Failed to add project");
            setIsLoading(false);
          });
  };

  return (
    <>
      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>Add New Project</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name" value="Project Name" />
              <TextInput
                id="name"
                name="name"
                value={project.name}
                onChange={handleChange}
                placeholder="Enter project name"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="description" value="Description" />
              <TextInput
                id="description"
                name="description"
                value={project.description}
                onChange={handleChange}
                placeholder="Enter project description"
                required
              />
            </div>

            <div className="mb-4">
              <Label value="Skills Used" />
              {project.skillsUsed.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <TextInput
                    id={`skillsUsed-${index}`}
                    name="skillsUsed"
                    data-index={index} // Pass index to handleChange
                    value={skill}
                    onChange={handleChange}
                    placeholder="Enter a skill"
                    required
                    className="mr-2"
                  />
                  <Button
                    type="button"
                    color="failure"
                    onClick={() => removeSkillField(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={addSkillField}
                className="bg-primary1-light font-bold text-themebg-light rounded-md"
              >
                Add Skill
              </Button>
            </div>

            <div className="mb-4">
              <Label htmlFor="githubLink" value="GitHub Link" />
              <TextInput
                id="githubLink"
                name="githubLink"
                value={project.githubLink}
                onChange={handleChange}
                placeholder="Enter GitHub link"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="websiteLink" value="Website Link" />
              <TextInput
                id="websiteLink"
                name="websiteLink"
                value={project.websiteLink}
                onChange={handleChange}
                placeholder="Enter website link"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="video" value="Upload Video" />
              <input
                id="video"
                name="video"
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setProject((prevState) => ({
                    ...prevState,
                    video: file,
                  }));
                }}
                className="block w-full text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              />
              {project.video && (
                <video
                  width="200"
                  height="150"
                  controls
                  src={URL.createObjectURL(project.video)}
                  className="object-cover mt-2"
                />
              )}
            </div>
            <div className="flex justify-end">
              <Button
                disabled={isLoading}
                type="submit"
                gradientMonochrome="info"
                className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
              >
                Save Project
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

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [projects, setProjects] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  const getProjects = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/admin/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = async (project) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/projects/${project._id}`)
      .then((response) => {
        toast.success("Project deleted successfully");
        getProjects();
      })
      .catch((error) => toast.error("some error occured"));
  };

  useEffect(() => {
    !isModalOpen && getProjects();
  }, [isModalOpen]);

  return (
    <SideBarLayout>
      <div className="pb-8 bg-themebg-light dark:bg-themebg-dark flex w-full justify-between">
        <h1 className="text-themebg-dark dark:text-themebg-light font-sans font-bold text-3xl">
          Projects
        </h1>

        <button
          onClick={openModal}
          className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
        >
          +Add New
        </button>
        <AddNewProjectModal
          data={selected}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader />
          <tbody>
            {!projects.length && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center font-bold py-4 text-lg text-black dark:text-white"
                >
                  No Projects
                </td>
              </tr>
            )}
            {projects?.map((project) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {project?.name}
                </th>
                <td class="px-6 py-4">{project?.description}</td>
                <td class="px-6 py-4">
                  {project?.githubLink && (
                    <a
                      href={project?.githubLink}
                      target="__blank"
                      className="text-blue-600 underline"
                    >
                      Link
                    </a>
                  )}
                </td>
                <td class="px-6 py-4">
                  {project?.websiteLink && (
                    <a
                      href={project?.websiteLink}
                      target="__blank"
                      className="text-blue-600 underline"
                    >
                      Link
                    </a>
                  )}
                </td>
                <td class="px-6 py-4">{project?.skillsUsed.join(", ")}</td>
                <td class="px-6 py-4 text-start">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelected(project);
                        openModal();
                      }}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(project);
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

export default Projects;
