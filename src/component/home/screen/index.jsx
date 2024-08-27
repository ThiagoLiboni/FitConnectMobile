import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/indexStyles";

import { useNavigation } from "@react-navigation/native";

// const { width, height } = Dimensions.get('window');

function AppStart() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bgfc}>
        <View style={styles.fc}>
          <Image
            source={require("../../../../assets/fc2.png")}
            style={styles.image}
          />
          <Text style={styles.title}>
            <Text style={styles.bold}>FIT</Text> CONNECT
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AppStart;
