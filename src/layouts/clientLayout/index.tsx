import React, { ReactElement, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from "react-native";
import style from "./style";
import { ClientContext } from "./clientContext";

export interface ClientProps {
  navigation: any;
}

const Client = (props: ClientProps): ReactElement => {
  const { navigation } = props;
  const { setClient, client } = useContext(ClientContext);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={{ marginBottom: 50, marginTop: 30 }}>Client</Text>
        <View style={style.inputsBox}>
          <View>
            <Text style={style.label}>Enter your name</Text>
            <TextInput
              style={style.input}
              placeholder="Name"
              onChangeText={text => setClient({ ...client, name: text })}
            />
          </View>
          <View>
            <Text style={style.label}>Enter your age</Text>
            <TextInput
              style={style.input}
              placeholder="Age"
              onChangeText={text => setClient({ ...client, age: text })}
            />
          </View>
          <View>
            <Text style={style.label}>Enter your gender</Text>
            <TextInput
              style={style.input}
              placeholder="Gender"
              onChangeText={text => setClient({ ...client, gender: text })}
            />
          </View>
        </View>
      </View>

      <View style={style.footerNavigator}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Products")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Client;
