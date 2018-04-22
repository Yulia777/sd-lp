import React from 'react';

const DefaultButton = (props) => {
    const buutonClick = () => {
        alert(props.message);
    }
    return(
        <button type={'button'} onClick={buutonClick} className={'button'}>Clicl it</button>
    )
};

export default DefaultButton;