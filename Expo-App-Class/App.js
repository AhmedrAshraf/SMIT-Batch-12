import { Share, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ height: "100%" }}>
      {/* navbar start */}
      <View
        style={{ backgroundColor: "teal", paddingTop: 70, paddingBottom: 20 }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Home
        </Text>
      </View>
      {/* navbar end */}

      <TextInput
        placeholderTextColor={"gray"}
        placeholder="Email"
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 20,
          fontSize: 25,
          borderRadius: 20,
        }}
      />

      <Text
        onPress={() => Share.share({ message: "Hi" })}
        style={{ textAlign: "center", marginTop: "100%", fontSize: 50 }}
      >
        Ahmed
      </Text>

      <Button title="Signup" color="#841584" />
    </View>
  );
}
