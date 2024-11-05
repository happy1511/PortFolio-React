import axios from "axios";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SideBarLayout from "../layout/SideBarLayout";

const header = ["Section Name", "Skills", "Actions"];

// const AddNewSkillSectionModal = ({ data, isOpen, closeModal, allSkills }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [skillSection, setSkillSection] = useState({
//     name: "",
//     skills: [],
//   });

//   useEffect(() => {
//     setSkillSection(
//       data || {
//         name: "",
//         skills: [],
//       }
//     );
//   }, [data]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSkillSection((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSkillsChange = (e) => {
//     const options = e.target.options;
//     const selectedSkills = Array.from(options)
//       .filter((option) => option.selected)
//       .map((option) => option.value);
//     setSkillSection({ ...skillSection, skills: selectedSkills });
//   };

//   const handleSubmit = (e) => {
//     setIsLoading(true);
//     e.preventDefault();

//     const sectionData = {
//       name: skillSection.name,
//       skills: skillSection.skills,
//     };

//     data
//       ? axios
//           .put(
//             `${process.env.REACT_APP_API_URL}/admin/skills-section/${data._id}`,
//             sectionData
//           )
//           .then(() => {
//             toast.success("Skill section updated successfully");
//             closeModal();
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             toast.error("Failed to update skill section");
//             setIsLoading(false);
//           })
//       : axios
//           .post(
//             process.env.REACT_APP_API_URL + "/admin/skills-section",
//             sectionData
//           )
//           .then(() => {
//             toast.success("Skill section added successfully");
//             closeModal();
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             toast.error("Failed to add skill section");
//             setIsLoading(false);
//           });
//   };

//   return (
//     <>
//       <Modal show={isOpen} onClose={closeModal}>
//         <Modal.Header>Add New Skill Section</Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <Label htmlFor="name" value="Section Name" />
//               <TextInput
//                 id="name"
//                 name="name"
//                 value={skillSection.name}
//                 onChange={handleChange}
//                 placeholder="Enter section name"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <Label htmlFor="skills" value="Select Skills" />
//               <Select
//                 id="skills"
//                 name="skills"
//                 multiple
//                 value={skillSection.skills}
//                 onChange={handleSkillsChange}
//                 className="block w-full text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
//               >
//                 {allSkills.map((skill) => (
//                   <option key={skill._id} value={skill._id}>
//                     {skill.name}
//                   </option>
//                 ))}
//               </Select>
//             </div>

//             <div className="flex justify-end">
//               <Button
//                 disabled={isLoading}
//                 type="submit"
//                 gradientMonochrome="info"
//                 className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
//               >
//                 Save Skill Section
//               </Button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// const AddNewSkillSectionModal = ({ data, isOpen, closeModal, allSkills }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [skillSection, setSkillSection] = useState({
//     name: "",
//     skills: [],
//   });

//   useEffect(() => {
//     setSkillSection(
//       data || {
//         name: "",
//         skills: [],
//       }
//     );
//   }, [data]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSkillSection((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSkillsChange = (e) => {
//     const skillId = e.target.value;
//     console.log("🚀 ~ handleSkillsChange ~ skillId:", skillId);

//     // Check if skill is already selected
//     if (!skillSection.skills.some((skill) => skill._id === skillId)) {
//       // Find the selected skill object by its ID
//       const selectedSkill = allSkills.find((skill) => skill._id === skillId);
//       if (selectedSkill) {
//         setSkillSection((prev) => ({
//           ...prev,
//           skills: [...prev.skills, selectedSkill], // Add new skill to selected list
//         }));
//       }
//     }
//   };

//   const removeSkill = (skillId) => {
//     setSkillSection((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((skill) => skill._id !== skillId), // Remove skill from selected list
//     }));
//   };

//   const handleSubmit = (e) => {
//     setIsLoading(true);
//     e.preventDefault();

//     const sectionData = {
//       name: skillSection.name,
//       skills: skillSection.skills.map((skill) => skill._id), // Send only skill IDs
//     };

//     (data
//       ? axios.put(
//           `${process.env.REACT_APP_API_URL}/admin/skills-section/${data._id}`,
//           sectionData
//         )
//       : axios.post(
//           process.env.REACT_APP_API_URL + "/admin/skills-section",
//           sectionData
//         )
//     )
//       .then(() => {
//         toast.success(
//           `Skill section ${data ? "updated" : "added"} successfully`
//         );
//         closeModal();
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         toast.error(`Failed to ${data ? "update" : "add"} skill section`);
//         setIsLoading(false);
//       });
//   };

//   return (
//     <Modal show={isOpen} onClose={closeModal}>
//       <Modal.Header>{data ? "Edit" : "Add New"} Skill Section</Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <Label htmlFor="name" value="Section Name" />
//             <TextInput
//               id="name"
//               name="name"
//               value={skillSection.name}
//               onChange={handleChange}
//               placeholder="Enter section name"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <Label htmlFor="skills" value="Select Skills" />
//             <Select
//               id="skills"
//               name="skills"
//               onChange={handleSkillsChange}
//               className="block w-full text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
//             >
//               <option value="">Select skills</option>
//               {allSkills.map((skill) => (
//                 <option key={skill._id} value={skill._id}>
//                   {skill.name}
//                 </option>
//               ))}
//             </Select>
//           </div>

//           <div className="mb-4 flex flex-wrap gap-2">
//             {skillSection.skills.map((skill) => (
//               <div
//                 key={skill._id}
//                 className="bg-primary1-light text-white flex items-center px-2 py-1 rounded-md"
//               >
//                 <span className="mr-2">{skill.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => removeSkill(skill._id)}
//                   className="text-white rounded-full w-4 h-4 flex items-center justify-center"
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-end">
//             <Button
//               disabled={isLoading}
//               type="submit"
//               gradientMonochrome="info"
//               className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
//             >
//               {isLoading ? "Saving..." : "Save Skill Section"}
//             </Button>
//           </div>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

const AddNewSkillSectionModal = ({ data, isOpen, closeModal, allSkills }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown
  const [skillSection, setSkillSection] = useState({
    name: "",
    skills: [],
  });

  useEffect(() => {
    setSkillSection(
      data || {
        name: "",
        skills: [],
      }
    );
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillSection((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleSkillSelect = (skill) => {
    setSkillSection((prev) => {
      const isSkillSelected = prev.skills.some((s) => s._id === skill._id);
      return {
        ...prev,
        skills: isSkillSelected
          ? prev.skills.filter((s) => s._id !== skill._id) // Remove if already selected
          : [...prev.skills, skill], // Add if not selected
      };
    });
  };

  const removeSkill = (skill) => {
    setSkillSection((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s._id !== skill._id),
    }));
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const sectionData = {
      name: skillSection.name,
      skills: skillSection.skills,
    };

    const request = data
      ? axios.put(
          `${process.env.REACT_APP_API_URL}/admin/skills-section/${data._id}`,
          sectionData
        )
      : axios.post(
          `${process.env.REACT_APP_API_URL}/admin/skills-section`,
          sectionData
        );

    request
      .then(() => {
        toast.success(
          data
            ? "Skill section updated successfully"
            : "Skill section added successfully"
        );
        closeModal();
        setIsLoading(false);
      })
      .catch(() => {
        toast.error(
          data
            ? "Failed to update skill section"
            : "Failed to add skill section"
        );
        setIsLoading(false);
      });
  };

  return (
    <Modal show={isOpen} onClose={closeModal}>
      <Modal.Header>Add New Skill Section</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name" value="Section Name" />
            <TextInput
              id="name"
              name="name"
              value={skillSection.name}
              onChange={handleChange}
              placeholder="Enter section name"
              required
            />
          </div>

          <div className="relative mb-4">
            <Label value="Select Skills" />
            <Button
              onClick={toggleDropdown}
              type="button"
              className="text-black dark:text-white"
            >
              {dropdownOpen ? "Close" : "Open"} Skills List
            </Button>

            {dropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg p-2 w-full max-h-60 overflow-auto mt-1">
                {allSkills.map((skill) => (
                  <div key={skill._id} className="flex items-center gap-2 p-1">
                    <input
                      type="checkbox"
                      checked={skillSection.skills.some(
                        (s) => s._id === skill._id
                      )}
                      onChange={() => handleSkillSelect(skill)}
                      className="cursor-pointer"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {skillSection.skills.map((skill) => (
                <span
                  key={skill._id}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded flex items-center space-x-1"
                >
                  {skill.name}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-blue-800 font-bold ml-1"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              disabled={isLoading}
              type="submit"
              gradientMonochrome="info"
              className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
            >
              Save Skill Section
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
const TableHeader = () => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      {header.map((headerItem, index) => (
        <th key={index} scope="col" className="px-6 py-3">
          {headerItem}
        </th>
      ))}
    </tr>
  </thead>
);

const SkillsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [skillsSections, setSkillsSections] = useState([]);
  const [allSkills, setAllSkills] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  const getSkillsSections = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/admin/skills-section")
      .then((response) => setSkillsSections(response.data))
      .catch((error) => console.log(error));
  };

  const getAllSkills = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/admin/skills")
      .then((response) => setAllSkills(response.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = (section) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/admin/skills-section/${section._id}`
      )
      .then(() => {
        toast.success("Skill section deleted successfully");
        getSkillsSections();
      })
      .catch(() => toast.error("Error occurred while deleting section"));
  };

  useEffect(() => {
    getAllSkills();
    !isModalOpen && getSkillsSections();
  }, [isModalOpen]);

  return (
    <SideBarLayout>
      <div className="pb-8 bg-themebg-light dark:bg-themebg-dark flex w-full justify-between">
        <h1 className="text-themebg-dark dark:text-themebg-light font-sans font-bold text-3xl">
          Skills Sections
        </h1>

        <button
          onClick={openModal}
          className="bg-primary1-light font-bold text-themebg-light rounded-md px-4"
        >
          + Add New Section
        </button>
        <AddNewSkillSectionModal
          data={selected}
          isOpen={isModalOpen}
          closeModal={closeModal}
          allSkills={allSkills}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader />
          <tbody>
            {!skillsSections.length && (
              <tr>
                <td
                  colSpan={3}
                  className="text-center font-bold py-4 text-lg text-black dark:text-white"
                >
                  No skill sections available
                </td>
              </tr>
            )}
            {skillsSections.map((section) => (
              <tr
                key={section._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {section.name}
                </td>
                <td className="px-6 py-4">
                  {section.skills.map((skill) => (
                    <a
                      target="__blank"
                      href={skill.officialLink}
                      key={skill._id}
                      className="mr-2 text-blue-600 underline"
                    >
                      {skill.name}
                    </a>
                  ))}
                </td>
                <td className="px-6 py-4 text-start">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelected(section);
                        openModal();
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(section)}
                      className="font-medium text-red-600 dark:text-red-600 hover:underline"
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

export default SkillsSection;
