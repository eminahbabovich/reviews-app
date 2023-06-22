import { useState } from 'react'
import reviews from './data'

import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const App = () => {
  const [person, setPerson] = useState(reviews[0])
  const { id, name, job, image, text } = person

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * reviews.length)
    const index = reviews.indexOf(person)
    if (randomNum === 4) {
      randomNum = 3
    }
    if (randomNum !== index) {
      setPerson(reviews[randomNum])
    } else if (randomNum === 3) {
      setPerson(reviews[randomNum - 1])
    } else {
      setPerson(reviews[randomNum + 1])
    }
  }

  const prev = () => {
    const index = reviews.indexOf(person)
    if (index === 0) {
      setPerson(reviews[reviews.length - 1])
    } else {
      setPerson(reviews[index - 1])
    }
  }

  const next = () => {
    const index = reviews.indexOf(person)
    if (index === reviews.length - 1) {
      setPerson(reviews[0])
    } else {
      setPerson(reviews[index + 1])
    }
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <div className="quote-icon">{<FaQuoteRight />}</div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  )
}
export default App
