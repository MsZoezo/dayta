interface Props{
    date: Date
}

function SingleDate(props: Props){
    return <h2 className="Date">
        {props.date.getDate()}
    </h2>
}

export default SingleDate