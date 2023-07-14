import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './reducer'

const store = createStore(Reducer, composeWithDevTools())

export default store