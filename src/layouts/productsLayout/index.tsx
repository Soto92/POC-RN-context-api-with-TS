import React, { ReactElement, useContext } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import style from "./style";
import { ProductContext } from "./productsContext";

export interface ProductsProps {
  navigation: any;
}

const Products = (props: ProductsProps): ReactElement => {
  const { navigation } = props;
  const { products, setProducts } = useContext(ProductContext);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={{ marginBottom: 50, marginTop: 30 }}>
          Make your burger
        </Text>
        <View style={style.inputsBox}>
          <Text style={style.label}>Type of bread</Text>
          <RNPickerSelect
            onValueChange={value => setProducts({ ...products, bread: value })}
            items={[
              { label: "Brioche", value: "Brioche" },
              { label: "Ciabatta", value: "Ciabatta" },
              { label: "American", value: "American" }
            ]}
          />
          <Text style={style.label}>Salad 1</Text>
          <RNPickerSelect
            onValueChange={value => setProducts({ ...products, salad1: value })}
            items={[
              { label: "Tomato", value: "Tomato" },
              { label: "Cucumber", value: "Cucumber" },
              { label: "Bell pepper", value: "Bell pepper" }
            ]}
          />
          <Text style={style.label}>Salad 2</Text>
          <RNPickerSelect
            onValueChange={value => setProducts({ ...products, salad2: value })}
            items={[
              { label: "Onion", value: "Onion" },
              { label: "Lettuce", value: "Lettuce" },
              { label: "Arugula", value: "Arugula" }
            ]}
          />
          <Text style={style.label}>Type of meat</Text>
          <RNPickerSelect
            onValueChange={value => setProducts({ ...products, meat: value })}
            items={[
              { label: "Bovine", value: "Bovine" },
              { label: "Chicken", value: "Chicken" },
              { label: "Bacon", value: "Bacon" }
            ]}
          />
          <Text style={style.label}>Type of cheese</Text>
          <RNPickerSelect
            onValueChange={value => setProducts({ ...products, cheese: value })}
            items={[
              { label: "Mozzarella", value: "Mozzarella" },
              { label: "Cheddar", value: "Cheddar" },
              { label: "Gorgonzola", value: "Gorgonzola" }
            ]}
          />
          <Text style={style.label}>Type of sauce</Text>
          <RNPickerSelect
            onValueChange={value => setProducts({ ...products, sauce: value })}
            items={[
              { label: "Spicy", value: "Spicy" },
              { label: "ketchup", value: "ketchup" },
              { label: "Mustard and honey", value: "Mustard and honey" }
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
          onPress={() => navigation.navigate("Services")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Products;
