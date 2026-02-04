import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";
import "../../styles/global.css";

import NavBar from "../NavBar";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function retrieveMyBooks() {
      const { error, view } = await getMyBooks();

      setBooks(view);
    }

    retrieveMyBooks();
  }, []);

  return (
    <>
      <NavBar page="bookshelf" />
      <div className="guard-rail column gap-m">
        <h6 className="biorhyme-regular">My Books:</h6>
        {books}
      </div>
    </>
  );
}

export default App;
