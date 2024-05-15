interface Props {
    FirstOfMonth: number
}

function StartOfMonthBuffer(props: Props){
    if (props.FirstOfMonth == 0) return <></>
    return (
        <div id="StartOfMonthBuffer" style={{gridColumnEnd: props.FirstOfMonth + 1}}>

        </div>
    )
}

export default StartOfMonthBuffer