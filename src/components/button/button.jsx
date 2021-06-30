import React from 'react'

import classNames from 'classnames'

const Button = React.memo((props) => {
    return (
        <button
            className={
                classNames('button', `${props.className || ''}`, {
                    'button--outline': props.outline,
                    'button--bold': props.bold,
                })
            }
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
})

export default Button