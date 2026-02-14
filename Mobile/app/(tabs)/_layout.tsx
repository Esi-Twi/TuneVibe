import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '@/constants/theme'
import Typo from '@/components/Typo'

const TabIcon = ({ icon, title, focused }: {
  title: string
  icon: string
  focused: boolean
}) => {
  if(focused) return (
    <View style={styles.tabBox}>
      <Ionicons name={icon} size={22} style={styles.iconFocused} />
      <Typo style={styles.tabTextFocused}>{title}</Typo>
    </View>
  )


  return (
    <View style={styles.tabBox}>
      <Ionicons name={icon} size={22} style={styles.icon} />
      <Typo style={styles.tabText}>{title}</Typo>
    </View>
  )
}


const Layout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 75,
        backgroundColor: colors.bgDark,
        borderColor: colors.bgDark,
        opacity: 0.79,
        paddingTop: 12
      }
    }}>
      <Tabs.Screen name="home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon title="Home" icon="home" focused={focused} />
          )
        }} />


      <Tabs.Screen name="favorites"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon title="Favorites" icon={"heart-outline"} focused={focused} />

          )
        }} />


      <Tabs.Screen name="playlists"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon title="Playlists" icon="book" focused={focused} />
          )
        }} />


      <Tabs.Screen name="settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon title="Settings" icon="settings" focused={focused} />
          )
        }} />
    </Tabs>
  )
}

export default Layout

const styles = StyleSheet.create({
  icon: {
    color: colors.neutral400,
  },
  iconFocused: {
    color: colors.primary,
  },
  tabBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  tabText: {
    fontSize: 12,
    marginTop: 2
  }, 
  tabTextFocused: {
    fontSize: 12,
    marginTop: 2, 
    color: colors.primary
  }

})


