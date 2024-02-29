import React, { ChangeEvent, useEffect } from "react";
import { useForm, router } from "@inertiajs/react";

const FileUpload = () => {
    const { data, setData, post } = useForm({
        file: null,
    });

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            setData("file", selectedFile);
            router.post(route("file.upload"), { file: selectedFile });
        }
    };
    const uploadHandle = (e) => {
        e.preventDefault();
        post(route("file.upload"));
    };

    return (
        <div className="flex flex-col items-center space-y-7">
            <div className="relative max-w-7xl mx-auto mt-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
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
            </div>
            <div>
                {/* <button
                    onClick={uploadHandle}
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Convert
                </button> */}
            </div>
        </div>
    );
};

export default FileUpload;
