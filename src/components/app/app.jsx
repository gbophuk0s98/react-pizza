import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import axios from 'axios'
import { setPizzas } from '../../redux/actions/pizzas'

import { Header } from '../index'
import { CartPage, HomePage } from '../../pages'

import '../../scss/app.scss'


class App extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(res => this.props.setPizzas(res.data.pizzas))
    }

    render() {

        console.log(this.props.pizzas)
        return (
            <div className="container">
                <div className="content">
                    <Header />
                    <Switch>
                        <Route path={'/'} exact>
                            <HomePage items={this.props.pizzas} />
                        </Route>
                        <Route path={'/cart'} exact component={CartPage} />
                        <Redirect to={'/'} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pizzas: state.pizzas.items
    }
}


export default connect(mapStateToProps, { setPizzas })(App)
