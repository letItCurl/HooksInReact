import React, {useState, useEffect, createContext} from 'react';

const NameContext = createContext()

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'billy'
    }
  }

  render(){
    return(
      <NameContext.Provider value={this.state.name}>
        <Child/>
      </NameContext.Provider>
    )
  }
}

class Child extends React.Component {
  render(){
    return(
      <section className="child">
        <Grandchild/>
      </section>
    )
  }
}

class Grandchild extends React.Component {
  render(){
    return(
      <section className="grandChild">
        <Button/>
      </section>
    )
  }
}
class Button extends React.Component {
  render(){
    return(
      <NameContext.Consumer className="grandChild">
        {
          name => <button>{name}</button>
        }
      </NameContext.Consumer>
    )
  }
}

 

export default App;
