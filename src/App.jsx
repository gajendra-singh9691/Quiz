import { Provider } from "react-redux"
import { createStore } from "redux"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import rootreduser from "./Reduser/Rootreduser"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./Details"
import persistStore from "redux-persist/es/persistStore"
import { Toaster } from 'react-hot-toast'
import Question from "./Question"
import { HashRouter } from "react-router-dom"
import Result from "./Result"

function App() {
  const prsister = {
    key : "root",
    storage : storage
  }
  
  const persistreduser = persistReducer(prsister,rootreduser)
  const store = createStore(persistreduser)
  const persistor = persistStore(store);  
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/questions" element={<Question />}/>
            <Route path="/result" element={<Result />}/>
          </Routes>
          <Toaster />
        </HashRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
