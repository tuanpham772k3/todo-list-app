import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container mt-4">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </Provider>
  )
}

export default App
