import React, { useEffect, useRef, useState } from 'react'

const SortPopup = ({ items }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const ref = useRef(null)

    const [classNames,] = useState({
        default: 'selection__sorting-popup-list-item',
        active: `selection__sorting-popup-list-item sort--selected`
    })

    const onSelectHandler = () => setIsOpen(false)
    const togglePopup = () => setIsOpen(!isOpen)

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (!e.path.includes(ref.current) && isOpen) {
                setIsOpen(false)
            }
        })
    }, [])

    return (
        <div className="selection__sorting">
            <span className="selection__sorting-text">Сортировка по</span>
            <span
                className="selection__sorting-selected"
                onClick={togglePopup}
                ref={ref}
            >
                {items && items[isActive]}
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
                                        {category}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default SortPopup