// ---
// title: ReactJs
// date: 07 Oct 2023
// imgUrl: /reactjs-logo.jpg
// desc: Frontend Engineering with ReactJs
// ---

const Database = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div>
        <h2>What is Database?</h2>
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
          A database is a systematically organized storage of information,
          allowing easy insertion, updating, analysis, and retrieval of data.
        </h4>

        <p>
          There are several different types of databases, including relational
          databases, NoSQL databases, and in-memory databases.
        </p>
        <p>
          Relational databases are based on the relational model and use SQL
          (Structured Query Language) to store and retrieve data. Here, data is
          organized into tables.
        </p>
        <p>
          NoSQL can be defined as a technique for database design, which helps
          accommodate a wide range of data models, including key-value,
          columnar, documents, or graph data.
        </p>
        <p>
          In this particular blog we will look into MongoDB, which is a NoSQL
          database. Visit{" "}
          <a href="https://www.mongodb.com/try/download/community">MongoDB</a>{" "}
          and download.
        </p>
      </div>
      <div>
        <h3>MongoDB</h3>
        <p>
          MongoDB is a rich open-source and one of the widely recognised NoSQL
          database. It is written in C++ programming language.
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
          MongoDB is a document-oriented database
        </h4>
        <img
          src="/database-functions.jpg"
          alt="reactjs-functions"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <p>
          Database is a physical container for collections. Collection is a
          group of documents and is similar to an RDBMS table. A document is a
          set of key-value pairs. Documents have dynamic schema.
        </p>
        <p>
          MongoDB supports many datatypes such as <code>String</code>,
          <code>Integer</code>, <code>Array</code>, <code>Object</code>,{" "}
          <code>Null</code> etc
        </p>
      </div>
      <div>
        <h4>MongoDB - Operations</h4>
        <p>We can perform CRUD opeartions on database/ collection/ document.</p>
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
          MongoDB is a document-oriented database
        </h4>
        <img
          src="/mongodb-crud-commands.png"
          alt="mongodb-crud-commands"
          style={{ width: "32rem", borderRadius: "0.4rem" }}
        />
        <h5>Popular commands</h5>
        <p>
          Create database - <code>use testDb</code>
          <br />
          Remove database - <code>testDb.dropDatabase()</code>
          <br />
          Create colletion -{" "}
          <code>testDb.createCollection("testCollection")</code>
          <br />
          Remove collection - <code>testDb.testCollection.drop()</code>
          <br />
          Create/ Insert document -{" "}
          <code>testDb.testCollection.insertOne({`"name": "john"`})</code>
          <br />
          Read/ Find document -{" "}
          <code>testDb.testCollection.find({`"name": "john"`})</code>
          <br />
          Update document - <br />
          <code>
            testDb.testCollection.update({`"name": "john"`},{" "}
            {`$set: {"name": "johnny"}`})
          </code>
          <br />
          Remove document -{" "}
          <code>testDb.testCollection.remove({`"name": "john"`})</code>
        </p>
      </div>
      <div>
        <h4>Advantages of MongoDB over RDBMS</h4>
        <ul>
          <li>Schema less</li>
          <li>Easy to scale</li>
          <li>
            Deep query-ability. MongoDB supports dynamic queries on documents
            using a document-based query language that’s nearly as powerful as
            SQL.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Database;
