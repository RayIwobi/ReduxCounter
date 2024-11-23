import './App.css';
//import Movieapp from './Components/moviefolder/Movieapp';
//  import Trytodo from './Components/todolisttry/Trytodo';
// import TodoSentry from './Components/todolisttry/TodoSentry'
// import Movietry from './Components/todolisttry/Movietry';
// import MarvelApi from './Components/todolisttry/MarvelApi'

import { Provider } from 'react-redux';
import CounterApp from './Components/CounterApp/CounterApp';
import store from './Components/reduxStore/store';
import CounterNav from './Components/CounterApp/CounterNav';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CounterNav />
      <CounterApp />
      {/* <MarvelApi /> */}
      {/* <TodoSentry /> */}
      {/* <Trytodo/> */}
      {/* <Movieapp/> */}
      {/* <Movietry /> */}
      </Provider>
    </div>
  );
}

export default App;
