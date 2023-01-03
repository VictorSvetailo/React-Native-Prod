import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    SocialNetwork: {myName: string, age?: number} | undefined;
    Gallery: undefined;
};

export type HomeType = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type SocialNetworkType = NativeStackScreenProps<RootStackParamList, 'SocialNetwork'>;
export type GalleryType = NativeStackScreenProps<RootStackParamList, 'Gallery'>;



////npx expo start --clear
