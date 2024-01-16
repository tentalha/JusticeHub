import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'components'
import { useNavigate, useParams } from 'react-router-dom'
import { getEvidenceWithFIRId } from 'features'
import { CreateEvidence } from './CreateEvidence'

export const EvidenceFolders = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { firId } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleEvidenceTypeClick = (type, extensions) => {
    navigate('/evidences', {
      state: {
        extensions,
        type,
      },
    })
  }

  useEffect(() => {
    dispatch(getEvidenceWithFIRId(firId))
  }, [dispatch, firId])

  return (
    <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      <div className={`${isModalOpen ? 'blur-sm' : ''}`}>
        <div
          className={`mt-0 flex flex-col sm:flex-row justify-between items-center`}
        >
          <h1 className="xl:ml-20 sm:ml-0 max-w-md text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
            Investigator Dashboard
          </h1>

          <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
            <p className="font-custom-blue font-semibold font-custom ">
            <Link to="/faqs">FAQ</Link> | <Link to="/contactus">Contact Us</Link>
            </p>

            <h1 className="max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 mx-auto ">
              {user?.name}
            </h1>
            <div className="mt-1">
              <Icon src="/icons/account.png" />
            </div>
          </div>
        </div>
        <hr className="h-2 mt-4 -ml-5 bg-custom-blue"></hr>
        <br />
        <h1
          id="tagline"
          className="  mt-2 bg-gray-100 hover:text-white hover:bg-black py-1 rounded-2xl  sm:ml-0 sm:mr-0 text-sm px-2 sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out"
        >
          Hey Investigator, On this page you will find multiple folders, each
          folders has its own type of evidence. Different folders are present
          for files, pictures, audio and video. You can also upload new evidence
          on this page.
        </h1>
        <br></br>
        <div className="flex sm:flex-row justify-between items-center">
          <div className="flex justify-end mb-4 mr-2 xl:px-20">
            <h1
              id="tagline"
              className="p-5 mt-2 text-center  sm:ml-0 text-xl sm:text-2xl lg:text-4xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500"
            >
              Evidences
            </h1>
          </div>
          <div className="flex justify-self-end mt-2 xl:mr-40 mb-4 sm:mr-0 sm:mt-0">
            <button
              onClick={() => {
                setIsModalOpen(true)
              }}
              className="bg-custom-blue hover:bg-blue-600 ml-20 text-white text-xl font-bold py-3 px-20 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out"
              type="button"
            >
              Create New
            </button>
          </div>
        </div>
        <br></br>
        <div className=" w-auto h-96 ml-20">
          <div className="flex">
            <div>
              <img
                className="h-56 w-56"
                src="/icons/folder.png"
                onClick={() =>
                  handleEvidenceTypeClick('docs', [('pdf', 'doc')])
                }
              />
              <h1 className=" text-xl font-custom text-black ml-20">Files</h1>
            </div>
            <div className="ml-20">
              <img
                className="h-56 w-56"
                src="/icons/folder.png"
                onClick={() => handleEvidenceTypeClick('audio', ['mp3', 'wav'])}
              />
              <h1 className=" text-xl font-custom text-black ml-20">Audios</h1>
            </div>
            <div className="ml-20">
              <img
                className="h-56 w-56"
                src="/icons/folder.png"
                onClick={() =>
                  handleEvidenceTypeClick('video', [
                    'mp4',
                    'mkv',
                    'mov',
                    'webm',
                    'mpeg',
                  ])
                }
              />
              <h1 className=" text-xl font-custom text-black ml-20">Videos</h1>
            </div>
            <div className="ml-20">
              <img
                className="h-56 w-56"
                src="/icons/folder.png"
                onClick={() =>
                  handleEvidenceTypeClick('pictures', [
                    'png',
                    'jpg',
                    'jpeg',
                    'svg',
                    'webp',
                  ])
                }
              />
              <h1 className=" text-xl font-custom text-black ml-20">
                Pictures
              </h1>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <CreateEvidence
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          firId={firId}
        />
      ) : null}
    </div>
  )
}
