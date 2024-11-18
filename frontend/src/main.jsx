import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { persistor,store } from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
// import { store, persistor } from './redux/Store';
createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className=' min-h-screen w-full'>
      <App  />
      </div>
    </PersistGate>
  </Provider>
 
)
