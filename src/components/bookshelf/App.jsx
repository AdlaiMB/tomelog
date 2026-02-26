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

const dummyBook = { id: 1, coverURL: null, title: "test", author: "john dow" };

import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";

function App() {
  const [books, setBooks] = useState([]);
  const [toastConfig, setToastConfig] = useState({
    theme: "",
    title: "",
    message: "",
    animation: "",
  });
  const [modal, setModal] = useState(null);

  console.log(books);

  useEffect(() => {
    async function fetchBooks() {
      const response = await getMyBooks();

      if (response.error) {
        console.log("error");
        return;
      }

      setBooks(response.books);
    }

    fetchBooks();
  }, []);

  const slideInToast = () => {
    setToastConfig((toastConfig) => ({
      ...toastConfig,
      animation: "slide-in",
    }));
  };

  const slideOutToast = () => {
    setToastConfig((toastConfig) => ({
      ...toastConfig,
      animation: "slide-out",
    }));
  };

  const updateToast = (theme, title, message) => {
    setToastConfig((toastConfig) => ({
      ...toastConfig,
      theme,
      title,
      message,
    }));
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
      <Toast toastConfig={toastConfig} slideOutToast={slideOutToast} />
      {modal}
      <PageContent>
        <TitleSection />
        <TabBookSection>
          <TabSection />
          <BookSection
            books={books}
            updateToast={updateToast}
            slideInToast={slideInToast}
            slideOutToast={slideOutToast}
            displayModal={displayModal}
          />
        </TabBookSection>
      </PageContent>
    </>
  );
}

export default App;
