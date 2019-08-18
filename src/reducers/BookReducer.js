import uuid from 'uuid/v1'
export const BookReducer = (state,action)=>{


switch (action.type) {
    case "ADD_BOOKS":
        return[...state,{
            title: action.book.title,
            author: action.book.author,
            id:uuid()
        }]
        break;

    case "Delete_BOOK":
        return state.filter(book=> book.id !== action.id)
    break;

    default:
    return state
        break;
}
}