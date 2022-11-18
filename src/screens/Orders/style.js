import { StyleSheet } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    backgroundColor: "#fff",
    // alignItems: "center",
   
    
  },
  containerSearch:{
    position:"relative",

    width:"100%",
    height:"35%",
    backgroundColor:theme1.lightBrown,
    borderBottomLeftRadius:24,
    borderBottomRightRadius:24,

  },
  text:{
    justifyContent:"center",
   textAlign:"center",
   
    
  },
  text_input: {
  
    borderRadius: 24,
    width: "90%",
    position:"absolute",
    bottom:24,
    height: 42,
    marginLeft:24,
    marginRight:24,
    
    backgroundColor: theme1.gray,
    
  },
});

export default styles;
