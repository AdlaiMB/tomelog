import "../../styles/resets.css";
import "../../styles/globals.css";
import "../../styles/bookshelf/index.css";

import Navigation from "../Navigation";
import PageContent from "../PageContent";
import TitleSection from "./TitleSection";
import TabBookSection from "./TabBookSection";
import TabSection from "./TabSection";
import BookSection from "./BookSection";

import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const { view: books } = await getMyBooks();

      setBooks(books);
    }

    fetchBooks();
  }, []);

  return (
    <>
      <Navigation />
      <PageContent>
        <TitleSection />
        <TabBookSection>
          <TabSection />
          <BookSection books={books} />
        </TabBookSection>
      </PageContent>
    </>
  );
}

export default App;
