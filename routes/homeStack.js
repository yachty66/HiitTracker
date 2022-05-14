import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const screens ={
    LandingPage:{
        screen: LandingPage
    }, 
    StatsFirstPage:{
        screen: StatsFirstPage
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);