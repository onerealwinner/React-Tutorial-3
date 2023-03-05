import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const res = await axios.get('http://localhost:3001/books');
        setBooks(res.data);
    }
      
    const bookAdd = async (bookName) => {
        const response = await axios.post('http://localhost:3001/books', {
        bookName
        });

        setBooks([...books, response.data]);
    };
    
    const bookEdit = async (bookName, bookId) => {
        const res = await axios.put(`http://localhost:3001/books/${bookId}`, {
            bookName
        });

        const newBooks = books.map((book, i) => {
            if (book.id === bookId) {
                return { ...book, ...res.data};
            }
            return book;
        });
        
        console.log(newBooks);

        setBooks(newBooks);

        ///setBooks(newBooks);
    
        // let editBook = {
        //   bookName: bookName
        //   , Id : 1
        // };
        // setBooks([...books.slice(0, i - 1), bookName, ...books.slice(i + 1)]);
      };
    
      const bookDelete = async (idToRemove) => {
        const res = await axios.delete(`http://localhost:3001/books/${idToRemove}`);
    
        const booksFiltered = books.filter((book, i) => {
          return book.id !== idToRemove;
        });
    
        setBooks(booksFiltered);
      }

      const valueToShare = {
        books,
        loadBooks,
        bookAdd,
        bookEdit,
        bookDelete
      }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;