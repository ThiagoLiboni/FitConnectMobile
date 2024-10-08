import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    width: "100%",
  },
  bgfc: {
    width: "200%", // 200% para criar a ilusão de movimento
    height: "200%",
    backgroundColor: "lightblue", // Cor base
    position: "absolute",
    top: "-50%",
    left: "-50%",
  },
  fc: {
    width: "90%",
    height: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.333)",
    backdropFilter: "blur(3px)", // Em React Native, isso seria via blur library
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontFamily: "Montserrat", // Montserrat precisa ser carregada via link ou pacote
    color: "#ffffff",
    marginVertical: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    color: "#000000",
    textAlign: "center",
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
