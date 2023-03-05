
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  console.log('Book List');
  console.log(books);
  const renderBooks = books.map((book, i) => {
    console.log('rendering book', book.bookName);
    return <BookShow book={book} key={i} />
  });

  return (
    <div className="book-list"> 
      {renderBooks}
    </div>
  );
}

export default BookList;
