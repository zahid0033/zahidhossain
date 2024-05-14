const skillsData = [
  {
    skillName: "React",
    percentage: "80%",
  },
  {
    skillName: "Node",
    percentage: "70%",
  },
  {
    skillName: "Laravel",
    percentage: "60%",
  },
  {
    skillName: "Docker",
    percentage: "50%",
  },
  {
    skillName: "HTML",
    percentage: "95%",
  },
  {
    skillName: "CSS",
    percentage: "90%",
  },

  {
    skillName: "React",
    percentage: "80%",
  },
];

const croTools = [
  {
    title: "Abtasty",
    logo: "https://www.abtasty.com/wp-content/uploads/2024/01/cropped-logo-abtasty-green.png",
  },
  {
    title: "Qubit",
    logo: "https://www.coveo.com/public/img/logos/coveo/coveo_logo_en.svg",
  },
  {
    title: "VWO",
    logo: "https://www.coveo.com/public/img/logos/coveo/coveo_logo_en.svg",
  },
  {
    title: "Abtasty",
    logo: "",
  },
  {
    title: "Abtasty",
    logo: "",
  },
  {
    title: "Abtasty",
    logo: "",
  },
  {
    title: "Abtasty",
    logo: "",
  },
];

function getAllskills() {
  return skillsData;
}

function getCroTools() {
  return croTools;
}

export { getAllskills, getCroTools };
