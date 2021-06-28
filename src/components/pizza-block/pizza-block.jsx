import React, { useState } from 'react'

import classNames from 'classnames'

const availableTypes = ['тонкое', 'традиционное']
const availableSizes = [26, 30, 40]

const PizzaBlock = ({ pizza }) => {

    const [activeType, setActiveType] = useState(null)
    const [activeSize, setActiveSize] = useState(null)

    const getClasses = isAvailable =>
        classNames('main__pizza-list-item-selection-pastry-button',
            {
                'active': isAvailable,
                'disabled': !isAvailable,
            }
        )

    const onSelectedType = idx => {
        if (activeType === idx)
            setActiveType(null)
        else setActiveType(idx)
    }

    const onSelectedSize = idx => {
        if (activeSize === idx)
            setActiveSize(null)
        else setActiveSize(idx)
    }

    return (
        pizza && <div className="main__pizza-list-item" >
            <div className="main__pizza-list-item-img">
                <img src={pizza.imageUrl} alt="pizza" width="260px" height="260px" />
            </div>
            <div className="main__pizza-list-item-title">{pizza.name}</div>
            <div className="main__pizza-list-item-selection">

                <div className="main__pizza-list-item-selection-pastry">
                    {availableTypes.map((type, idx) => {
                        return (
                            <span
                                key={`${type}_${idx}`}
                                className={classNames(getClasses(pizza.types.includes(idx)), {
                                    'selected': activeType === idx
                                })}
                                onClick={() => onSelectedType(idx)}
                            >
                                {type}
                            </span>
                        )
                    })}
                </div>

                <div className="main__pizza-list-item-selection-pastry">
                    {availableSizes.map((size, idx) => {
                        return (
                            <span
                                key={`${pizza.name}_${size}`}
                                className={classNames(getClasses(pizza.sizes.includes(size)), {
                                    'selected': activeSize === idx,
                                })}
                                onClick={() => onSelectedSize(idx)}
                            >
                                {size} см.
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="main__pizza-list-item-cost">
                <div className="main__pizza-list-item-cost-text">{pizza.price} руб.</div>
                <div className="main__pizza-list-item-cost-button">+ Добавить</div>
            </div>
        </div>
    )
}

export default PizzaBlock