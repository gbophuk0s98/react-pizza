import React from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import { setPizzas } from '../../redux/actions/pizzas'

import { Header } from '../index'
import { CartPage, HomePage } from '../../pages'

import '../../scss/app.scss'

const App = () => {
    const dispatch = useDispatch()

    window.test = () => {
        axios.get('http://localhost:3000/pizzas?_order=asc&_sort=price')
            .then(res => dispatch(setPizzas(res.data.pizzas)))
    }

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas?_order=asc&_sort=price')
            .then(res => dispatch(setPizzas(res.data)))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content">
                <Header />
                <Switch>
                    <Route path={'/'} exact>
                        <HomePage />
                    </Route>
                    <Route path={'/cart'} exact component={CartPage} />
                    <Redirect to={'/'} />
                </Switch>
            </div>
        </div>
    )
}

export default App
