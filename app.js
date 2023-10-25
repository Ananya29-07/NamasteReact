//Hello World using JavaScript
let h1 = document.createElement("h1");
h1.innerText = "Hello World using JavaScript";
document.body.appendChild(h1);

//Hello World using React
const heading1 = React.createElement("h1", {}, "Hello World using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

//Creating an Element 
const div = React.createElement("div", {class: "box"}, "Creating an Element");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(div);

/**
 * Create Nested React Elements
 * <div id="parent">
 *    <div id="child">
 *        <h1>Hello World<h1>
 *    </div>
 * </div>
 */

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"},
        [
            React.createElement("h1", {}, "Creating Nested Elements"),
            React.createElement("h2", {}, "in React")
    ]
    )
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);


        
