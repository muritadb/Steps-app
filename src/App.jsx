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
  const [isOpen, setIsOpen] = useState(true)
  console.log(message)

  const handleClickToggle = () => setIsOpen((i) => !i)
  const handleClickPrevious = () => {
    if(message < 0){
      return
    }

    if(message > 0) {
      setMessage(message - 1)
    }
    
  }
  const handleClickNext = () => {
    if(message === steps.at(-1)){
      return
    }
    
    if(message < steps.length - 1 ) {
      setMessage(message + 1)
    }
  }

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
            <div className={`${message === 0 ? 'active' : '' }`}>1</div>
            <div className={`${message === 1 ? 'active' : '' }`}>2</div>
            <div className={`${message === 2 ? 'active' : '' }`}>3</div>
          </div>
          <p className="message">{steps[message].description}</p>
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
