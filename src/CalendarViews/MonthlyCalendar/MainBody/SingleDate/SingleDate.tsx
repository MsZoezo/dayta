interface Props{
    date: Date
}
/**
 * Gets the element for a single day
 * @param props The necessary information to be passed in
 * @returns A JSX element representing the day.
 */
function SingleDate({ date }: Props){
    return <h2 className="Date">
        {date.getDate()}
    </h2>
}

export default SingleDate