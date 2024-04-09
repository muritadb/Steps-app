

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
    <div className="container-close">
      <button onClick={onClickToggle} className="close">
        {shouldBeOpen ? "Fechar" : "Abrir"}
      </button>
    </div>
  )

  export { Toggle }