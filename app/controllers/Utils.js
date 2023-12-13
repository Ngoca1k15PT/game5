import { Dimensions } from 'react-native'

export default {
    screenSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    colors: {
        main: '#E27A07'
    },
    images: {
        lan1: require('../assets/images/lan1.png'),
        lan2: require('../assets/images/lan2.png'),
        lan3: require('../assets/images/lan3.png'),
        lan4: require('../assets/images/lan4.png'),
        lan5: require('../assets/images/lan5.png'),
        coin: require('../assets/images/coin.png'),
    }
}

export const ratioH = (value) => {
    return (value * Dimensions.get('screen').height) / Dimensions.get('screen').width
}
