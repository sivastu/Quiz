import './App.css';
import React,{useState,useEffect,useRef} from 'react';

import Stat from './components/Stat';
import Question from './components/Question';

import Data from './quiz/quiz.json';

function App() {
	const [stop,setStop]=useState(1);
	const [qes,setQes] = useState(0);
	const [ans,setAns] = useState([]);
	
	const quizStart =()=>{
		setStop(2);
	}
	console.log(ans);
  return (
    <div className="App">
	{stop ===1 && <Stat onQuizStart={quizStart}/>}
		{ stop===2 && <Question 
		data ={Data.data[qes]}
		a1={setAns}
		a2 ={Data.data.length}
		a3={qes}
		a4={setQes}
		a5={setStop}
		//a6={}
		/>
		}
    </div>
	
  );
}

export default App;
