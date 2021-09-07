  import './App.css';
  import './icons.css'
  import Header from './components/Header'
  import Routes from './routers/router'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
