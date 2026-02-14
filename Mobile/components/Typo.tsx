import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { TypeProps } from '@/types'

const Typo = ({
  size = 16,
  color = colors.text,
  fontWeight = "400",
  children,
  fontFamily = "outfit", 
  style,
  textProps = {}, 
  ...props
}: TypeProps) => {

  const textStyle: TextStyle = {
    fontSize: size, 
    color, 
    fontWeight, 
    fontFamily
  }

  return (
    <Text style={[textStyle, style]} {...textProps} {...props} >
        {children}
    </Text>
  )
}

export default Typo

const styles = StyleSheet.create({})

