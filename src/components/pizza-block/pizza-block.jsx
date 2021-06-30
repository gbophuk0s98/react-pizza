import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'

import classNames from 'classnames'

const availableTypes = ['тонкое', 'традиционное']
const availableSizes = [26, 30, 40]

const PizzaBlock = ({ id: pizzaIdx, imageUrl, name, types, sizes, price, onAddedPizza }) => {

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(availableSizes.indexOf(sizes[0]))
    const [pizzaInfo, setPizzaInfo] = useState({
        pizzaIdx,
        name,
        type: availableTypes[activeType],
        size: availableSizes[activeSize],
        price,
        imageUrl,
        count: 1,
        fullPrice: price,
    })

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
        else {
            setActiveType(idx)
            setPizzaInfo({
                ...pizzaInfo,
                type: availableTypes[idx]
            })
        }
    }

    const onSelectedSize = idx => {
        if (activeSize === idx)
            setActiveSize(null)
        else {
            setActiveSize(idx)
            setPizzaInfo({
                ...pizzaInfo,
                size: availableSizes[idx]
            })
        }
    }

    const handleAddPizza = () => onAddedPizza(pizzaInfo)

    return (
        <div className="main__pizza-list-item" >
            <div className="main__pizza-list-item-img">
                <img src={imageUrl} alt="pizza" width="260px" height="260px" />
            </div>
            <div className="main__pizza-list-item-title">{name}</div>
            <div className="main__pizza-list-item-selection">

                <div className="main__pizza-list-item-selection-pastry">
                    {availableTypes.map((type, idx) => {
                        return (
                            <span
                                key={`${type}_${idx}`}
                                className={classNames(getClasses(types.includes(idx)), {
                                    'selected': activeType === idx
                                })}
                                onClick={() => {
                                    onSelectedType(idx)
                                }}
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
                                key={`${name}_${size}`}
                                className={classNames(getClasses(sizes.includes(size)), {
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
                <div className="main__pizza-list-item-cost-text">от {price} руб.</div>
                <Button
                    outline
                    bold
                    onClick={handleAddPizza}>+ Добавить</Button>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number),
    types: PropTypes.arrayOf(PropTypes.number),
}

PizzaBlock.defaultProps = {
    name: 'unnamed',
    price: 0,
    types: [],
    sizes: [],
}

export default PizzaBlock