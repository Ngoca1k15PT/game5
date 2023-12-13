import {
    Alert,
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Utils from '../controllers/Utils'

const GameScreen = ({ onClose }) => {
    const [score, setScore] = useState(1000)
    const [yourBet, setYourBet] = useState(100)
    const [result, setResult] = useState('Play Now !!!')
    const [isPlaying, setIsPlaying] = useState(false)
    const isFirstOpen = useRef(true)
    const [item1, setItem1] = useState(null)
    const [item2, setItem2] = useState(null)
    const [item3, setItem3] = useState(null)
    const [item4, setItem4] = useState(null)
    const [item5, setItem5] = useState(null)
    const [item6, setItem6] = useState(null)
    const [item7, setItem7] = useState(null)
    const [item8, setItem8] = useState(null)
    const [item9, setItem9] = useState(null)
    const [item10, setItem10] = useState(null)
    const [item11, setItem11] = useState(null)
    const [item12, setItem12] = useState(null)
    const [item13, setItem13] = useState(null)
    const [item14, setItem14] = useState(null)
    const [item15, setItem15] = useState(null)

    const items = [
        Utils.images.lan1,
        Utils.images.lan2,
        Utils.images.lan3,
        Utils.images.lan4,
        Utils.images.lan5,
        Utils.images.coin,
    ]

    const handleMinusBet = () => {
        if (yourBet == 10) {
            return
        }
        setYourBet((yourBet) => yourBet - 10)
    }

    const handlePlusBet = () => {
        if (yourBet == score) {
            return
        }
        setYourBet((yourBet) => yourBet + 10)
    }

    const handleCalculateScore = () => {
        let currentScore = 0
        if (item4 == item5 && item5 == item6) {
            currentScore = yourBet * 5
            setResult('YOU WON ' + currentScore)
        } else if (item4 == item5 || item5 == item6 || item4 == item6) {
            currentScore = yourBet * 2
            setResult('YOU WON ' + currentScore)
        } else {
            currentScore = -yourBet
            setResult('YOU LOSE ' + yourBet)
        }
        setScore((preScore) => preScore + currentScore)
    }

    const handleSpin = () => {
        if (yourBet > score) {
            Alert.alert('Notification', 'Please adjust your bet?', [
                {
                    text: 'OK'
                }
            ])
            return
        }
        let count = 0
        setResult('')
        setIsPlaying(true)
        const intervalId = setInterval(() => {
            if (count >= 1000) {
                clearInterval(intervalId)
                setIsPlaying(false)
            } else {
                spin()
                count += 200
            }
        }, 200)
    }

    const spin = () => {
        setItem1(Math.floor(Math.random() * items.length))
        setItem2(Math.floor(Math.random() * items.length))
        setItem3(Math.floor(Math.random() * items.length))
        setItem4(Math.floor(Math.random() * items.length))
        setItem5(Math.floor(Math.random() * items.length))
        setItem6(Math.floor(Math.random() * items.length))
        setItem7(Math.floor(Math.random() * items.length))
        setItem8(Math.floor(Math.random() * items.length))
        setItem9(Math.floor(Math.random() * items.length))
        setItem10(Math.floor(Math.random() * items.length))
        setItem11(Math.floor(Math.random() * items.length))
        setItem12(Math.floor(Math.random() * items.length))
        setItem13(Math.floor(Math.random() * items.length))
        setItem14(Math.floor(Math.random() * items.length))
        setItem15(Math.floor(Math.random() * items.length))
    }

    useEffect(() => {
        spin()
    }, [])

    useEffect(() => {
        if (!isPlaying && !isFirstOpen.current) {
            handleCalculateScore()
        }
        isFirstOpen.current = false
    }, [isPlaying])

    useEffect(() => {
        if (score == 0) {
            Alert.alert('Game Over', 'Click OK to play again', [
                {
                    text: 'OK',
                    onPress: () => {
                        setYourBet(10)
                        setScore(1000)
                        setResult('Play Now !!!')
                    }
                }
            ])
        }
    }, [score])

    return (
        <View
            style={{
                flex: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}
        >
            <StatusBar hidden={true} />
            <ImageBackground
                style={{
                    backgroundColor: 'gray',
                    height: '100%',
                    aspectRatio: 2112/ 1080
                }}
                source={require('../assets/images/img_bg.jpg')}
                resizeMethod='contain'
            >
                <View style={styles.topView}>   
                     <Text
                        style={{
                            color: 'white',
                            fontSize: 10,
                            marginTop: 10,
                            fontWeight: 'bold',
                            marginLeft: '50%'
                        }}
                    >
                        {score}
                    </Text>
                </View>
                <View style={styles.contentView}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            paddingVertical: '2%'
                        }}
                    >
                        <Image source={items[item1]} style={styles.itemImg} />
                        <Image source={items[item2]} style={{ ...styles.itemImg }} />
                        <Image source={items[item3]} style={{ ...styles.itemImg }} />
                        <Image source={items[item4]} style={{ ...styles.itemImg }} />
                        <Image source={items[item5]} style={styles.itemImg} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingVertical: '1%' }}>
                        <Image source={items[item6]} style={styles.itemImg} />
                        <Image source={items[item7]} style={{ ...styles.itemImg }} />
                        <Image source={items[item8]} style={{ ...styles.itemImg }} />
                        <Image source={items[item9]} style={{ ...styles.itemImg }} />
                        <Image source={items[item10]} style={styles.itemImg} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingVertical: '1%' }}>
                        <Image source={items[item11]} style={styles.itemImg} />
                        <Image source={items[item12]} style={{ ...styles.itemImg }} />
                        <Image source={items[item13]} style={{ ...styles.itemImg }} />
                        <Image source={items[item14]} style={{ ...styles.itemImg }} />
                        <Image source={items[item15]} style={styles.itemImg} />
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ width: '79%', flexDirection: 'row' }}>    
                            <View
                                style={{
                                    width: '74%',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    // backgroundColor: 'green',
                                    height: '100%',
                                    marginLeft: '30%',
                                    flexDirection: 'row',
                                }}
                            >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 13,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    // color: result.includes('LOSE') ? '#fa3232' : '#34eb43',
                                    // backgroundColor: 'green',
                                    marginHorizontal: '30%'
                                }}
                            >
                                {result}
                            </Text>
                            <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 10,
                                        marginTop: '8%',
                                        fontWeight: 'bold',
                                        // backgroundColor: 'red',
                                        paddingHorizontal: 5
                                    }}
                                >
                                    {yourBet}
                            </Text>
                             <TouchableOpacity
                            onPress={handlePlusBet}
                            style={{
                                // backgroundColor: 'green',
                                height: '100%',
                                width: '8%',
                                alignSelf: 'flex-end'
                            }}
                        />
                        </View> 
                        <TouchableOpacity
                            onPress={handleSpin}
                            style={{
                                // backgroundColor: 'red',
                                height: '100%',
                                width: '20%',
                                // marginLeft: '2%',

                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    topView: {
        width: '100%',
        height: '10%',
        flexDirection: 'row'
        // backgroundColor: 'green'
        // opacity: 0.5
    },
    contentView: {
        width: '65%',
        alignSelf: 'center',
        flex: 1,
        // backgroundColor: '#F9F2BA',
        borderRadius: 5,
        marginTop: '4%'
    },
    bottomView: {
        width: '100%',
        height: '22%',
        // backgroundColor: 'green',
        opacity: 1,
        flexDirection: 'row',
        // paddingLeft: '12%'
    },
    itemImg: {
        // backgroundColor: '#dbdbdb',
        flex: 1,
        resizeMode: 'contain',
        height: '80%'
    },
    score: {
        left: '130%',
        marginTop: '1.4%',
        color: 'white'
    }
})
