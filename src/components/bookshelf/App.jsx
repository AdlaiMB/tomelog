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
import Overlay from "../Overlay";
import Modal from "../Modal";

import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";

function App() {
  const [books, setBooks] = useState([
    { id: 1, coverURL: null, title: "test", author: "john dow" },
  ]);
  const [toastConfig, setToastConfig] = useState({
    theme: "",
    title: "",
    message: "",
    animation: "",
  });
  const [modal, setModal] = useState(null);

  // useEffect(() => {
  //   async function fetchBooks() {
  //     const response = await getMyBooks();

  //     if (response.error) {
  //       console.log("error");
  //       return;
  //     }

  //     setBooks(books);
  //   }

  //   fetchBooks();
  // }, []);

  const slideInToast = () => {
    setToastConfig({ ...toastConfig, animation: "slide-in" });
  };

  const slideOutToast = () => {
    setToastConfig({ ...toastConfig, animation: "slide-out" });
  };

  const updateToast = (theme, title, message) => {
    setToastConfig({ ...toastConfig, theme, title, message });
  };

  const removeModal = () => {
    setModal(null);
  };

  const displayModal = (title, content) => {
    setModal(
      <Overlay>
        <Modal title={title} removeModal={removeModal}>
          {content}
        </Modal>
      </Overlay>,
    );
  };

  return (
    <>
      <Navigation />
      {/* <Toast toastConfig={toastConfig} slideOutToast={slideOutToast} /> */}
      {modal}
      <PageContent>
        <TitleSection />
        <TabBookSection>
          <TabSection />
          <BookSection
            books={books}
            slideOutToast={slideOutToast}
            displayModal={displayModal}
          />
        </TabBookSection>
      </PageContent>
    </>
  );
}

export default App;
