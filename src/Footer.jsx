import React from "react";
const date = new Date().getFullYear();

function Footer() {
    return (
        <div>
            <footer>
                <p>CopyRight ⓒ {date}</p>
            </footer>

        </div>
    )
};

export default Footer;