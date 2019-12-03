import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./profile"; 

// -------------------- uncomment below for signup page
// import App from "./main";


import * as serviceWorker from "./serviceWorker";


ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// export default firebase.auth();
