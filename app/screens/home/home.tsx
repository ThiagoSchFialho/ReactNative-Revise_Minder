import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Revise Minder</Text>
    </View>
  );
}
