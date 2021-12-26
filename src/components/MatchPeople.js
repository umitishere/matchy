import { useState } from "react";

const MatchPeople = (props) => {

    const matchPeople = () => {
        console.log(props.groupSize);
    }

    return (
        <section className="myForm">
            <hr />
            <button type="button" onClick={matchPeople}>Match People</button>
        </section>
    )
}

export default MatchPeople;