import {useState} from 'react';
import './App.css';
import {Box} from "./Components/Box";

const initialState = [
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null},
  {value: '', error: null}
];

function App() {

  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const [state, setState] = useState([...initialState]);
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

    if (checkResult(updatedState)) {
      console.log('Result!' + JSON.stringify(initialState))
      setState([
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
      return;
    }

    setState(updatedState);
    swapPlayer();
  }

  function checkResult(board) {

    let winner = '';

    /*

    0|1|2
    -----
    3|4|5
    -----
    6|7|8

     */
    if (
      //ROWS
      winningCombo(board[0], board[1], board[2]) ||
      winningCombo(board[3], board[4], board[5]) ||
      winningCombo(board[6], board[7], board[8]) ||
      // COLUMNS
      winningCombo(board[0], board[3], board[6]) ||
      winningCombo(board[1], board[4], board[7]) ||
      winningCombo(board[2], board[5], board[8]) ||
      // CROSS
      winningCombo(board[0], board[4], board[8]) ||
      winningCombo(board[2], board[4], board[6])
    ) {
      winner = player;
    }

    if (winner === 'X') {
      setXWins( (c) => ++c );
      return true;
    } else if (winner === 'O') {
      setOWins( (c) => ++c );
      return true;
    }

    let hasMoves = board.some( r => r.value === '');

    if (!hasMoves) {
      setDraws((c) => ++c);
      return true;
    }

    return false;

  }
  function winningCombo(cell1, cell2, cell3) {
    return (cell1.value !== '' && cell1.value === cell2.value && cell1.value === cell3.value)
  }

  return (
    <>
      <p>X: {xWins} O: {oWins} Draws: {draws}</p>
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
    </>
  );
}

export default App;
