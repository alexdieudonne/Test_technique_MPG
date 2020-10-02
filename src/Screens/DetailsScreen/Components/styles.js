import {
    Dimensions,
    StyleSheet,
  } from 'react-native';
  
const styles = StyleSheet.create({
    cross:{
        width:20,
        marginLeft:14,
        marginTop:20,
        backgroundColor:'transparent'
        
    },
    header:{
        alignSelf:'center',

    },
    imageHeader:{
        width: 166,
        height: 168,
    },
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    nameStyle:{
        marginTop:40,
        fontSize:25,
        marginLeft:20,
        fontWeight:"bold",
        fontFamily:'',
        fontFamily: "OpenSans-Bold",
        color:'black'
      
    },
    post:{
        paddingLeft:20,
        paddingTop:26
    },
    rightSideCard:{
        paddingTop:21,
        paddingHorizontal:21
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

    //   carré caractéristiques du joueur
    caracteristicsPlayer:{
        flexDirection:"row",
        marginTop:30,
        marginBottom:30,
        alignSelf:"center",
        width:"100%",
        paddingVertical:20,
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        justifyContent:"space-between",
        elevation: 15,
    },
    caracteristicsTopPart:{
        flexDirection:'column',
        justifyContent:"space-between",
       
    },
    caracteristicsTextNote:{
        color:"black",
        fontSize:16,
        fontWeight:"600",
        alignSelf:'center'
    },
    caracteristicsTextNoteValue:{
        color:"#868686",
        fontSize:20,
        alignSelf:'center'
    },
    caracteristicsTitulaireText:{
        fontWeight:"600"
    },
    caracteristicsTitulaireView:{
        alignSelf:'center',
        flexDirection:"row"
    },
    caracteristicsTitulaireValue1:{
        color:"#868686",
        
    },
    caracteristicsTitulaireValue1Text:{
        fontSize:20,
        color:"#868686",
    },
    caracteristicsTitulaireValue2Text:{
        marginLeft:6,
        fontSize:16,
        color:"#868686",
    },
    caracteristicsTitulaireValue2:{
        fontSize:10,
        color:"#868686",
    },
    caracteristicsCote:{
        marginTop:25
    },
    caracteristicsSavedPercent:{
        marginTop:25
    },
    caracteristicsBoxes:{
        marginTop:25
    },
    caracteristicsTextBoxes:{
        color:"black",
        fontSize:15,
        fontWeight:"600",
        alignSelf:'center'
    },
    caracteristicsBoxesView:{
        alignSelf:'center',
        flexDirection:'row'
    },
    caracteristicsBoxesValue1:{
        backgroundColor:"yellow",
        color:"black",
        justifyContent:"center",
        alignItems:'center', 
        textAlign:'center',
        marginHorizontal:3,
        paddingHorizontal:5,
        paddingVertical:2,
        borderRadius:2,
    },
    caracteristicsBoxesValue2:{
        color:"#fff",
        backgroundColor:"red",
      
        alignSelf:'center',
        marginHorizontal:3,
        paddingHorizontal:3,
        borderRadius:2,
        paddingVertical:2
    },


    // Data updated text
    updatedText:{
        fontSize:14,
        //marginBottom:100,
        color:"grey",
        fontFamily:'OpenSans-Italic',
        alignSelf:'center'
    },
    bottom:{
        marginVertical:58,
        marginHorizontal:20
    },
    dropText:{
        fontSize:18,
        color:"#313ac1"
    },

    // Informations du bas
    goodView:{
        marginTop:10
    },
    butsMatch:{
        justifyContent:"space-between",
        flexDirection:"row",
        marginTop:20
    },
    butsMatchText:{
        width:"60%",
        color:"black",
        fontSize:17
    },
    butsMatchValue:{
        fontWeight:"bold",
        color:"black",
        fontSize:17
    },
    butsMatchValuePercent:{
        fontSize:17
    },
    title:{
        flexDirection:'row',
        marginRight:20,
        width:"90%"
    },
    performancesText:{
        flexDirection:'row'
    },
    dashStyle:{width:"100%", height:1, marginTop:Platform.OS=="ios"?12:13, marginLeft:7},

    // Swiper
    wrapper:{
         height:Dimensions.get('window').height/1.4,
         
    },
    slide1:{
        
    }
  })
  export default styles
