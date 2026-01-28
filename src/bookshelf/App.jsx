import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function retrieveMyBooks() {
      const { error, view } = await getMyBooks();

      if (!error) {
        setBooks(view);
      } else {
        alert("error");
        console.log(view);
      }
    }

    retrieveMyBooks();
  }, []);

  return (
    <>
      <div className="content">
        <h1>My Books</h1>
        {books}
      </div>
    </>
  );
}

export default App;
