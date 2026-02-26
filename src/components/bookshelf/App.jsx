import "../../styles/resets.css";
import "../../styles/globals.css";
import "../../styles/bookshelf/index.css";

import Navigation from "../Navigation";
import PageContent from "../PageContent";
import TitleSection from "./TitleSection";
import TabBookSection from "./TabBookSection";
import TabSection from "./TabSection";
import BookSection from "./BookSection";
import Toast from "../Toast";

import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";

function App() {
  const [books, setBooks] = useState([]);
  const [toastConfig, setToastConfig] = useState({
    theme: "",
    title: "",
    message: "",
    animation: "slide-in",
  });

  const slideInToast = () => {
    setToastConfig({ ...toastConfig, animation: "slide-in" });
  };

  const slideOutToast = () => {
    setToastConfig({ ...toastConfig, animation: "slide-out" });
  };

  const updateToast = (theme, title, message) => {
    setToastConfig({ ...toastConfig, theme, title, message });
  };

  // useEffect(() => {
  //   async function fetchBooks() {
  //     const { view: books } = await getMyBooks();

  //     setBooks(books);
  //   }

  //   fetchBooks();
  // }, []);

  return (
    <>
      <Navigation />
      <Toast toastConfig={toastConfig} slideOutToast={slideOutToast} />
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
