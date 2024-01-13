/**
 * <div id='parent'>
 *  <div id='child'>
 *      <h1 id='heading'>I am heading tag</h1>
 *      <h2 id='heading'>I am Sub heading tag</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", { id: 'parent' },
    React.createElement("div", { id: 'child' },
        [React.createElement("h1", { id: "heading" }, "I am heading tag"),
        React.createElement("h2", { id: "heading" }, "I am sub heading tag")]
    )
)


console.log("parent", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


