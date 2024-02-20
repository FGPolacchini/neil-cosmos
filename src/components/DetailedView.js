import React from 'react'

const DetailedView = ({ details, setDetails }) => {
  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.url} alt={details.title} />
      <p>{details.explanation}</p>
      <button onClick={() => setDetails(null)}>Back</button>
    </div>
  )
}

export default DetailedView