// ---
// title: ReactJs
// date: 07 Oct 2023
// imgUrl: /reactjs-logo.jpg
// desc: Frontend Engineering with ReactJs
// ---

const ReactJs = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div>
        <h2>What is ReactJs?</h2>
        As the official ReactJs docs say, ReactJs is nothing but ..
        <h4
          style={{
            textAlign: "center",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "74%",
            borderRadius: "0.4rem",
          }}
        >
          A JavaScript Library for building User Interfaces
        </h4>
        <p>
          We will look at things one by one that ReactJs offers to better
          understand why it is the most loved library for web.
        </p>
      </div>
      <div>
        <h3>Component</h3>
        <p>
          React uses Component Based architecture. The whole UI can be
          de-composed into small, re-usable components.
        </p>
        <h4
          style={{
            textAlign: "center",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "74%",
            borderRadius: "0.4rem",
          }}
        >
          A component is an independent, reusable code block.
        </h4>
        <img
          src="/reactjs-component-architecture.png"
          alt="reactjs-component-architecture"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          As you can see in the image, the UI is divided into multiple small,
          re-usable components.
        </p>
        <p>
          The <code>ProductRow</code> component is rendered differently by
          passing data via props. Okay, but what are Props? Don't worry.. we
          will get to it.
        </p>
        <p>
          The <code>FilterableProductTable</code> is the Parent component of two
          Child components <code>SearchBar</code> and <code>ProductTable</code>.
        </p>
        <p>
          Data (state) can be shared between components. Parent to Child (via
          props), Child to Parent. (pass function prop. Child calls that using
          data)
        </p>
      </div>
      <div>
        <h3>Virtua DOM</h3>
        <p>
          Virtual DOM is the virtual representation of Real DOM. React update
          the state changes in Virtual DOM first and then it syncs with Real
          DOM.
        </p>
        <h4
          style={{
            textAlign: "center",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "74%",
            borderRadius: "0.4rem",
          }}
        >
          Virtual DOM - Virtual Document Object Model
        </h4>
        <img
          src="/reactjs-virtual-dom.png"
          alt="reactjs-virtual-dom"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          Runs diffing algorithm to compare the previous created component tree
          with the new one and does Reconciliation.
        </p>
      </div>
      <div>
        <h3>Props and State</h3>
        <h4
          style={{
            textAlign: "center",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "74%",
            borderRadius: "0.4rem",
          }}
        >
          Props (Properties) is data which is passed from Parent to Child. State
          is maintained by the component itself. Component re-renders if State
          or Props changes.
        </h4>
        <img
          src="/reactjs-state-props.png"
          alt="reactjs-state-props"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          Okay. That's lot. Lets understand. (<code>useState</code> - more on
          this later)
        </p>
        <p>
          Greet is Functional component (ReactJs has Class components too).
          HTML-like markup inside a JavaScript function is JSX. (syntax
          extension for JavaScript)
        </p>
        <p>
          It receives <code>name</code> as prop from it's Parent and renders it.
        </p>
        <p>
          <code>count</code> is state, which is maintained in the component
          itself. <code>setCount</code> function is used to manipulate{" "}
          <code>count</code>.
        </p>
        <p>
          Component is written using JSX, Syntax extension to JavaScript. Most
          React projects use JSX for its convenience. It makes defining
          components easier.
        </p>
      </div>
      <div>
        <h3>Hooks</h3>
        <h4
          style={{
            textAlign: "center",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "74%",
            borderRadius: "0.4rem",
          }}
        >
          Hooks let you use different React features from your components.
        </h4>
        <img
          src="/reactjs-hooks.png"
          alt="reactjs-hooks"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>Few important hooks include..</p>
        <p>
          <code>useState</code> - State lets a component remember information.
          (string, number, object etc) <code>useState</code> takes initial state
          value as argument. <code>isOnline</code> is the state.{" "}
          <code>setIsOnline</code> lets you manipulate it.
        </p>
        <p>
          <code>useRef</code> - Hook that lets you reference a value that’s not
          needed for rendering. (timeoutId)
        </p>
        <p>
          <code>useEffect</code> - Effects let to perform actions like fetching,
          state manipultion etc based on the dependencies you provide.
        </p>
        <p>
          <code>useContext</code> - Lets you read and subscribe to
          context(state) from your Component.
        </p>
        <p>
          <code>useFetch</code> - We can build our own custom hooks like this
          one. This hook lets you make fetch calls with ease by customization.
        </p>
        <h4
          style={{
            textAlign: "center",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "74%",
            borderRadius: "0.4rem",
          }}
        >
          Hope you liked the blog. Thanksss !
        </h4>
      </div>
    </div>
  );
};

export default ReactJs;
