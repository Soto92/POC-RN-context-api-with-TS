import React, { ReactElement, useContext } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { ClientContext } from "../clientLayout/clientContext";
import { ProductContext } from "../productsLayout/productsContext";
import { ServicesContext } from "../servicesLayout/servicesContext";

export interface ConfirmationProps {
  navigation: any;
}

const Confirmation = (props: ConfirmationProps): ReactElement => {
  const { navigation } = props;
  const { client } = useContext(ClientContext);
  const { products } = useContext(ProductContext);
  const { services } = useContext(ServicesContext);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={{ marginBottom: 50, marginTop: 30 }}>Confirmation</Text>
        <View>
          <View style={style.card}>
            <Text>Name: {client.name ? client.name : "-"}</Text>
            <Text>Age: {client.age ? client.age : "-"}</Text>
            <Text>Gender: {client.gender ? client.gender : "-"}</Text>
            <View style={style.buttonBox}>
              <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("Client")}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.card}>
            <Text>Type of bread: {products.bread ? products.bread : "-"}</Text>
            <Text>
              Type of cheese: {products.cheese ? products.cheese : "-"}
            </Text>
            <Text>Meat: {products.meat ? products.meat : "-"}</Text>
            <Text>Salad 1: {products.salad1 ? products.salad1 : "-"}</Text>
            <Text>Salad 2: {products.salad2 ? products.salad2 : "-"}</Text>
            <Text>Sauce: {products.sauce ? products.sauce : "-"}</Text>
            <View style={style.buttonBox}>
              <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("Products")}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.card}>
            <Text>Payment: {services.payment ? services.payment : "-"}</Text>
            <Text>Delivery: {services.delivery ? services.delivery : "-"}</Text>
            <View style={style.buttonBox}>
              <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("Services")}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={style.footerNavigator}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.goBack()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.push("Client")}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;
