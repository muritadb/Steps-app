import { useEffect, useState } from "react"


const Steps = () => {
    const [message, setMessage] = useState(1)
    const [ steps, setSteps ] = useState([])
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/muritadb/fake-data/main/steps.json')
        .then(res => res.json())
        .then(data => setSteps(data))
        .catch(console.log)
    }, [])
  
  
    const handleClickPrevious = () => setMessage(s => (s - 1 === 0 ? s : s - 1))
    const handleClickNext = () => setMessage(s => (s === steps.length ? s : s + 1))
  
    return (
      <div className="steps">
        <ul className="numbers">
          {steps.map((item, i) => (
            <li key={item.id} className={i + 1 === message ? 'active' : ''}>
              {i + 1}
            </li>
          ))}
        </ul>
        <p className="message">
          Passo {message}: {steps[message - 1]?.description}
        </p>
        <div className="buttons">
          <button onClick={handleClickPrevious}>Anterior</button>
          <button onClick={handleClickNext}>Proximo</button>
        </div>
      </div>
    )
  }

  export { Steps }