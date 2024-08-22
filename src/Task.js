import React, { useState } from "react";

export default function Task({ task, toggleCrossedOut, deleteTask, crossedOut }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => {
            deleteTask(task.id);
        }, 800);
    };

    return (
        <tr 
            key={task.id} 
            className={`bg-green-100 ${crossedOut ? 'line-through' : ''} ${isDeleting ? 'animate-fadeout' : 'animate-fade-in'}`}
        >            
            <td className="text-center px-1 py-2 text-orange-800">{task.index + 1}</td>
            <td className="text-left px-1 py-2 text-orange-800">{task.text}</td>
            <td className="text-left px-1 py-2 text-orange-800">
                {new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </td>
            <td className="text-center px-1 py-2">
                <button 
                    onClick={() => toggleCrossedOut(task.id)} 
                    className="text-red-600"
                    aria-label="Cross out task"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <button 
                    onClick={handleDelete} 
                    className="text-red-600 ml-2"
                    aria-label="Delete task"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}
