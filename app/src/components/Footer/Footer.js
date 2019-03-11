import React, { Component } from 'react';
import {  Button, Jumbotron } from 'react-bootstrap';

import '../../css/main.css';

class Footer extends Component {
  render() {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">

                <div className="footer-copyright text-center py-3">© 2019 Harry Walker:
                    <a href="https://harry-walker.net/" target="blank"> Harry-Walker.net</a>
                </div>

            </footer>

        </div>
    )
  }
}

export default Footer;
