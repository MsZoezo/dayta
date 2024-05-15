interface Props {
    firstOfMonth: number
}

function StartOfMonthBuffer(props: Props){
    let { firstOfMonth } = props
    console.log(firstOfMonth)
    if (firstOfMonth == 0) return <></>
    return (
        <div id="StartOfMonthBuffer" style={{gridColumnEnd: firstOfMonth + 1}}>

        </div>
    )
}

export default StartOfMonthBuffer