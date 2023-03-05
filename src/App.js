import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { loadBooks, setBooks } = useContext(BooksContext);

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDeleteAllForm = () => {
    if(window.confirm('Are you sure?') === true) {
      if(window.confirm('really?') === true) {
        setBooks([]);
      }
    }
  }

  return (
    <div className="app"> 
      <h1>Reading List</h1>
      <form onSubmit={handleDeleteAllForm}>
        <button type="submit" className="button">Delete All Books</button>
      </form>

      <BookList />

      <hr />

      <BookCreate />

    </div>
  );
}

export default App;
