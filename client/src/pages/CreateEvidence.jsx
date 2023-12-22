import { approveFir, getAllInvestigators } from "features";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import { toast } from "react-toastify";

export const CreateEvidence = ({ isOpen, onClose, id }) => {

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (e) => {
      const files = e.target.files;
       setUploadedFiles(Array.from(files));
    };
  
    return (
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => onClose()}
              type="button"
              class="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
              <h3 class="mb-5 text-lg font-custom text-gray-900">
                Upload Evidence
              </h3>
              <a className="font-custom text-sm">
                Remember, You can only upload pdfs, docs, audios, and videos as
                evidences.
              </a>
              <input
                type="file"
                name="file1"
                multiple
                onChange={handleFileChange}
              />
              {/* Display the names of uploaded files */}
              {uploadedFiles.length > 0 && (
                <div>
                  <h4>Uploaded Files:</h4>
                  <ul>
                    {uploadedFiles.map((file, index) => (
                      <li key={index}> {index+1}: {file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  