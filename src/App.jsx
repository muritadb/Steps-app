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

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
  <div className="container-close">
    <button onClick={onClickToggle} className="close">
      {shouldBeOpen ? "Fechar" : "Abrir"}
    </button>
  </div>
)

const Steps = ({ shouldBeOpen, message, onClickNext, onClickPrevious }) =>
  shouldBeOpen && (
    <div className="steps">
      <ul className="numbers">
        {steps.map((item, i) => (
          <li key={item.id} className={i + 1 === message ? 'active' : ''}>
            {i + 1}
          </li>
        ))}
      </ul>
      <p className="message">
        Passo {message}: {steps[message - 1].description}
      </p>
      <div className="buttons">
        <button onClick={onClickPrevious}>Anterior</button>
        <button onClick={onClickNext}>Proximo</button>
      </div>
    </div>
  )

const App = () => {
  const [message, setMessage] = useState(1)
  const [shouldBeOpen, setShouldBeOpen] = useState(true)


  const handleClickToggle = () => setShouldBeOpen((i) => !i)
  const handleClickPrevious = () => setMessage(s => (s - 1 === 0 ? s : s - 1))
  const handleClickNext = () => setMessage(s => (s === steps.length ? s : s + 1))

  return (
    <div>
      <Toggle
        shouldBeOpen={shouldBeOpen}
        onClickToggle={handleClickToggle}
      />

      <Steps
        shouldBeOpen={shouldBeOpen}
        message={message}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  )
}

export { App }
