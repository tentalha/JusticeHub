import { Loader } from 'components'
import { uploadNewEvidence } from 'features'
import { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleSuccess } from 'features/slices/EvidenceSlice'
// eslint-disable-next-line react/prop-types
export const CreateEvidence = ({ isOpen, onClose, firId }) => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const dispatch = useDispatch()
  const { loading, success } = useSelector((state) => state.evidence)

  useEffect(() => {
    if (success) {
      onClose()
    }
  }, [success, onClose])

  useEffect(() => {
    if (success) {
      dispatch(toggleSuccess(false))
    }
  }, [])

  const handleFileChange = (e) => {
    const files = e.target.files
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const unselectFile = (fileIndex) => {
    setUploadedFiles((prevState) =>
      prevState.filter((_, index) => index !== fileIndex),
    )
  }

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow-2xl">
          <button
            onClick={() => onClose()}
            type="button"
            className="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-custom text-gray-900">
              Upload Evidence
            </h3>
            <a className="font-custom text-sm">
              Remember, You can only upload pdfs, docs, audios, and videos as
              evidences.
            </a>
            <input type="file" multiple onChange={handleFileChange} />
            {/* Display the names of uploaded files */}
            {uploadedFiles.length > 0 && (
              <div>
                <h4 className="font-semibold">Uploaded Files:</h4>
                <ul>
                  {uploadedFiles.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-center items-center"
                    >
                      {index + 1}: {file.name}
                      <AiFillDelete
                        color="red"
                        className="mx-6 cursor-pointer"
                        size={26}
                        onClick={() => unselectFile(index)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <br />
            <button
              className="bg-blue-600 py-3 w-full text-white rounded mt-3 disabled:bg-gray-600 flex justify-center items-center"
              disabled={!uploadedFiles.length}
              onClick={() =>
                dispatch(uploadNewEvidence({ firId, files: uploadedFiles }))
              }
            >
              {loading ? <Loader width={10} height={10} /> : 'Upload'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
