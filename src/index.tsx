import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'; //Здесь импортируется хранилище которое создали
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
		// Provider оборачивает всё приложение и даёт доступ к хранилищу проекту
    <Provider store={store}> 
        <RouterProvider router={router} />
    </Provider>
);
