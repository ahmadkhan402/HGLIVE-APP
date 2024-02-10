import { Dimensions, StyleSheet } from "react-native";
import color from "../../../Database";
const styles = StyleSheet.create({
    parentView:{
        flex:1,
        backgroundColor:"#fff"
    },
    halfView:{
        flex:0.5,
        backgroundColor:color.colorPrimary,
        justifyContent:"center",
        alignItems:"center"
    },
    formContainer:{
        position:"absolute",
       flex:0.4,
        borderColor:color.colorPrimary,
        borderWidth:4,
        backgroundColor:"#fff"
    }
});

export default styles