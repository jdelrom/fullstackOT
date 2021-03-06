import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-blurb">
                    <p>openMesa was built by JD Romero.  Aimed to function like OpenTable</p>
                </div>
                <div>
                    <ul className="footer-links">
                        <li><a href="https://jdelrom.github.io/portfolio/" target="_blank"><i className="fa fa-laptop"></i><span>Portfolio</span></a></li>
                        <li><a href="https://github.com/jdelrom" target="_blank"><i className="fab fa-github"></i><span>Github</span></a></li>
                    </ul>
                 </div>   
            </div>
        </footer>
    );
};
export default Footer;