import logo from './logo.svg';
import './App.css';
import configureStore from './store/configureStore';
import Bugs from './components/Bugs';
import { Provider } from 'react-redux';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
    </Provider>
  );
}

export default App;
