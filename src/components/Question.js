import React,{useState,useEffect,useRef} from 'react';

const Question =({data,a1,a2,a3,a4,a5,a6})=>{
	
	const [sele,setSele]=useState('');
	const [err,setErr]=useState('');
	const radWraper = useRef();
	
	const changeHandler=(e)=>{
		setSele(e.target.value);
    if(err) {
      setErr('');
    }
	}
	
	const nextClick=(e)=>{
		if(sele===""){
			return setErr('select anyone');
		}
		a1(prevState => [...prevState,{q:data.question,a:sele}]);
		setSele('');
		console.log(a1);
		
		 if(a3 < a2 - 1) {
      a4(a3 + 1);
    }else {
      a5(3);
    }
	}
	return(
	<div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radWraper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {err && <div className="has-text-danger">{err}</div>}
          <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClick}>Next</button>
        </div>
      </div>
    </div>
	);
}

export default Question;