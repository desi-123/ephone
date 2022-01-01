import React from "react";
import Phone from "./Phone";
import ephones from "../data/ephones";

function Home() {
    return (
        <section className="ephones">
        {ephones.map((ephone) => {
            return (
            <article key={ephone.id}>
                <Phone ephone={ephone} />
            </article>
            );
        })}
        </section>
    );
}

export default Home;
