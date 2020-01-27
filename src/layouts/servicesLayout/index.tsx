import React, { ReactElement, useContext } from "react";
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import style from "./style";
import RNPickerSelect from "react-native-picker-select";
import { ServicesContext } from './servicesContext';

export interface ServicesProps {
  navigation: any;
}

const Services = (props: ServicesProps): ReactElement => {
  const { navigation } = props;
  const {setServices, services} = useContext(ServicesContext)

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={{ marginBottom: 50, marginTop: 30 }}>Services</Text>
        <View style={style.inputsBox}>
          <Text style={style.label}>Payment method</Text>
          <RNPickerSelect
            onValueChange={value => setServices({...services, payment: value})}
            items={[
              { label: "Credit", value: "Credit" },
              { label: "Debit", value: "Debit" },
              { label: "Dinner", value: "Dinner" }
            ]}
          />
          <Text style={style.label}>Delivery way</Text>
          <RNPickerSelect
            onValueChange={value => setServices({...services, delivery: value})}
            items={[
              { label: "Delivery to my address", value: "Delivery to my address" },
              { label: "I will withdraw on the spot", value: "I will withdraw on the spot" },
            ]}
          />
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
          onPress={() => navigation.navigate("Confirmation")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Services;
