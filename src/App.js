import logo from './logo.svg';
// import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import ListPage from './components/ListPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ListPage />
      </Provider>
    </div>
  );
}



export default App;
