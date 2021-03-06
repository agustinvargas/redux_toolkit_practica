import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Notify from './features/notification/Notify';
import { createPortal } from 'react-dom';
import ToastList from './features/notification/ToastList';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header>
      <hr /> */}
      <Notify />
      {createPortal(<ToastList />, document.getElementById('notify'))}
      <br />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
