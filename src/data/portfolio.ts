
export const profile = {
  name: "Debosmita Mukhopadhyay",
  email: "debosmitamukhopadhyay03@gmail.com",
  github: "https://github.com/debosmita-12",
  linkedin: "https://linkedin.com/in/debosmita-mukhopadhyay-3b508a324",
};

export const education = [
  {
    institution: "SRM University AP",
    qualification: "B.Tech",
    field: "Computer Science and Engineering (AI & ML)",
    result: "CGPA 9.03 / 10 · 2024–2028",
  },
  {
    institution: "Sungkyunkwan University (SKKU)",
    qualification: "Semester Abroad Programme",
    field: "South Korea",
    result: "4th Semester",
  },
  {
    institution: "Class XII",
    qualification: "CBSE",
    field: "Higher Secondary Education",
    result: "94.8%",
  },
  {
    institution: "Class X",
    qualification: "ICSE",
    field: "Secondary Education",
    result: "89%",
  },
];

export const internships = [
  {
    organization: "India Space Lab",
    domain: "Remote Sensing and GIS",
  },
  {
    organization: "India Space Academy",
    domain: "Remote Sensing and GIS",
  },
  {
    organization: "SmartBridge",
    domain: "Artificial Intelligence and Machine Learning",
  },
];

export const cohorts = [
  {
    organization: "Infosys Springboard",
    program: "Empow(H)er",
  },
  {
    organization: "IIT Guwahati",
    program: "Product Management",
  },
  {
    organization: "IIT Guwahati",
    program: "Tokens to Transformers: A Course on GenAI x LLM Mastery",
  },
];

export const leadership = [
  {
    organization: "AIESEC Amravati",
    role: "Outgoing Global Volunteer (OGV)",
  },
  {
    organization: "AIESEC Amravati",
    role: "Business Development – Global Business (BD-GB)",
  },
];

export type Project = {
  number: string;
  name: string;
  category: string;
  status: string;
  subtitle: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "RailSamanvayAI",
    category: "AI / RAILWAY OPTIMIZATION",
    status: "COLLABORATIVE PROJECT",
    subtitle: "AI-Powered Automatic Block Planning for Railway Maintenance",
    description:
      "An AI-powered railway maintenance planning project combining predictive modelling and constraint-based optimization to support automatic block planning.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Scikit-learn",
      "Google OR-Tools",
      "Leaflet",
    ],
    link: "https://github.com/ggthedeveloper/RailSamanvayAI",
  },
  {
    number: "02",
    name: "Alumni Nexus",
    category: "FULL-STACK DEVELOPMENT",
    status: "PROJECT",
    subtitle: "College Alumni Network Platform",
    description:
      "A MERN-stack platform designed to connect students and alumni through a centralized college alumni network.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
    link: "https://github.com/debosmita-12/Alumni-Nexus",
  },
  {
    number: "03",
    name: "Health & Cure",
    category: "HEALTHCARE TECHNOLOGY",
    status: "PROJECT",
    subtitle: "Modern Healthcare Management Platform",
    description:
      "A healthcare platform with Patient, Doctor and Superadmin portals, supported by a Spring Boot backend and JDBC database integration.",
    stack: [
      "React",
      "Spring Boot",
      "Java",
      "JDBC",
      "Database Management",
    ],
    link: "https://github.com/debosmita-12/Health-Cure",
  },
  {
    number: "04",
    name: "ZentroMart AI",
    category: "VOICE AI / CUSTOMER SUPPORT",
    status: "CAPSTONE PROJECT",
    subtitle: "VoiceOps 2026 · AI-Powered Customer Support",
    description:
      "An AI-powered voice customer support assistant developed as part of the IIT Guwahati and Gnani.ai capstone programme.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Gnani.ai",
    ],
    link: "https://github.com/debosmita-12/ZentroMart_AI_Voice_Assistant",
  },
  {
    number: "05",
    name: "Retail Predictive Analytics",
    category: "DATA SCIENCE / R",
    status: "PROJECT",
    subtitle: "Next-60-Day Customer Churn Prediction",
    description:
      "A retail predictive analytics pipeline using the Olist Brazilian E-Commerce dataset to model customer churn over the next 60 days.",
    stack: [
      "R",
      "Data Analysis",
      "Predictive Modelling",
      "Machine Learning",
    ],
  },
  {
    number: "06",
    name: "ARGO Deep Learning Research",
    category: "BIOMEDICAL AI",
    status: "UNDER DEVELOPMENT",
    subtitle: "Post-Ischaemic Ventricular Tachycardia Classification",
    description:
      "A deep learning research project exploring the classification of biomedical electrogram signals, including traditional and federated learning approaches.",
    stack: [
      "Python",
      "Deep Learning",
      "ANN",
      "CNN",
      "RNN",
      "LSTM",
      "Federated Learning",
    ],
  },
  {
    number: "07",
    name: "Image Dehazing Using Diffusion Models",
    category: "COMPUTER VISION",
    status: "EARLY DEVELOPMENT",
    subtitle: "Diffusion-Based Image Restoration",
    description:
      "An ongoing computer vision exploration into the use of diffusion models for image dehazing and restoration.",
    stack: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Diffusion Models",
    ],
  },
];

export const research = [
  {
    name: "Biomedical Signal Classification using Deep Learning",
    field: "Biomedical AI",
    description:
      "Exploring deep learning and federated learning approaches for post-ischaemic ventricular tachycardia electrogram classification using the ARGO dataset.",
    status: "UNDER DEVELOPMENT · LATER STAGE",
  },
  {
    name: "Image Dehazing using Diffusion Models",
    field: "Computer Vision",
    description:
      "Investigating diffusion-based approaches for image dehazing and image restoration.",
    status: "EARLY-STAGE RESEARCH",
  },
];
