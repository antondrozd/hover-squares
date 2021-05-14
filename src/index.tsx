import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import store from './redux/store'

import GlobalStyle from './global.styles'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)
