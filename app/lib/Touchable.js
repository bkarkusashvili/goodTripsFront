import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform, View } from 'react-native'

export const Touchable = (props) => {
  return Platform.OS === 'android' ? 
        <TouchableNativeFeedback {...props} style={null} background={props.ripple ? TouchableNativeFeedback.Ripple(props.ripple, true) : props.background}>
            <View style={props.style}>{props.children}</View>
        </TouchableNativeFeedback> :
        <TouchableOpacity {...props} style={null}>
            <View style={props.style}>{props.children}</View>
        </TouchableOpacity>
}
