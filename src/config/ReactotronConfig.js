import Reatotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reatotron.configure({host: '192.168.100.54'})
        .useReactNative()
        .connect();
    console.tron = tron;
    tron.clear();
}
