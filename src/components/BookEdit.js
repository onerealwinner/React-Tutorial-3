import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book, handleEditFormSubmit}) {
  const {bookEdit} = useContext(BooksContext);
  const [newTitle, setNewTitle] = useState(book.bookName);

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEditFormSubmit();
    bookEdit(newTitle, book.id);
  }

  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input className="input" type="text" value={newTitle} onChange={handleOnChange} />
      <button type="submit" className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
