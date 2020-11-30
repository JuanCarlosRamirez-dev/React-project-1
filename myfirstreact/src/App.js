
import { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import tasks from './sample/tasks.json';

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks} />
      </div>
    )
  }
}




/* function Helloworld(props) {
  return (
    <div class="hello">{props.mytext}</div>
  )
} 

const App = () => <div>This is another component: <Helloworld /></div>

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleState = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div class="hello">
          <h3>{this.props.mytext}</h3>
          {this.props.mytext}
          <button onClick={this.toggleState}>Toggle state</button>
        </div >
      )
    } else {
      return <h1>
        There is no elements
        <button onClick={this.toggleState}>
          Toggle state
        </button>
      </h1>
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello JC" />
      <Helloworld mytext="Segundo componente" />
      <Helloworld mytext="Tercer componente" />
    </div>
  );
}*/

export default App;
