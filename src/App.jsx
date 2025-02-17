import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { SearchProvider } from "./context/SearchContext";
import HomePage from "./pages/HomePage";
import FirstPage from "./pages/FirstPage";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route index element={<FirstPage />} />
              <Route path='result' element={<SearchPage />} />
              <Route path='watch' element={<VideoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
};

export default App;
