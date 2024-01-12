import { useState } from "react"

const steps = [
  {
    id: crypto.randomUUID(),
    description: "Entender o problema do cliente",
  },
  {
    id: crypto.randomUUID(),
    description: "Desenvolver a solução do problema",
  },
  {
    id: crypto.randomUUID(),
    description:
      "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
  },
]

const App = () => {
  const [message, setMessage] = useState(0)
  const [shouldBeOpen, setShouldBeOpen] = useState(true)
  console.log(message)

  const handleClickToggle = () => setShouldBeOpen((i) => !i)
  const handleClickPrevious = () => {
    if (message < 0) {
      return
    }

    if (message > 0) {
      setMessage(m => m - 1)
    }

  }
  const handleClickNext = () => {
    if (message === steps.at(-1)) {
      return
    }

    if (message < steps.length - 1) {
      setMessage(m => m + 1)
    }
  }

  return (
    <div>
      <div className="container-close">
        <button onClick={handleClickToggle} className="close">
          {shouldBeOpen ? "Fechar" : "Abrir"}
        </button>
      </div>
      {shouldBeOpen && (
        <div className="steps">
          <ul className="numbers">
            {steps.map((item, i) => (
              <li key={item.id} className={i === message ? 'active' : ''}>
                {i + 1}
              </li>
            ))}
          </ul>
          <p className="message">
            Passo {message + 1}: {steps[message].description}
          </p>
          <div className="buttons">
            <button onClick={handleClickPrevious}>Anterior</button>
            <button onClick={handleClickNext}>Proximo</button>
          </div>
        </div>
      )}
    </div>
  )
}

export { App }
