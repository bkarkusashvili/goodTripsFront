import React, { useContext } from 'react';
import { Text as TextBase } from 'react-native';

import { FontStatus } from '../store';

export const Text = (props) => {
    const fontsLoaded = useContext(FontStatus);
    return (<>
        {fontsLoaded ? (
            <TextBase {...props}>
                {props.children} 
            </TextBase>
        ) : null}
    </>);
}
