import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/_base.scss'

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list"
import EditExercise from "./components/edit-exercise"
import CreateExercise from "./components/create-exercise"
import CreateUser from "./components/create-user"

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <br />
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
         </div>
      </Router>
   )
}

export default App
