import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  // La partie header de l'application
  logo:{
      height:62,
      width:172,
      marginLeft:12,
      marginBottom:12
  },
  allView:{
    height:"100%"
  },
  divisionImageView: {
    paddingHorizontal: 9,
    paddingBottom: 19
  },

  // style des images des catégories
  divisionImage: {

  },
  center: {
    flex: 1, alignItems: 'center'
  },
  firstPart:{
   paddingTop:20,
    paddingBottom:10
  },
  // Centrer le texte
  textCentered: {
    fontSize: 23,
    fontFamily: "OpenSans"
  },
  // Style du nom du joueur
  TextInputView: {
    flexDirection: "row",
    paddingVertical: 0,
    paddingLeft: 10,
    borderRadius: 12,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    marginHorizontal: 10,
    alignItems: "center",
    width: "55%",
  },
  TextInput: {
    paddingLeft: 10,
    width: "90%",
    color: "black",
    height: 40,
    fontFamily: "OpenSans"
  },
  iconSearch: {
    marginLeft: 2
  },
  topPart: {
    paddingVertical: 10,
    
  },
  selections: {
    marginTop: 9,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchView: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  //Séparateur
  finderSeparator:{
    alignSelf:'center',
    marginTop:23,

  },
  finderSeparatorText:{
      fontSize:17,
      fontWeight:'bold'
  },
  // Partie inférieur
  bottomPart: {
    marginTop: 20,
    
  },
  // partie de la carte d'un joueur
  card:{
    height:200,
    backgroundColor:'white',
    marginHorizontal:9,
    borderRadius:10,
    justifyContent:'space-between',
    paddingHorizontal:12,
    marginVertical:12
  },
  playerCard: {
    justifyContent:'space-between',
    padding:12,
    paddingVertical:20,
    flexDirection:'row',

  },
  rightSideCard:{
    paddingTop:6
  },
  cardNamePlayer:{
    width:150,
    fontSize:20,
    fontWeight:"500",

    color:'black'
  },
  caracteristicsCard:{
    flexDirection:'row',
    paddingBottom:17
  },
  cardTitle1:{
    flexDirection:'row',
    marginLeft:-5
  },
  cardTitle:{
    flexDirection:'row'
  },
  iconCardTitle:{
    height:20,
    width:20,
    marginTop:-1
  },
  cardTitleStyle:{
   marginTop:Platform.OS=="ios"?-3: -4,
    marginLeft:4,
    fontWeight:'bold',
    fontSize:18,
    color:'grey'
  },
  cardValue:{
    marginLeft:9,
    marginTop:Platform.OS == "ios"?1:-2,
    color:"black"
  },
  cardBottom:{
    flexDirection: 'row',
    paddingHorizontal:10,
    justifyContent:'space-between'
  },

  // flatlist
  flatList:{
    paddingBottom:300
  }

})
// page de chrargement avant l'affichage des datas
export const loadingStyle = StyleSheet.create({
  loadingView:{
      alignItems:"center",
      justifyContent:"center",
      flex:1,
  },
  loadingSpinner:{
    alignSelf:"center"
  },
  loadingText:{
    alignSelf:"center"
  }
})
// styles pour le picker des informations afin de fetch les données
export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 22,
    //   borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 9,
    color: 'black',
    marginRight: 10,
    backgroundColor: "white"

  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 22,
    paddingVertical: 8,
    //   borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    backgroundColor: "white",
    marginRight: 10,
  },


});

export const pickerSelectStyles1 = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 22,
    //   borderWidth: 1,

    // width:159,
    borderColor: 'gray',
    borderRadius: 9,
    color: 'black',
    marginRight: 10,
    backgroundColor: "white",
    width: 150
  },

  inputAndroid: {
    fontSize: 16,
    paddingVertical: 9,
    paddingHorizontal: 17,
    //   borderWidth: 1,

    // width:159,
    borderColor: 'gray',
    borderRadius: 9,
    color: 'black',
    marginRight: 10,
    backgroundColor: "white",
    width: 150,
  }
});
export const pickerSelectStyles2 = StyleSheet.create({
  inputIOSContainer: {

    width: "100%"
  },
  inputIOS: {
    width: 150,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 17,
    textAlign: "center",
    //   borderWidth: 1,
    // flex: 1,
    // width:159,
    borderColor: 'gray',
    borderRadius: 9,
    color: 'black',
    marginRight: 10,
    backgroundColor: "white",
  },

  inputAndroid: {
    width: 150,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 17,
    textAlign: "center",
    //   borderWidth: 1,
    // flex: 1,
    // width:159,
    borderColor: 'gray',
    borderRadius: 9,
    color: 'black',
    marginRight: 10,
    backgroundColor: "white",
  }
});

export default styles