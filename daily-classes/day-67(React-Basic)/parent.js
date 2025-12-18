import box from "./app.js";
import box2 from "./app2.js";

const parent = () =>
  React.createElement("div", { id: "parent" }, [box(), box2()]);

export default parent;
