import './App.css';
import './icons.css'
import Header from './components/Header'
import Routes from './routers/router'
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
