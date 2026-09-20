import CHESS from "../assets/chess-set.png";
import PANCAKE from "../assets/pancake.png";
import DATASET from "../assets/dataset.png";

/**
 * Project cards. Same shape as `experience` -- see src/data/experience.js for
 * the field-by-field notes and the TODO on filling in detail copy.
 */
export const projects = [
  {
    id: "text2cadquery",
    title: "Text2CADQuery Dataset",
    role: "Hugging Face",
    description: "A dataset of text prompts to CadQuery scripts for LLMs",
    imageUrl: DATASET,
    altText: "Download Cloud",
    accentColor: "#000000",
    detail: {
      summary: [],
      highlights: [],
      stack: ["Hugging Face", "Python", "CadQuery"],
      demo: null,
      links: [
        {
          label: "View dataset on Hugging Face",
          href: "https://huggingface.co/datasets/Edvvurd/Text2CADQuery",
        },
      ],
    },
  },
  {
    id: "chess-trainer",
    title: "Chess Trainer (LLM)",
    role: "Python",
    description: "A Qwen3-8B Model trained using LLoRa to coach chess players.",
    imageUrl: CHESS,
    altText: "Chess Piece",
    accentColor: "#000000",
    detail: {
      summary: [],
      highlights: [],
      stack: ["Python", "Qwen3-8B", "LoRA"],
      demo: null,
      links: [
        {
          label: "View source on GitHub",
          href: "https://github.com/aku7703/chess-tutor-agent",
        },
      ],
    },
  },
  {
    id: "pancake-overflow",
    title: "Pancake Overflow",
    role: "TS, Express, MongoDB, React, Node.js, Cypress",
    description:
      "A Q&A platform for developers who are interested in cooking.",
    imageUrl: PANCAKE,
    altText: "Pancake Stack",
    accentColor: "#b68e7c", // muted from #C4886B
    detail: {
      summary: [],
      highlights: [],
      stack: [
        "TypeScript",
        "Express",
        "MongoDB",
        "React",
        "Node.js",
        "Cypress",
      ],
      demo: null,
      links: [
        {
          label: "View source on GitHub",
          href: "https://github.com/neu-cs4530/fall25-project-fall25-project-group-516",
        },
      ],
    },
  },
];
