import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import Typo from '@/components/Typo'

const home = () => {
    const navLinks = ["Suggested", "Songs", "Artists", "Albums", "Folders"]

    return (
        <View style={styles.background}>
            {/*--------- Header--------------- */}
            <View style={styles.header}>
                <View style={styles.iconbox}>
                    <Ionicons name="musical-notes" size={35} color={colors.primary} />

                    <Typo style={styles.brand}>TuneVibe</Typo>
                </View>

                <TouchableOpacity>
                    <Ionicons name="search" size={27} color={colors.white} />

                </TouchableOpacity>
            </View>

            {/*--------- NaLinks--------------- */}
            <View>
                <FlatList  
                    data={navLinks}
                    horizontal={true}
                    style={styles.navLinks}
                    renderItem={({item, index}) => (
                        <TouchableOpacity key={index} >
                            <Typo style={styles.nav}>{item}</Typo>
                        </TouchableOpacity>
                    )}
                />
            </View>



            {/*--------- Header--------------- */}
            {/*--------- Header--------------- */}
            {/*--------- Header--------------- */}
            {/*--------- Header--------------- */}
            {/*--------- Header--------------- */}
            {/*--------- Header--------------- */}
            {/*--------- Header--------------- */}

        </View>
    )
}

export default home

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.bgDark, 
        height: "100%", 
        paddingHorizontal: 15, 
    }, 
    nav: {
        color: colors.neutral400, 
        fontSize: 19, 
        marginRight: 25, 
    }, 
    active: {
        color: colors.primary, 
    },
    navLinks: {
        borderBottomWidth: 3, 
        borderBottomColor: colors.neutral400, 
        paddingHorizontal: 12, 
        paddingBottom: 10, 
    }, 
    header: {
        display: "flex", 
        alignItems: "center",
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingVertical: 25, 
    }, 
     iconbox: {
        display: "flex", 
        alignItems: "center", 
        flexDirection: "row", 
        gap: 10, 
      }, 
      brand: {
        fontSize: 29, 
        fontFamily: "lobster", 
      }, 
      icon: {
        backgroundColor: colors.primary, 
        borderRadius: "50%", 
        padding: 10, 
      }
})