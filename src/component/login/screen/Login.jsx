import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import { styles } from "../../../styles/loginStyles";

import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("window");

const LoginApp = () => {
  const [selectedValue, setSelectedValue] = useState("0");
  const [loading, setLoading] = useState(false);
  const [isEsqueceuSenhaVisible, setEsqueceuSenhaVisible] = useState(false);
  const [isInserirCodigoVisible, setInserirCodigoVisible] = useState(false);
  const [isTrocarSenhaVisible, setTrocarSenhaVisible] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Aqui vai o código para realizar o login
    setLoading(false);
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.BGImage} // Corrigido aqui
    >
      <View style={styles.container}>
        {/* Loading Overlay */}
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.loadingText}>Carregando...</Text>
          </View>
        )}

        {/* Login Form */}
        <View style={styles.box1}>
          <Text style={styles.title}>Fazer Login</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              dropdownIconColor="white"
            >
              <Picker.Item label="Cliente" value="0" />
              <Picker.Item label="Funcionário" value="1" />
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEsqueceuSenhaVisible(true)}>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Esqueceu Senha */}
        <Modal
          visible={isEsqueceuSenhaVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Recuperar Senha</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setEsqueceuSenhaVisible(false)}
              >
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal Inserir Código */}
        <Modal
          visible={isInserirCodigoVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Insira o código</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setInserirCodigoVisible(false)}
              >
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Código"
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal Trocar Senha */}
        <Modal
          visible={isTrocarSenhaVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Trocar Senha</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setTrocarSenhaVisible(false)}
              >
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default LoginApp;
