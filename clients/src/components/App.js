import React from 'react'
import { Router, Route, Switch} from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import BreadCrumb from './Breadcrumb'
import history from '../history'

export default function App (props) {
    return <div className="pusher">
               <Router history={history}>
                  <div className="ui vertical segment">
                      <div className="ui container">
                          <Header />
                          <BreadCrumb {...props} />
                          <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/show/:id" exact component={StreamShow} />
                            <Route path="/streams/breadcrumbs" exact component={BreadCrumb} />
                          </Switch>
                      </div>
                  </div>
                </Router>
            </div>

}