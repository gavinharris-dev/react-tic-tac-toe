import {useState} from 'react';
import './App.css';
import {Box} from "./Components/Box";

function App() {

  const [state, setState] = useState([
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null},
    {value: '', error: null}
  ]);
  const [player, setPlayer] = useState('X');

  function swapPlayer() {
    if (player === 'X') {
      return setPlayer('O');
    }

    return setPlayer('X');
  }

  function boxClickHandler(which) {
    const updatedState = [...state];

    if (state[which].value !== '') {
      updatedState[which].error = 'Used';
      setState(updatedState);

      return setTimeout(() => {
        const updatedState = [...state];
        updatedState[which].error = null;
        setState(updatedState);
      }, 200);

    }

    updatedState[which].value = player;
    updatedState[which].error = null;
    setState(updatedState);
    swapPlayer();
  }

  return (
    <div className="App">
      <Box onClick={() => boxClickHandler(0)} value={state[0]}/>
      <Box onClick={() => boxClickHandler(1)} value={state[1]}/>
      <Box onClick={() => boxClickHandler(2)} value={state[2]}/>
      <Box onClick={() => boxClickHandler(3)} value={state[3]}/>
      <Box onClick={() => boxClickHandler(4)} value={state[4]}/>
      <Box onClick={() => boxClickHandler(5)} value={state[5]}/>
      <Box onClick={() => boxClickHandler(6)} value={state[6]}/>
      <Box onClick={() => boxClickHandler(7)} value={state[7]}/>
      <Box onClick={() => boxClickHandler(8)} value={state[8]}/>
    </div>
  );
}

export default App;
