import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    message: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        marginHorizontal: 35
    }
})

export default Styles