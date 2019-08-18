import React,{useContext,useState} from 'react'
import { BookContext } from '../context/BookContext';

const BookForm = () => {

   const {dispatch} =useContext(BookContext)
    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')

    const handleSub =(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_BOOKS',book:{title,author}})
        setauthor('')
settitle('')
    }
    return (
        <form onSubmit={handleSub}>
<input type="text" placeholder='Book Title' value={title} onChange={(e)=>settitle(e.target.value)} required/>
<input type="text" placeholder='Written by' value={author} onChange={(e)=>setauthor(e.target.value)} required/>
<input type="submit" value="Add Book"/>
        </form>
    
    );
}
 
export default BookForm;