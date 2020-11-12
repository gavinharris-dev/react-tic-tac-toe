import React, {useState} from 'react';


export function Box(props) {
    return (
        <div className={'Box'} style={styles.box} onClick={props.onClick}>
            <p>{props.value}</p>
        </div>
    )
}

const styles = {
    box: {
        backgroundColor: 'silver'
    }
}