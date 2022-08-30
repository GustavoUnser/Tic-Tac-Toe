import React from "react"
import { SafeAreaView } from "react-native"
import Board from "../../components/Board"
import StatusBar from "../../components/StatusBar"
import Tile from "../../components/Tile"
import Title from "../../components/Title"
import Styles from "./styles"

const Game = () => {
    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar/>
            <Title />
            <Board/>
        </SafeAreaView>
    )
}

export default Game