import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback, useState, useMemo } from 'react'


function App( ) {
	const [value, setValue] = useState(0)

  const prixenDollard = useMemo(
    () => (value*1.05).toFixed(2)
    , [value]
  );

  const handleClick = useCallback(
    ()=> setValue(value - 1)
    ,[value]
  ); 

  const handleClickoff = useCallback(
    ()=> setValue(value + 1)
    ,[value]
  );

	return (
		<>
      {value === 42 ? <div>  </div> : <div>
        <p>Prix en euro</p>

        <input
          type="number"
          value={value}
          onChange={(event) => {
            setValue(parseInt(event.target.value))
          }}
        />
        <p>{value}</p>

        <p style={{ color: prixenDollard > 100 ? 'red' : 'black' }}>Prix en Dollard : {prixenDollard}</p>
        <div>
          <bouton 
          style={{ backgroundColor: 'red'}}
          onClick={handleClick}
          >
            - 1
          </bouton>
          <bouton 
          style={{ backgroundColor: 'green'}}
          onClick={handleClickoff}
          >
            + 1
          </bouton>
        </div>
      </div> }
		</>
	
  )
}



export default App
