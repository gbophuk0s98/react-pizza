import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import arrow from '../../assets/arrow-top.svg'

const classNames = {
    default: 'selection__sorting-popup-list-item',
    active: `selection__sorting-popup-list-item sort--selected`
}

const SortPopup = React.memo(({ items, sortType, onClickSortType }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isActiveIdx, setIsActiveIdx] = useState(items.findIndex(({ type }) => type === sortType))
    const ref = useRef(null)

    const onSelectHandler = () => setIsOpen(false)
    const togglePopup = () => setIsOpen(!isOpen)

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            const path = e.path || (e.composedPath && e.composedPath())
            if (!path.includes(ref.current)) {
                setIsOpen(false)
            }
        })
    }, [])

    useEffect(() => {
        setIsActiveIdx(items.findIndex(({ type }) => type === sortType))
    }, [sortType, items])

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
                {items && items[isActiveIdx].label}
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
                                        className={isActiveIdx === idx ? classNames.active : classNames.default}
                                        onClick={() => onClickSortType(idx)}
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

SortPopup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortType: PropTypes.string.isRequired,
    onClickSortType: PropTypes.func
}

SortPopup.defaultProps = {
    items: [], sortType: 'popular'
}

export default SortPopup