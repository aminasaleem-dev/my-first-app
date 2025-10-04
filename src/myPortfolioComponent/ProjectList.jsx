import React from 'react'

const Projects = [
  {
    Name: "E-commerce App",
    Description: "Developed a responsive E-Commerce web application using React.js and Tailwind CSS. Implemented React Router for navigation, and used Context API for global state management (cart & authentication). Integrated external APIs for dynamic product data.",
  },
  {
    Name: "Record Management System",
    Description: "Developed a CRUD (Create, Read, Update, Delete) application using React.js and Tailwind CSS. Implemented dynamic state management for adding, editing, and deleting records with a fully responsive design.",
  },
  {
    Name: "Expense Tracker Application",
    Description: "Developed a responsive Expense Tracker application using React.js and Tailwind CSS. Implemented Context API for state management, handled income/expense tracking, and displayed real-time balance updates with interactive UI.",
  },
  {
    Name: "Task Manager Application",
    Description: "Built a Todo application with full CRUD functionality (add, edit, delete, mark complete) using React.js and Tailwind CSS.",
  }
]
const ProjectList = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {Projects.map((item, index) => (
        <li
          key={index}
          className="border rounded-lg shadow bg-white p-4 h-full flex flex-col"
        >
          <h1 className="font-bold text-lg text-green-800 mb-2">{item.Name}</h1>
          <p className="text-gray-700">{item.Description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;

