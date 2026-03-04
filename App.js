import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const user1 = {
    nome: "João ",
    numero: "81 9 12345678",
  };
  const user2 = { nome: "Ishmael Talicious fish", numero: "81 9 23456678" };
  const user3 = { nome: "Natalia Bernand Fonseca", numero: "81 9 33344455" };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundShape} />
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/54/54290.png",
        }}
        style={{
          zIndex: -1,
          width: 25,
          height: 25,
          backgroundColor: "#fff",
          borderRadius: 10,
          marginLeft: 50,
          marginTop: 50,
        }}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.TextoTopo}>Messages & chat</Text>
        <Text style={styles.UnderlineTexto}>_________________________</Text>
        <ScrollView style={{ flex: 1 }}>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user1.nome}</Text>
                  <Text style={styles.text1}>{user1.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user2.nome}</Text>
                  <Text style={styles.text1}>{user2.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item2}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user3.nome}</Text>
                  <Text style={styles.text1}>{user3.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>

          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user1.nome}</Text>
                  <Text style={styles.text1}>{user1.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user2.nome}</Text>
                  <Text style={styles.text1}>{user2.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item2}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user3.nome}</Text>
                  <Text style={styles.text1}>{user3.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user1.nome}</Text>
                  <Text style={styles.text1}>{user1.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user2.nome}</Text>
                  <Text style={styles.text1}>{user2.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item2}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>{user3.nome}</Text>
                  <Text style={styles.text1}>{user3.numero}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>
        </ScrollView>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },

  backgroundShape: {
    position: "absolute",
    top: -90,
    left: -90,
    width: 220,
    height: 220,
    backgroundColor: "#4F6D9D",
    borderRadius: 250,
    zIndex: -2,
  },

  content: {
    alignItems: "center",
  },

  TextoTopo: { fontSize: 28, marginLeft: 98 },

  UnderlineTexto: {
    fontSize: 24,
    marginLeft: 79,
    padding: 0,
    color: "#475f9f",
  },
  item: {
    height: 40,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  item2: {
    height: 40,
    marginVertical: 5,
    borderRadius: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  icon: {
    width: 40,
    height: 40,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: "#fff",
  },
  iconeEscondidor: {
    color: "#eeeeee",
  },
});
