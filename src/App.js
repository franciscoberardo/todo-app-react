import Note from './Notes';
import './index.css';

function App() {
  return (
    <div className="Notes animate-fade-in">
      <header className="Note-header">
        <h1 className="text-3xl text-center font-bold mb-3 uppercase">To-Do List</h1>
        <Note />
      </header>
    </div>
  );
}

export default App;
