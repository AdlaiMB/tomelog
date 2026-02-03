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
      <NavBar />
      <div className="guard-rail column gap-l">
        <h1 className="line-seed-jp-bold">My Books</h1>
        {books}
      </div>
    </>
  );
}

export default App;
