import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller";

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
      <h1>My Books</h1>
      {books}
    </>
  );
}

export default App;
