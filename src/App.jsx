import { useState } from 'react'
import { Steps } from './components/steps.jsx'
import { Toggle } from './components/toggle.jsx'

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(null)

  const handleClickToggle = () => setShouldBeOpen((i) => !i)

  return (
    <div>
      <Toggle shouldBeOpen={shouldBeOpen} onClickToggle={handleClickToggle} />
      
      {shouldBeOpen && <Steps />}
    </div>
  )
}

export { App }
