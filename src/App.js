import ListProvider from "./listprovider"
import Students from "./students"
import Favourite from "./favourite"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <ListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Students></Students>}></Route>
            <Route path="/favourite" element={<Favourite></Favourite>}></Route>
          </Routes>
        </BrowserRouter>
      </ListProvider>
    </>
  )
}

export default App