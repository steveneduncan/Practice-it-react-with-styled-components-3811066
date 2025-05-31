import "./App.css";
import Header from "./components/examples/Header";
import Footer from "./components/examples/Footer";
import DynamicGrid from "./components/examples/DynamicGrid";
import GlobalStyles from "./components/examples/GlobalStyles";

import BookList from "./components/BookList";

const App = () => {

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ];


  return (
    <div>
      <GlobalStyles />
      <h1>Global Styles Example</h1>
      <Header />
      <DynamicGrid items={items} />
      <BookList />
      <Footer />
    </div>
  );
};

export default App;
