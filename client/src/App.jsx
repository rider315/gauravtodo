
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import AdSenseScript from './components/AdSenseScript';
function App() {
  return (
    <div>
      <AdSenseScript/>
   
    <div className="container">
      <Header />
      <TodoForm />
      <Todos />
    </div>
    </div>
  );
}

export default App;