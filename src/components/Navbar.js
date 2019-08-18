import React,{createContext,useContext} from 'react'
import { BookContext } from '../context/BookContext';


const NavBar =()=>{

    const {books} = useContext(BookContext)

    return(
        <div className="navabr">
                <h1>Books List</h1>
                <p>Currently you read like {books.length} Book(s)</p>
        </div>
    )
}
export default NavBar;