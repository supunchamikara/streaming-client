import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./components/streams/stream-create.component";
import StreamEdit from "./components/streams/stream-edit.component";
import StreamDelete from "./components/streams/stream-delete.component";
import StreamList from "./components/streams/stream-list.component";
import StreamShow from "./components/streams/stream-show.component";

import Header from "./components/header/header.component";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
