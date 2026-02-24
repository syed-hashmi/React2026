
import React from "https://esm.sh/react@18"
import { createRoot } from "https://esm.sh/react-dom@18/client"
import  v  from "./test.js";


console.log(v(12, 13));

const element = React.createElement("h4", {}, [React.createElement("div", {}, [React.createElement("h4", {}, "parent1 child"),React.createElement("h4", {}, "parent1 child")]),
React.createElement("div", {}, [React.createElement("h4", {}, "parent2 child"),React.createElement("h4", {}, "parent2 child")])]);

const root = createRoot(document.getElementById("root"));
root.render(element);