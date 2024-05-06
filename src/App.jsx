import { useEffect,useState } from 'react'
import './App.css'

const FollowMause = () => {
  const [enabled, setEnabled] = useState(false)
  //inicializar con el tipo de dato que es,
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect',{enabled})
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('move',{clientX, clientY})
      setPosition({ x: clientX, y: clientY })
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    //cleanup
    // cuando el componente se desmonta
    // cuando cambia las dependencias, antes de ejecutar
    // el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove',handleMove)
    }
  },[enabled])

  return(
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`, 
      }}>

      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {

  return (
    <FollowMause/>
  )
}

export default App
   