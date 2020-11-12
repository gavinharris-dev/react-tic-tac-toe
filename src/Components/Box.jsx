export function Box(props) {

    let style = {...styles.box};

    if (props.value.error) {
        style.borderColor = 'red';
    }

    return (
        <div className={'Box'} style={style} onClick={props.onClick}>
            <p>{props.value.value}</p>
        </div>
    )
}

const styles = {
    box: {
        backgroundColor: 'silver'
    }
}