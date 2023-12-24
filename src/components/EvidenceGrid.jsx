// eslint-disable-next-line react/prop-types
export const EvidenceGrid = ({ type, evidences }) => {
  switch (type) {
    case 'pictures':
      return (
        <div>
          {evidences.map((i) => (
            <img src={i.url} alt="Image" key={i._id} />
          ))}
        </div>
      )
    case 'docs':
      return <div>Docs</div>
    case 'audio':
      return (
        <div>
          {evidences.map((i) => (
            <audio key={i?._id} controls>
              <source src={i?.url} />
            </audio>
          ))}
        </div>
      )
    default:
      return (
        <div>
          {evidences.map((i) => (
            <video controls width="600" key={i?._id}>
              <source src={i?.url} />
            </video>
          ))}
        </div>
      )
  }
}
