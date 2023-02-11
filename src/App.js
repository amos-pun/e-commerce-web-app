import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import MyRoutes from './MyRoutes'
import { caartReducer } from './Reducer/cartReducer'
import { itemReducer } from './Reducer/itemReducer'
import './App.css'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: caartReducer,
  })

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const myStore = createStore(persistedReducer)

  const myPersistor = persistStore(myStore)
  
  return (
    <div>
      <Provider  store={myStore}>
        <PersistGate persistor={myPersistor}>
          <MyRoutes />
        
        </PersistGate>
      </Provider>
      
    </div>
  )
}

export default App