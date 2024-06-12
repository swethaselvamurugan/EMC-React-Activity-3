import { createContext, useState } from "react"

var ListContext = createContext({})

function ListProvider(data){
    var[arr, setArr] = useState(["Barath", "Praveen", "Kumar", "Ramya", "Monica"])
    var[fav, setFav] = useState([])
    return(
        <ListContext.Provider value={{arr, setArr, fav, setFav}}>
            {data.children}
        </ListContext.Provider>
    )
}

export default ListProvider
export {ListContext}