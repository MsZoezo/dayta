interface Props{
    date: Date
}

function SingleDate(props: Props){
    let { date } = props
    return <h2 className="Date">
        {date.getDate()}
    </h2>
}

export default SingleDate