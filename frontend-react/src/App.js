import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { NavBar } from "./components";
import "./App.scss"
// TODO: add skills
// TODO: add projects
// TODO: add experience
// TODO: make testimonials and companies
// TODO: make custom mail
const App = () => {
    return (
        <div className="app">
            <NavBar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default App;
