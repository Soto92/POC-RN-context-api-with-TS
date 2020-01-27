import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Client from "../layouts/clientLayout";
import Products from "../layouts/productsLayout";
import Services from "../layouts/servicesLayout";
import Confirmation from "../layouts/confirmationLayout";

export default createAppContainer(
  createStackNavigator(
    {
      Client: Client,
      Products: Products,
      Services: Services,
      Confirmation: Confirmation
    },
    {
      headerMode: "none",
      defaultNavigationOptions: {
        animationEnabled: false,
        
      }
    }
  )
);
