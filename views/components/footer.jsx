var React = require('react');


class Footer extends React.Component {
  render() {
    console.log("<Footer> Added")

    return (

      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>

      );
    }
}

module.exports = Footer;