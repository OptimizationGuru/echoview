import Header from './components/Header';
import store from './utils/store';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="m-0 p-0">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
