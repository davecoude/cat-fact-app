import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  // elementos
  return (
    <main>
      <h1>App de michis</h1>

      <button onClick={handleClick}> New fact </button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`this is a fact of ${fact}`} />}
    </main>
  )
}
