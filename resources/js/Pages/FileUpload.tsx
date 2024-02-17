import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const FileUpload = () => {
    const { setData, post } = useForm({
        file: [],
    });

    const handleFile = (e) => {
        setData('file', e.target.files);
    }

    return (
        <div className="relative ring-1 ring-gray-900/5 leading-none flex w-full items-center justify-center bg-grey-lighter">
            
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue  hover:shadow-outline">
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                    Select a file
                </span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFile}
                />
            </label>
        </div>
    );
};

export default FileUpload;
