import React from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './pages/Admin'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import basicTable from './pages/table/basicTable'
import highTable from './pages/table/highTable'
import Common from './common'
import OrderDetail from './pages/order/detail'
import Order from './pages/order/index'
import City from './pages/city/index'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import Rich from './pages/rich/index'

import BikeMap from './pages/map/bikeMap'

import Permission from './pages/permission'


export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                            </Common>  
                        }
                        />                        
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={basicTable} />
                                    <Route path="/table/high" component={highTable} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path="/bikeMap" component={BikeMap} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/rich" component={Rich} />
                                    <Route path="/permission" component={Permission} />
                                    
                                    <Redirect to="/home" />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}