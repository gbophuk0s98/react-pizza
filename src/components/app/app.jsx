import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../index'
import { CartPage, HomePage } from '../../pages'

import '../../scss/app.scss'

const App = () =>
    <div className="container">
        <div className="content">
            <Header />
            <Switch>
                <Route path={'/'} exact component={HomePage} />
                <Route path={'/cart'} exact component={CartPage} />
                <Redirect to={'/'} />
            </Switch>
        </div>
    </div>

export default App
