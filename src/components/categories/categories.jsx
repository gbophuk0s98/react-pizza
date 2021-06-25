import React, { useState } from 'react'

const Categories = ({ items, onClick }) => {

    const [classNames,] = useState({
        default: 'selection__filters-list-item',
        active: `selection__filters-list-item item--selected`
    })

    const [itemSelected, setItemSelected] = useState(0)

    if (!items)
        return <span>Список пуст</span>

    return (
        <>
            <div className="selection__filters">
                <ul className="selection__filters-list">

                    {items.map((name, idx) => {
                        return (
                            <li
                                className={itemSelected === idx ? classNames.active : classNames.default}
                                key={`${name}_${idx}`}
                                onClick={() => {
                                    setItemSelected(idx)
                                    onClick(name)
                                }}
                            >
                                {name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Categories