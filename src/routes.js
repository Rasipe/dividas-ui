import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Pay from './pages/pay'
import New from './pages/new'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/pay/:id" component={Pay}/>
            <Route path="/schedule/:id" component={Main}/>
            <Route path="/new" component={New}/>
        </Switch>
    </BrowserRouter>
)

export default Routes