import React from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        this.setState({
            characters: this.state.characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: this.state.characters.concat([character])});
    }

    render(){
      return (
        <div className="App">
          <h1>React Tutorial</h1>
          <p>Add a character with a name and a job to the table!!!</p>
          <Table 
            characterData={this.state.characters}
            removeCharacter = {this.removeCharacter}  
          />
          <h3>Add New</h3>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }

export default App;