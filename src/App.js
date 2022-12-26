import SearchContextProvider from "./components/context/SearchContext";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContextProvider>
        <Main />
      </SearchContextProvider>
      <Footer />
    </div>
  );
}

export default App;
