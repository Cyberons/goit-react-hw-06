import React from 'react'
import ReactDOM from 'react-dom'
import App from './componets/App/App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    </React.StrictMode>,
    </Provider>
)
