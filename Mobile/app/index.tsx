import { colors } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import Typo from "@/components/Typo";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.replace("/musicInfo")
    }, 1500)
  }, [])
  

  return (
    <View style={styles.background}>

      <View style={styles.iconbox}>
        <Ionicons name="musical-notes" size={35} color={colors.white} style={styles.icon} />

        <Typo style={styles.brand}>TuneVibe</Typo>
      </View>

      <View>
        <ActivityIndicator size={60} color={colors.primary} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.bgDark, 
    height: "100%", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingVertical: "65%"
  }, 
  iconbox: {
    display: "flex", 
    alignItems: "center", 
    flexDirection: "row", 
    gap: 15, 
  }, 
  brand: {
    fontSize: 55, 
    fontFamily: "lobster", 
  }, 
  icon: {
    backgroundColor: colors.primary, 
    borderRadius: "50%", 
    padding: 10, 
  }
})

