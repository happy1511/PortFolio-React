import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import SideBarLayout from "../layout/SideBarLayout";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    skills: 0,
    skillSections: 0,
    projects: 0,
  });
  const [resumePath, setResumePath] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(process.env.REACT_APP_API_URL + "/admin/dashboard")
        .then((response) => {
          const { counts, resumePath, urls } = response.data;
          setCounts(counts);
          setResumePath(resumePath);
          setGithubURL(urls.github_url);
          setLinkedinURL(urls.linkedin_url);
        })
        .catch((error) => {
          console.error("Error fetching dashboard data:", error);
        });
    };
    fetchData();
  }, []);

  const handleURLChange = async (platform, url) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/urls/${platform}`,
        { url }
      );
      platform === "github" ? setGithubURL(url) : setLinkedinURL(url);
      alert(`${platform} URL updated successfully`);
    } catch (error) {
      console.error("Error updating URL", error);
    }
  };

  return (
    <SideBarLayout>
      <div className="p-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-500 text-white rounded-md shadow-md">
            <h2>Skills</h2>
            <p>{counts.skills}</p>
          </div>
          <div className="p-4 bg-yellow-500 text-white rounded-md shadow-md">
            <h2>Skill Sections</h2>
            <p>{counts.skillSections}</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-md shadow-md">
            <h2>Projects</h2>
            <p>{counts.projects}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Resume Preview</h2>
            {resumePath ? (
              <iframe
                src={resumePath}
                className="w-full h-[500px] border rounded-md"
                title="Resume Preview"
              ></iframe>
            ) : (
              <p>No resume available</p>
            )}
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Urls</h2>
            <div>
              <Label htmlFor="github" className="block text-sm font-medium">
                GitHub URL
              </Label>
              <TextInput
                type="text"
                value={githubURL}
                onChange={(e) => setGithubURL(e.target.value)}
                placeholder="Enter GitHub URL"
              />
              <button
                onClick={() => handleURLChange("github", githubURL)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Update GitHub URL
              </button>
            </div>
            <div>
              <Label
                htmlFor="linkedinURL"
                className="block text-sm font-medium"
              >
                LinkedIn URL
              </Label>
              <TextInput
                type="text"
                value={linkedinURL}
                onChange={(e) => setLinkedinURL(e.target.value)}
                placeholder="Enter LinkedIn URL"
              />
              <button
                onClick={() => handleURLChange("linkedin", linkedinURL)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Update LinkedIn URL
              </button>
            </div>
          </div>
        </div>
      </div>
    </SideBarLayout>
  );
};

export default Dashboard;
