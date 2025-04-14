import { v4 } from "uuid";
export const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

export const TASKS = [
  {
    text: "Buy rice",
    category: "Food",
    id: v4()
  },
  {
    text: "Save a tenner",
    category: "Money",
    id: v4()
  },
  {
    text: "Build a todo app",
    category: "Code",
    id: v4()
  },
  {
    text: "Build todo API",
    category: "Code",
    id: v4()
  },
  {
    text: "Get an ISA",
    category: "Money",
    id: v4()
  },
  {
    text: "Cook rice",
    category: "Food",
    id: v4()
  },
  {
    text: "Tidy house",
    category: "Misc",
    id: v4()
  },
];
