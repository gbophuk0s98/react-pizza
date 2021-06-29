import React, { useEffect, useRef, useState } from 'react'

import arrow from '../../assets/arrow-top.svg'

const classNames = {
    default: 'selection__sorting-popup-list-item',
    active: `selection__sorting-popup-list-item sort--selected`
}

const SortPopup = React.memo(({ items }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const ref = useRef(null)

    const onSelectHandler = () => setIsOpen(false)
    const togglePopup = () => setIsOpen(!isOpen)

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (!e.path.includes(ref.current)) {
                setIsOpen(false)
            }
        })
    }, [])

    return (
        <div className="selection__sorting">

            <img
                src={arrow}
                className={isOpen ? 'selection__sorting-arrow rotated' : 'selection__sorting-arrow'}
                height="7px"
                alt="arrow"
            />

            <span className="selection__sorting-text">Сортировка по</span>
            <span
                className="selection__sorting-selected"
                onClick={togglePopup}
                ref={ref}
            >
                {items && items[isActive].label}
            </span>
            {
                isOpen &&
                <div
                    className="selection__sorting-popup"
                >
                    <ul
                        className="selection__sorting-popup-list"
                        onClick={onSelectHandler}
                    >
                        {items &&
                            items.map((category, idx) => {
                                return (
                                    <li
                                        key={`${category}_${idx}`}
                                        className={isActive === idx ? classNames.active : classNames.default}
                                        onClick={() => setIsActive(idx)}
                                    >
                                        {category.label}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
})

export default SortPopup