import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },

    imgLogo: {
        height:'150px',
        width:'150px',
    },

    input:{
        border:'1px solid black',
        height:'30px',
        width:'70%',
        marginBottom:15,
        borderRadius: '10%',
    },

    btn:{
        border:'1px solid black',
        width:'auto',
        borderRadius: '10%',
        marginBottom:15,
    },

    text:{
        fontSize:25,
    },

    links:{
        fontSize:15,
        fontWeight: 'bold',
    }
})

export default styles;