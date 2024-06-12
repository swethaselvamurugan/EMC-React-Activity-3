import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ListContext } from "./listprovider"

function Students(){
    var {arr, fav, setFav} = useContext(ListContext)
    function handleAdd(item){
        if(!fav.includes(item)){
            setFav([...fav,item])
        }
    }
    return(
        <div>
            <div className="header">
                <Link className="link" to={"/"}>List of Students</Link>
                <Link className="link" to={"/favourite"}>Favourite Students</Link>
            </div>
            <ol>
            {
                arr.map(function(item){
                    return (
                        <div className="container">
                            <li>{item}</li>
                            {
                               !fav.includes(item)? <button onClick={()=>handleAdd(item)} className="button">Add to Favourite</button> : <button className="button change">Add to Favourite</button>
                            }
                        </div>
                    )
                })
            }
            </ol>
        </div>
    )
}

export default Students