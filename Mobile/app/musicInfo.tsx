import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Typo from '@/components/Typo'
import { colors } from '@/constants/theme'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const musicInfo = () => {
    const router = useRouter()
    const [dotId, setDotId] = useState(1)
    const [image, setImage] = useState(require("../assets/images/fly.png"))

    useEffect(() => {
        router.replace("/(tabs)/home")
    }, [])


    const activeDot = () => {
        const nextId = dotId + 1

        // if(nextId === 1) {
        //     setImage(require("../assets/images/fly.png"))
        // } else 
        if (dotId === 2) {
            setImage(require("../assets/images/girl.jpg"))
        } else if (dotId === 3) {
            setImage(require("../assets/images/moana.jpg"))
        } else if (dotId > 3) {
            router.replace("/(tabs)/home")
        }

        setDotId(nextId)
    }


    return (
        <ImageBackground style={styles.container} source={image} resizeMode='cover'>
            <View style={styles.info}>
                <Typo style={styles.text1}>Download music.</Typo>
                <Typo style={styles.text2}>Discover together.</Typo>

                <View style={styles.allDots}>
                    {[1, 2, 3].map(id => (
                        <TouchableOpacity key={id}
                            style={id === dotId ? styles.active : styles.dot}></TouchableOpacity>
                    ))}
                </View>

                <Button onPress={activeDot} style={styles.button}>Next</Button>
            </View>
        </ ImageBackground >
    )
}

export default musicInfo

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        justifyContent: "flex-end"
    },
    allDots: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 40,
        gap: 10,
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        backgroundColor: colors.neutral300,
    },
    active: {
        backgroundColor: colors.primary,
        width: 32,
        borderRadius: 10,
    },
    info: {
        backgroundColor: colors.bgDark,
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        height: 350
    },
    text1: {
        textAlign: "center",
        fontFamily: "lobster",
        fontSize: 50,
        color: colors.primary,
    },
    text2: {
        textAlign: "center",
        fontSize: 19,
    },
    button: {
        paddingHorizontal: 150,
        marginTop: 50,
    }

})