// ---
// title: NodeJs
// date: 05 Oct 2023
// imgUrl: /nodejs-logo.jpg
// desc: Introduction to Backend Engineering - NodeJs
// ---

const NodeJs = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div>
        <h2>How NodeJs works?</h2>
        Firstly, What is NodeJs?
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
          NodeJs is a JavaScript runtime environment.
        </h4>
        <p>
          Traditionally we used to run JavaScript only in the browser (because
          they have JavaScript engines). Thanks to NodeJs we can run JavaScript
          anywhere.
        </p>
        <p>
          We can build HTTP servers using NodeJs. Visit{" "}
          <a href="https://nodejs.org/">NodeJs</a> and download Node.
        </p>
        <p>
          Go to terminal and run the command <code>node -v</code>. If Node is
          succesfully installed, you will see the version.
        </p>
      </div>
      <div>
        <h3>Basics</h3>
        <p>
          Create a <code>index.js</code> file and write the below code.
        </p>
        <img
          src="/nodejs-index.png"
          alt="nodejs-index"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          If you run the command <code>node index.js</code>, it prints{" "}
          <code>hello</code> on the terminal.
          <code>log()</code> is a built-in method which lets you print to the
          console.
        </p>
      </div>
      <div>
        <h3>File I/O</h3>
        <p>
          Using built-in module <code>fs</code> provided by Node, we can
          manipulate file system on the server.
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
          NodeJs for manipulating files on the server
        </h4>
        <p>
          Create a <code>tmp.txt</code> and place <code>hello world !</code> in
          it. Now place the below code in <code>index.js</code>.
        </p>
        <img
          src="/nodejs-fs.png"
          alt="nodejs-fs"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          If you run the program, you will see <code>hello world !</code> on the
          console.
        </p>
        <p>
          Import <code>fs</code> module (built-in). The <code>readFile</code>{" "}
          method takes the file path and callback. The callback will be executed
          when the file is done being read.
        </p>
        <p>
          The data will be in <code>Buffer</code>. We have to convert it to
          string using <code>toString()</code> method.
        </p>
        <p>
          We can write/ append to files. We can even remove files by using{" "}
          <code>fs</code> module.
        </p>
      </div>

      <div>
        <h3>HTTP Server</h3>
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
          NodeJs as HTTP Server - Serve static files or build API endpoints for
          various purposes.
        </h4>
        <img
          src="/nodejs-http.png"
          alt="nodejs-http"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          <code>http</code> module is used for creating http server. If you hit
          the localhost port <code>5000</code>, you will receive the data{" "}
          <code>Hello World</code>.
        </p>
        <p>
          Import <code>http</code> module. The method <code>createServer</code>{" "}
          takes in a callback function. The <code>req</code> and{" "}
          <code>res</code> are Request and Response objects.
        </p>
        <p>
          Request object contains the URL (path params, query params etc), body
          (json, blob etc), headers etc. We can append data to Response object
          that we want to send to the requester.
        </p>
        <p>
          <code>writeHead</code> method lets you set headers. <code>end</code>{" "}
          method lets you end the current response process after sending
          (optional) data in it.
        </p>
        <p>
          Using <code>listen</code> method we can set the port that we want our
          application to run.
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

export default NodeJs;
