import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Dav N. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Near West Hills Mall, Dav N. Repairs provides a trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Dav N. Repairs
          <br />
          Hardware Shop
          <br />
          Westhills Accra, 12345
          <br />
          <a href="tel:+233542335954">(054) 233-5954</a>
        </address>
        <br />
        <p>Owner: David Nartey</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
