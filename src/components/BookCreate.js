import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
const { bookAdd } = useBooksContext();
const [bookName, setBookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    bookAdd(bookName);
    setBookName('');
  }

  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  }

  return (
    <div className="book-create"> 
    <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookName">Book Name</label>
        <input value={bookName} type="text" name="bookName" onChange={handleBookNameChange} className="input" />
        <button type="submit" className="button">Save Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
