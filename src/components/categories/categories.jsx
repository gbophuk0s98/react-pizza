import React from 'react'

const classNames = {
    default: 'selection__filters-list-item',
    active: `selection__filters-list-item item--selected`
}

const Categories = React.memo(({ categoryIdx, items, onSelectCategory }) => {

    if (!items)
        return <span>Список пуст</span>

    return (
        <>
            <div className="selection__filters">
                <ul className="selection__filters-list">

                    {items.map((name, idx) => {
                        return (
                            <li
                                className={categoryIdx === idx ? classNames.active : classNames.default}
                                key={`${name}_${idx}`}
                                onClick={() => onSelectCategory(idx)}
                            >
                                {name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
})

export default Categories