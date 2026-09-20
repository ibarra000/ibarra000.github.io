import NER from "../assets/ner-logo.png";
import BOYD from "../assets/boyd-logo.webp";
import NU from "../assets/nu-logo.webp";
import ATKORE from "../assets/atkore-logo.png";
import VEOLIA from "../assets/veolia-logo.png";
import SIEMENS from "../assets/siemens-logo.png"


export const experience = [
    {
    id: "siemens",
    title: "Siemens",
    role: "Product/Mechanical Engineer",
    description:
      "Creo, SAP, Sheet Metal, Design for Manufacuturing",
    imageUrl: SIEMENS,
    altText: "Siemens Logo",
    accentColor: "#009999",
    detail: {
      summary: [],
      highlights: [],
      stack: [
        "Creo",
        "SAP",
        "Sheet Metal",
        "Design for Manufacturing",
      ],
      demo:null,
      links: [
        {
          label: "Siemens",
          href: "https://www.siemens.com/en-us/",
        },
      ],
    },
  },
  {
    id: "veolia",
    title: "Veolia",
    role: "Project Engineer",
    description:
      "AutoCAD, Electrical Schematics, Project Management, Equipment Sales",
    imageUrl: VEOLIA,
    altText: "Veolia North America Logo",
    accentColor: " #E71B24",
    detail: {
      summary: [""],
      highlights: [],
      stack: [
        "AutoCAD",
        "Electrical Schematics",
        "Project Management",
        "Equipment Sales",
      ],
      demo: null,
      links: [
        {
          label: "Veolia North America",
          href: "https://www.veolianorthamerica.com/",
        },
      ],
    },
  },
  {
    id: "atkore",
    title: "Atkore",
    role: "Manufacturing Engineer",
    description:
      "6Sigma, LEAN, Autodesk Inventor, AutoCAD, Management, Leadership",
    imageUrl: ATKORE,
    altText: "Atkore International Logo",
    accentColor: "#67a263",
    detail: {
      summary: ["During my time at Atkore, I managed the installation of new production equipment for PVC conduit, lead process improvements, and worked on interal documentation."],
      highlights: [],
      stack: [
        "6Sigma",
        "LEAN",
        "Autodesk Inventor",
        "AutoCAD",
        "Management",
        "Leadership",
      ],
      demo: null,
      links: [{ label: "Atkore International", href: "https://www.atkore.com/" }],
    },
  },
  {
    id: "boyd",
    title: "Boyd Corporation (now Eaton and Boyd Thermal)",
    role: "Component Engineer",
    description: "Python, MySQL/SQLite, SolidWorks, Vacuum-Brazing",
    imageUrl: BOYD,
    altText: "Boyd Corporation Logo",
    accentColor: "#3a6793",
    detail: {
      summary: ["Here I focused on quality and production of vacuum-brazed heat-exchangers. At my time here I also build a tool for our team called Furnace Insight!"],
      highlights: [],
      stack: ["Python", "MySQL/SQLite", "SolidWorks", "Vacuum-Brazing"],
      demo: {
        url: "https://cap.so/embed/sbs7je8y6mbs36f",
        summary: "",
        aspect: "16 / 9",
      },
      links: [{ label: "Boyd Corporation", href: "https://www.boydcorp.com/" }],
    },
  },
  {
    id: "ner",
    title: "NU Electric Racing",
    role: "Developer",
    description: "JavaScript, Node.js, React, Prisma, Git",
    imageUrl: NER,
    altText: "Northeastern Electric Racing Logo",
    accentColor: "#000000",
    detail: {
      summary: [],
      highlights: [],
      stack: ["JavaScript", "Node.js", "React", "Prisma", "Git"],
      demo: null,
      links: [
        {
          label: "Northeastern Electric Racing",
          href: "https://electricracing.northeastern.edu/",
        },
      ],
    },
  },
  {
    id: "northeastern-coe",
    title: "Northeastern COE",
    role: "IT Technician",
    description:
      "PowerShell, CMD, OS Imaging, Net Diagnostics, System Config",
    imageUrl: NU,
    altText: "Northeastern Logo",
    accentColor: "#C8102E",
    detail: {
      summary: [],
      highlights: [],
      stack: [
        "PowerShell",
        "CMD",
        "OS Imaging",
        "Net Diagnostics",
        "System Config",
      ],
      demo: null,
      links: [
        {
          label: "Northeastern College of Engineering",
          href: "https://coe.northeastern.edu/computer/",
        },
      ],
    },
  },
];
