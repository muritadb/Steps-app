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

const [firstRender] = steps
const App = () => {
  const [message, setMessage] = useState(firstRender)
  const [isOpen, setIsOpen] = useState(true)
  // console.log(message, firstRender)

  const handleClickToggle = () => setIsOpen((i) => !i)
  const handleClickPrevious = () => setMessage((s) => s)
  const handleClickNext = () => setMessage()

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
          <p className="message">{message.description}</p>
          <div className="buttons">
            <button onClick={handleClickPrevious}>Anterior</button>
            <button onClick={() => handleClickNext}>Proximo</button>
          </div>
        </div>
      )}
    </div>
  )
}

export { App }
