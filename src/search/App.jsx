import { useState } from "react";
import { find } from "../../controller";

function App() {
  const [books, setBooks] = useState([]);

  async function search(formData) {
    const query = formData.get("query");
    const { error, view } = await find(query);

    if (!error) {
      setBooks(view);
    } else {
      alert("error");
    }
  }

  return (
    <>
      <form action={search}>
        <input
          name="query"
          placeholder="Enter the title of your book e.g. the pragmatic programmer"
        />
        <button>search</button>
      </form>
      <div>{books}</div>
    </>
  );
}

export default App;
