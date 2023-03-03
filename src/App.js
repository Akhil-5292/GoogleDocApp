
import './App.css';
import Home from './Components/Home/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function App() {
  return (
    <div className="App">
      <h3> <span className='icon'><TextSnippetIcon className='icon1'/> </span> Google Doc</h3>
      <Home/>
      </div>
  );
}

export default App;
