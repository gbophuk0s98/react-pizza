import React from 'react'

import classNames from 'classnames'

const Button = (props) => {
    return (
        <button
            className={
                classNames('button', {
                    'button--outline': props.outline,
                    'button--bold': props.bold,
                })
            }
        >
            {props.children}
        </button>
    )
}

export default Button