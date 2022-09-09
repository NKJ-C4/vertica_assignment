import React from "react";
import Content from "../components/Content";
import Page2Footer from "../components/Page2Footer";
import "../Page2.css"
const Page2 = () => {
    return (
        <div className="page2-container">
            <div className="page2-header">
                <h2>Page 2</h2>
            </div>
            <Content />
            <Page2Footer />
        </div>
    )
}

export default Page2;