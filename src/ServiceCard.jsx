
function Card (props) {
    return (
        <main className="main">
            <div className= {`fa {props.icon}`}>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <p>Learn more</p>
            </div>
        </main>
    )
}

export default Card;