
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');


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
      source={require('../../../../assets/background.png')}
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
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address"
            placeholderTextColor="white" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}
            placeholderTextColor="white" />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEsqueceuSenhaVisible(true)}>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Esqueceu Senha */}
        <Modal visible={isEsqueceuSenhaVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Recuperar Senha</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setEsqueceuSenhaVisible(false)}>
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal Inserir Código */}
        <Modal visible={isInserirCodigoVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Insira o código</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setInserirCodigoVisible(false)}>
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <TextInput style={styles.input} placeholder="Código" secureTextEntry={true} />
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal Trocar Senha */}
        <Modal visible={isTrocarSenhaVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Trocar Senha</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setTrocarSenhaVisible(false)}>
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  BGImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'

  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  box1: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 20,
    width: '80%',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    color: 'white'

  },
  pickerContainer: {
    height: 50,
    width: '65%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
    overflow: 'hidden',
    color: 'white',
    padding: 0
  },
  picker: {
    height: 30,
    left: -9,
    width: '100%',
    color: 'white',
    padding: 0,
  },
  button: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#007bff',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '80%',
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#aaa',
  },
  modalButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
});

export default LoginApp