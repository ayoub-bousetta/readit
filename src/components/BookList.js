import React,{createContext,useContext} from 'react'
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
        <div className="booklist">
            <ul>
                {
                    books.map(book=>{
                        return (<BookDetails book={book} key={book.id} />)
                    })
                }
            </ul>

        </div>

     ):(
         <div className='empty'></div>
     );
}
 
export default BookList;