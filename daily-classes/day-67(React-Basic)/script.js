import box from "./app.js";
import box2 from "./app2.js";

const root = ReactDOM.createRoot(document.querySelector("#container"));

root.render([box(), box2()]);
