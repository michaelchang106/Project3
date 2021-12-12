import "./App.css";
import Login from "./Account_Verification/login_page.js";
import CreateAccount from "./Account_Verification/create_account.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main.js";
import Post from "./Posts/Postpage_WithModal.js";
import OfferHelpPage from "./Main Page Components/OfferHelpPage.js";
import SeekHelpPage from "./Main Page Components/SeekHelpPage.js";
//Router, basically you add components here.
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/offerHelp" element={<OfferHelpPage />} />
          <Route path="/seekHelp" element={<SeekHelpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
