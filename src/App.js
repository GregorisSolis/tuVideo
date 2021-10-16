import Routes from './routers/router'
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import './icons.css'

function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Provider store={store}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
