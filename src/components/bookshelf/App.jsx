import "../../styles/resets.css";
import "../../styles/globals.css";
import "../../styles/bookshelf/index.css";

import Navigation from "../Navigation";
import PageContent from "../PageContent";
import TitleSection from "./TitleSection";
import TabBookSection from "./TabBookSection";
import TabSection from "./TabSection";
import BookSection from "./BookSection";

function App() {
  return (
    <>
      <Navigation />
      <PageContent>
        <TitleSection />
        <TabBookSection>
          <TabSection />
          <BookSection />
        </TabBookSection>
      </PageContent>
    </>
  );
}

export default App;
