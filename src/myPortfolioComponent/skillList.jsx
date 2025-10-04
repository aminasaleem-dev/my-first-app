import React, { useState } from 'react';

const SkillList = () => {
    const [list, setList] = useState([
        "HTML", "CSS", "JavaScript", "Problem Solving",
        "Node.js", "React.js", "Bootstrap", "Tailwind CSS",
        "Responsive Design", "API Integration", "Context API"
    ]);

    return (
        <div className="flex flex-wrap gap-3 p-11 justify-center">
            {list.map((item, index) => (
                <div
                    key={index}
                    className="w-60 h-20 bg-white shadow-md  text-gray-800 pt-4 rounded-md
                     font-medium hover:bg-green-400 hover:text-white 
                     transition duration-300 cursor-pointer text-center"
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default SkillList;
