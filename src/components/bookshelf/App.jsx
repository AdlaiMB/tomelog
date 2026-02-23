import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";
import "../../styles/new_globals.css";
import "../../styles/resets.css";

import NavBar from "../NavBar";

function App() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   async function retrieveMyBooks() {
  //     const { error, view } = await getMyBooks();

  //     setBooks(view);
  //   }

  //   retrieveMyBooks();
  // }, []);

  return (
    <>
      <NavBar page="bookshelf" />
    </>
  );
}

export default App;
