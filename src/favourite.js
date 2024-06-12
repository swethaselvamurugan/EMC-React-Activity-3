import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ListContext } from "./listprovider"

function Favourite() {
    var { fav, setFav } = useContext(ListContext)

    function handleRemove(item) {
        var updatedFav = fav.filter(function (new_item) {
            if (new_item === item) {
                return false
            }
            else {
                return true
            }
        })
        setFav(updatedFav)
    }
    return (
        <div>
            <div className="header">
                <Link className="link" to={"/"}>List of Students</Link>
                <Link className="link" to={"/favourite"}>Favourite Students</Link>
            </div>
            <ol>
                {
                    fav.map(function (item) {
                        return (
                            <div className="container">
                                <li>{item}</li>
                                <button onClick={() => handleRemove(item)} className="button">Remove</button>
                            </div>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Favourite