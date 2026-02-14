import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { ButtonProps } from '@/types'
import Typo from './Typo'

const Button = ({
    style,
    onPress,
    children,
    loading = false,
}: ButtonProps) => {
    if (loading) {
        return (<View>

        </View>)
    }
    
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Typo style={styles.buttonText}>{children}</Typo>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        marginHorizontal: 'auto',
        marginTop: 40,
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 40,
    },
    buttonText: {
        textAlign: "center", 
        fontSize: 18, 
        color: colors.black, 
    }
})



