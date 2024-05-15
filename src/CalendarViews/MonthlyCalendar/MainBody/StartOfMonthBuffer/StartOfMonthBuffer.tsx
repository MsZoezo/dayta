interface Props {
    firstOfMonth: number
}

/**
 * Creates a buffer div for the start of the month
 * @param props The information needed to be passed in
 * @returns If the first day is a sunday, an empty element. 
 *          Otherwise, a buffer element between sunday and the first date.
 */
function StartOfMonthBuffer(props: Props){
    let { firstOfMonth } = props
    if (firstOfMonth == 0) return <></>
    return (
        <div id="StartOfMonthBuffer" style={{gridColumnEnd: firstOfMonth + 1}}>

        </div>
    )
}

export default StartOfMonthBuffer