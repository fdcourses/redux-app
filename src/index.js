import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  REDUX - 
    store - хранилище всех общих состояний приложения, обьект JS
    reducer - функция, принимающая состояние и действие и возвражающая новое состояние
    action - обьект, в котором есть свойтво type , и могут быть доп инфа
    dispatch - функция которая принимает action и дает его reducer-у
    
*/

/* 
  REACT - REDUX
    Provider - компонент провайдер как в контексте
    connect - функция для подписки компонент на обновления хранилища
    mapStateToProps - функция принивает все состояние и возвращает 
    обьект с сотоянием для конкрентного компонента
*/
