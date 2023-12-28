import { deleteEvidence } from 'features'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line react/prop-types
export const EvidenceGrid = ({ type, evidences }) => {
  const dispatch = useDispatch()
  const handleEvidenceDelete = (evdId) => {
    dispatch(deleteEvidence({ id: evdId }))
  }

  switch (type) {
    case 'pictures':
      return (
        <div>
          {evidences.map((i, ind) => (
            <div key={ind} className="flex justify-center items-center">
              <img src={i.url} alt="Image" key={i._id} className="w-[800px]" />
              <MdOutlineDelete
                color="red"
                size={24}
                className="cursor-pointer"
                onClick={() => handleEvidenceDelete(i._id)}
              />
            </div>
          ))}
        </div>
      )
    case 'docs':
      return (
        <div className="flex justify-center items-center">
          Docs
          <MdOutlineDelete color="red" size={24} className="cursor-pointer" />
        </div>
      )
    case 'audio':
      return (
        <div>
          {evidences.map((i, ind) => (
            <div key={ind} className="flex  items-center gap-10">
              <audio key={i?._id} controls>
                <source src={i?.url} />
              </audio>
              <MdOutlineDelete
                color="red"
                size={24}
                className="cursor-pointer"
                onClick={() => handleEvidenceDelete(i._id)}
              />
            </div>
          ))}
        </div>
      )
    default:
      return (
        <div>
          {evidences.map((i, ind) => (
            <div key={ind} className="flex justify-center items-center">
              <video controls width="600" key={i?._id}>
                <source src={i?.url} />
              </video>
              <MdOutlineDelete
                color="red"
                size={24}
                className="cursor-pointer"
                onClick={() => handleEvidenceDelete(i._id)}
              />
            </div>
          ))}
        </div>
      )
  }
}
