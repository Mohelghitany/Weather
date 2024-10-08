
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Fall from './components/fall/fall.jsx';
import SearchProvider from './searchProvider';


function App() {
  return (
    <SearchProvider>
      <Fall />
    </SearchProvider>
    

  );
}

export default App;
