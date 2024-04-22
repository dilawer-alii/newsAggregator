import { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
function App() {
  const [apisource, setapisource] = useState(
    "16c5212158ba49f2b5868e6e61bdcdcd"
  );
  const pageSize = 20;
  // const apiKey = "2ee47d35ece5453e9941dc94a5203122";
  // const apiKey = "75d946db6166429f888483aff0c47f26";
  const apiKey = apisource;
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <NavBar
        apisource={apisource}
        setapisource={setapisource}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <div
        style={{
          display: "flex",
          padding: "10px",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "60px",
        }}
      >
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Dropdown apisource={apisource} setapisource={setapisource} />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              pageSize={pageSize}
              category="general"
              sectionName="general"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              country="in"
              pageSize={pageSize}
              category="business"
              sectionName="business"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              key="entertainment"
              pageSize={pageSize}
              category="entertainment"
              sectionName="entertainment"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              key="general"
              pageSize={pageSize}
              category="general"
              sectionName="general"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              key="health"
              pageSize={pageSize}
              category="health"
              sectionName="health"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              key="science"
              pageSize={pageSize}
              category="science"
              sectionName="science"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              key="sports"
              pageSize={pageSize}
              category="sports"
              sectionName="sports"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              key="technology"
              pageSize={pageSize}
              category="technology"
              sectionName="technology"
              apisource={apisource}
              searchQuery={searchQuery}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
