import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task"; 

export default function Note() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([
        { id: uuidv4(), text: "Learn Javascript" },
        { id: uuidv4(), text: "Learn NodeJS" },
        { id: uuidv4(), text: "Learn SQL" }
    ]);
    const [crossedOutTasks, setCrossedOutTasks] = useState([]); 

    function submit() {
        if (!task.trim()) {
            alert("Write a Task");
            return;
        }
        setTasks([...tasks, { id: uuidv4(), text: task.trim() }]);
        setTask('');
    };

    function toggleCrossedOut(id) {
        setCrossedOutTasks(crossedOutTasks.includes(id) 
            ? crossedOutTasks.filter(crossedOutId => crossedOutId !== id) 
            : [...crossedOutTasks, id]
        );
    };

    function deleteTask(id) {
        setTasks(tasks.filter(t => t.id !== id));
        setCrossedOutTasks(crossedOutTasks.filter(crossedOutId => crossedOutId !== id));
    };

    return (
        <div className="container w-full max-w-3xl min-h-2xl">
            <div className="flex justify-center">
                <input 
                    className="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300"
                    value={task} 
                    onChange={({ target: { value } }) => setTask(value)}
                    placeholder="Write a Task" 
                    aria-label="Write a Task"
                />
                <button 
                    type="button" 
                    onClick={submit} 
                    className="text-xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full"
                    aria-label="Add Task"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>  
                </button>
            </div>
            <div className="bg-gray-600 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
                <h1 className="text-left mb-4 font-bold text-xl italic leading-none text-gray-200">Todo's</h1>
                <div className="overflow-y-auto">
                    <table className="w-full text-xl">
                        <thead>
                            <tr>
                                <th className="text-center px-1 py-2 bg-orange-600 text-white rounded-tl-xl">#</th>
                                <th className="text-left px-1 py-2 bg-orange-600 text-white">Details</th>
                                <th className="text-left px-1 py-2 bg-orange-600 text-white">Created Date</th>
                                <th className="text-center px-1 py-2 bg-orange-600 text-white rounded-tr-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((t, index) => (
                                <Task 
                                    key={t.id} 
                                    task={{ ...t, index }} 
                                    toggleCrossedOut={toggleCrossedOut} 
                                    deleteTask={deleteTask} 
                                    crossedOut={crossedOutTasks.includes(t.id)} 
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
