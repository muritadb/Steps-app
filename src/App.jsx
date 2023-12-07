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
  // const [message, setMessage] = useState(steps[0])
  const [isOpen, setIsOpen] = useState(true)

  const handleClickToggle = () => setIsOpen((i) => !i)
  const handleClickPrevious = (e) => console.log(e.target.textContent)
  const handleClickNext = () => {}

  return (
    <div>
      <div className="container-close">
        <button onClick={handleClickToggle} className="close">
          {isOpen ? "Fechar" : "Abrir"}
        </button>
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className="active">1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <p className="message">Entender o problema do cliente</p>
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
