import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LandingPage from './LandingPage'
import StatsFirstPage from './StatsFirstPage'

const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "LandingPage" component = {LandingPage} title = "LandingPage" initial = {true} />
          <Scene key = "statsFirstPage" component = {StatsFirstPage} title = "StatsFirstPage" />
       </Scene>
    </Router>
 )
 export default Routes