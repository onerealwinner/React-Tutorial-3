import { useState, useContext} from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({book}) {
  const [showEdit, setShowEdit] = useState(false);
  const {bookDelete} = useContext(BooksContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleDeleteClick = () => {
    bookDelete(book.id);
  }

  const handleEditFormSubmit = () => {
    setShowEdit(false);
  }

  let content = !showEdit ? <h3>{book.bookName}</h3> : <BookEdit book={book} handleEditFormSubmit={handleEditFormSubmit} />;

  return (

      <div className="book-show">
        {content}

        <img src={`https://picsum.photos/seed/${book.id}/150/100`} alt="books" />

        <div className="actions">
          <button type="button" className="edit" onClick={handleEditClick}>P</button>
          <button type="button" className="delete" onClick={handleDeleteClick}>X</button>
        </div>

      </div>

  );
}

export default BookShow;
