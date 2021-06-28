import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import { Header } from '../index'
import { CartPage, HomePage } from '../../pages'

import '../../scss/app.scss'

const App = () => {


    const [pizzas, setPizzas] = useState([])

    // useEffect(() => {

    //     axios.get('http://localhost:3000/db.json')
    //         .then(res => setPizzas(res.data.pizzas))

    // }, [])

    return (
        <div className="container">
            <div className="content">
                <Header />
                <Switch>
                    <Route path={'/'} exact>
                        <HomePage pizzas={pizzas} />
                    </Route>
                    <Route path={'/cart'} exact component={CartPage} />
                    <Redirect to={'/'} />
                </Switch>
            </div>
        </div>
    )
}
export default App
