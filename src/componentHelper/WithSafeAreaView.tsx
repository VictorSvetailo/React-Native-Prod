import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';


type WithSafeAreaViewType = {
    children: JSX.Element
}

export const WithSafeAreaView: FC<WithSafeAreaViewType> = ({children}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    );
}