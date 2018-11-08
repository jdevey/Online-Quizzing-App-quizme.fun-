import React from 'react'
import ReactDOM from 'react-dom'

class GameIDForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
    	<div className="quiz-creation-form">
      	<form onSubmit={this.handleSubmit}>
        	<label>
          		Enter your quiz information!
          	<input type="text" value={this.state.value} onChange={this.handleChange} />
        	</label>
        	<input type="submit" value="Submit your quiz" />
      	</form>
      </div>
    );
  }
}

ReactDOM.render(
	<GameIDForm />,
  	document.getElementById('quiz-creation')
);
