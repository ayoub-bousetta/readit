import React,{createContext,useReducer,useEffect} from 'react'
import { BookReducer } from '../reducers/BookReducer';

export const BookContext =createContext();

const BookContextProvider =(props)=>{

    const [books, dispatch] = useReducer(BookReducer,[],()=>{
        const localData = localStorage.getItem('books');
       return localData ? JSON.parse(localData) :  []
    })
    useEffect(() => {
       localStorage.setItem('books',JSON.stringify(books))
    }, [books])

    // const AddBooks=(title,author)=>{
    //     setbooks([...books,{title:title,author:author,id:uuid()}])
    // }

    // const DeleteBooks=(id)=>{
    //     setbooks(books.filter(book=> book.id !== id
    //     ))
    //}

    return (
<BookContext.Provider value={{books,dispatch}}>
{props.children}
</BookContext.Provider>

    )

}

export default BookContextProvider;