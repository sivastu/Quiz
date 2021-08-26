import React from 'react';

const Stat =({onQuizStart})=>{
	return(
	<div className="card">
		<div className="card-content">
			<div className="content">
			<h1>Start the Quiz</h1>
			 <button className="buttom is-info is-medium" onClick={onQuizStart}>Start </button>
			</div>
		</div>
	</div>
	);
}

export default Stat;