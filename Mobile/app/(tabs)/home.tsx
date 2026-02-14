import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import Typo from '@/components/Typo'
import { songs, artists } from "@/data/songs"

const home = () => {
    const navLinks = ["Suggested", "Songs", "Artists", "Albums", "Folders"]
    const recentSongs = songs.slice(0, 5)
    const mostPlayed = songs.slice(5, 11)
    const artistList = artists.slice(0, 7)

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
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} >
                            <Typo style={styles.nav}>{item}</Typo>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <ScrollView style={styles.scrollPage}>
                {/*--------- Recently Played--------------- */}
                <View style={styles.lists}>
                    <View style={styles.listsHeader}>
                        <Typo>Recently Played</Typo>
                        <TouchableOpacity>
                            <Typo style={styles.listsLink}>See All</Typo>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList data={recentSongs}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <View style={styles.recentBox} key={index}>
                                    <Image style={styles.listImage} source={item?.img} />
                                    <Typo numberOfLines={2}
                                        style={styles.recentTitle}>{item?.title}</Typo>
                                </View>
                            )}
                        />
                    </View>
                </View>


                {/*--------- Artists--------------- */}
                <View style={styles.listsArtist}>
                    <View style={styles.listsHeader}>
                        <Typo>Artists</Typo>
                        <TouchableOpacity>
                            <Typo style={styles.listsLink}>See All</Typo>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList data={artistList}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <View style={styles.recentBox} key={index}>
                                    <Image style={styles.artistImage} source={item?.img} />
                                    <Typo numberOfLines={2}
                                        style={styles.recentTitle}>{item?.name}</Typo>
                                </View>
                            )}
                        />
                    </View>
                </View>


                {/*--------- Most Played--------------- */}
                <View style={styles.lists}>
                    <View style={styles.listsHeader}>
                        <Typo>Recently Played</Typo>
                        <TouchableOpacity>
                            <Typo style={styles.listsLink}>See All</Typo>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList data={mostPlayed}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <View style={styles.recentBox} key={index}>
                                    <Image style={styles.listImage} source={item?.img} />
                                    <Typo numberOfLines={2}
                                        style={styles.recentTitle}>{item?.title}</Typo>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.bgDark,
        height: "100%",
        paddingLeft: 15,
    },
    scrollPage: {
        flex: 1, 
        paddingBottom: 60
    }, 
    // lists
    lists: {
        paddingTop: 17,
    },
    listsArtist: {
        paddingTop: 18,
        paddingBottom: 5, 
    },
    listsHeader: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingRight: 15,
        paddingBottom: 15,
    },
    listsLink: {
        color: colors.primary,
        fontWeight: "bold"
    },
    listImage: {
        width: 120,
        height: 120,
        borderRadius: 25,
        marginRight: 13,
    },
    artistImage: {
        width: 120,
        height: 120,
        borderRadius: "50%",
        marginRight: 13,
    },
    recentTitle: {
        textAlign: "center",
        paddingTop: 10,
        fontSize: 17,
        width: "90%",
        fontSize: 14,
    },
    recentBox: {
        width: 135,
    },

    // header
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
        paddingRight: 15,
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