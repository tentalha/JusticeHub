import { deleteEvidence } from 'features'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line react/prop-types
export const EvidenceGrid = ({ type, evidences }) => {
  const dispatch = useDispatch()

  function handleEvidenceDelete(evdId) {
    dispatch(deleteEvidence({ id: evdId }))
  }

  switch (type) {
    case 'pictures':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evidences.map((evidence, index) => (
            <div key={index} className="relative mb-8">
              <img
                src={evidence.url}
                alt="Evidence"
                className="w-full h-72 rounded-lg shadow-md cursor-pointer transition transform hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <MdOutlineDelete
                  color="red"
                  size={24}
                  className="cursor-pointer"
                  onClick={() => handleEvidenceDelete(evidence._id)}
                />
              </div>
            </div>
          ))}
        </div>
      )
    case 'docs':
      return (
        <div className="flex flex-col items-center ">
          {evidences?.map((i, ind) => {
            return (
              <div key={ind} className="w-auto">
                <iframe
                  src={i?.url}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
                <MdOutlineDelete
                  color="red"
                  size={24}
                  className="cursor-pointer"
                  onClick={() => handleEvidenceDelete(i._id)}
                />
              </div>
            )
          })}
        </div>
      )
    case 'audio':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evidences.map((i, ind) => (
            <div key={ind} className="relative mb-8">
              <audio
                key={i?._id}
                controls
                className="w-full h-52 rounded-lg shadow-md cursor-pointer transition transform hover:scale-105"
              >
                <source src={i?.url} />
              </audio>
              <MdOutlineDelete
                color="red"
                size={24}
                className="absolute top-2 right-2"
                onClick={() => handleEvidenceDelete(i._id)}
              />
            </div>
          ))}
        </div>
      )
    default:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evidences.map((i, ind) => (
            <div key={ind} className="relative mb-8">
              <video
                controls
                width="600"
                key={i?._id}
                className="w-full h-72 rounded-lg shadow-md cursor-pointer transition transform hover:scale-105"
              >
                <source src={i?.url} />
              </video>
              <MdOutlineDelete
                color="red"
                size={24}
                className=" absolute top-2 right-2"
                onClick={() => handleEvidenceDelete(i._id)}
              />
            </div>
          ))}
        </div>
      )
  }
}
