import { StyleSheet } from "react-native";
import { theme1 } from "../../theme/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme1.white,
    },
    content: {
        marginHorizontal: 15,
    },
    header_container: {
        height: "35%",
        alignItems: "center"
    },
    header_background: {
        backgroundColor: theme1.clearBrown,
        height: "70%",
        width: "100%",
    },
    header_image: {
        height: "77%",
        width: "40%",
        position: "absolute",
        top: "20%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    coffee_title: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
    },
    coffee_name: {
        fontSize: 24,
        fontWeight: "600",
        color: theme1.lightBrown,
    },
    coffee_star: {
        fontSize: 16,
        fontWeight: "600",
        color: theme1.lightBrown,
    },
    coffee_info: {
        marginBottom: 20,
    },
    size_content: {
        marginTop: 20,
    },
    coffee_size_title: {
        fontSize: 16,
        fontWeight: "600",
        color: theme1.lightBrown,
    },
    coffee_size_wrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        marginBottom: 20,
    },
    coffee_size: {
        alignItems: "center",
    },
    coffee_extralarge_size: {
        resizeMode: "cover",
        width: 80,
        height: 130,
        marginBottom: 10,
    },
    coffee_large_size: {
        resizeMode: "cover",
        width: 68,
        height: 112,
        marginBottom: 10,
    },
    coffee_medium_size: {
        resizeMode: "cover",
        width: 51,
        height: 83,
        marginBottom: 10,
    },
    coffee_small_size: {
        resizeMode: "cover",
        width: 36,
        height: 60,
        marginBottom: 10,
    },
    topping_container: {
        marginVertical: 15,
    },
    topping_title: {
        fontSize: 16,
        fontWeight: "600",
        color: theme1.lightBrown,
        marginBottom: 10,
    },
    checkbox: {
        flexDirection: "row",
    },
    topping_content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    topping_name: {
        marginLeft: 10,
    },
    note_content: {
        marginVertical: 15,
    },
    note_title: {
        fontSize: 16,
        fontWeight: "600",
        color: theme1.lightBrown,
        marginBottom: 15,
    },
    note: {
        backgroundColor: theme1.clearBrown,
        borderRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        minHeight: 100,
    },
});


export default styles;
