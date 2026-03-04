
import React from "https://esm.sh/react@18"
import { createRoot } from "https://esm.sh/react-dom@18/client"

const element = React.createElement("div", {}, [
    React.createElement("div", {}, [React.createElement("h4", {}, "parent 1"), React.createElement("h4", {}, "parent 1")]),
    React.createElement("div", {}, [React.createElement("h4", {}, "parent 2"), React.createElement("h4", {}, "parent 2")])]
)
const root = createRoot(document.getElementById("root"));
root.render(element);