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
        <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>

        <Text>Mark all read Sort by Time V</Text>
        <Text style={styles.iconeEscondidor}>AAAAAAAAAAAAA</Text>

        <ScrollView style={{ flex: 1 }}>
          <TouchableOpacity style={styles.item}>
            <View horizontal style={styles.item}>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://us.123rf.com/450wm/baiajaku/baiajaku1606/baiajaku160600038/60146044-retrato-de-moda-sobre-uma-mulher-bonita-jovem-com-%C3%B3culos-de-sol.jpg?ver=6",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Claudia Alves</Text>
                  <Text style={styles.text1}>Do more of what you love.</Text>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.iconeNotif}>3</Text>
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
                    uri: "https://thumbs.dreamstime.com/b/homem-confuso-45369085.jpg",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Dani Martinez</Text>
                  <Text style={styles.text1}>Do your own thing.</Text>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.iconeNotif}>1</Text>
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
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeveToyhdJFc0BvMF42hxFAUjCRFC604fgdA&s",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Kimberly Nguyen</Text>
                  <Text style={styles.text1}>Kindness is beautiful.</Text>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.iconeNotif}>1</Text>
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
                    uri: "https://thumbs.dreamstime.com/b/free-happy-woman-enjoying-nature-sunset-freedom-happiness-enjoyment-concept-beautiful-multiracial-asian-caucasian-girl-34800376.jpg",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Mariana Napolitani</Text>
                  <Text style={styles.text1}>Live your purpose.</Text>
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.iconeNotif}>1</Text>
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
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmIKj_tu2-yD8C9bE3EFSI8wSxz66JS6cGw&s",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Olivia Wilson</Text>
                  <Text style={styles.text1}>You got this.</Text>
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
                    uri: "https://i.pinimg.com/750x/c5/9b/e3/c59be373a7ee7557d16398b2d9c4d358.jpg",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Rachelle Beaudry</Text>
                  <Text style={styles.text1}>You're wonderful.</Text>
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
                    uri: "https://i.namu.wiki/i/ZL5k89zdxg4dlH0clp8xS4JGLSTqSczNG-slACr2wTfeWNcSCQJFoo2FQz_q6jaWZypd78gnU1E33-mLhDhuSA.webp",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.text1}>Soo Jin Ae</Text>
                  <Text style={styles.text1}>Keep it simple.</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/6/66/Home_icon_blue-1.png?20201203104446",
            }}
            style={styles.footerIcone}
          />
          <Text style={styles.footerText}>Home</Text>
        </View>

        <View style={styles.footerItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9356/9356566.png",
            }}
            style={styles.footerIcone}
          />
          <Text style={styles.footerText}>Chat</Text>
        </View>

        <View style={styles.footerItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/512/8295/8295013.png",
            }}
            style={styles.footerIcone}
          />
          <Text style={styles.footerText}>Mail</Text>
        </View>

        <View style={styles.footerItem}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/036/885/313/non_2x/blue-profile-icon-free-png.png",
            }}
            style={styles.footerIcone}
          />
          <Text style={styles.footerText}>Profile</Text>
        </View>
      </View>
      <StatusBar style="auto" />
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
    height: 50,
    width: 250,
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
    marginLeft: 5,
    borderRadius: 100,
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
  iconeNotif: {
    fontSize: 12,
    width: 17,
    height: 17,
    textAlign: "center",
    backgroundColor: "#3F60A0",
    borderRadius: 100,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingBottom: 25,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcone: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
    color: "#4F6D9D",
    fontWeight: "bold",
  },
});
