import { View, Text, TextInput, Platform, Image, SafeAreaView, FlatList } from 'react-native'
import React, { Fragment, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Components/styles'

import Icon from 'react-native-vector-icons/Feather';
import Card from './Components/card'
import TouchableScale from 'react-native-touchable-scale';
import VirtualizedView from './Components/VirtualizedView'


import { pickerSelectStyles, pickerSelectStyles1, pickerSelectStyles2 } from "./Components/styles"
import RNPickerSelect from 'react-native-picker-select';
import Loading from './Components/loading';
import apiFetching from '../../Utils/ApiFetching'
import LinearGradient from 'react-native-linear-gradient';


Icon.loadFont();


export default function App({ navigation }) {
    const [value, onChangeText] = React.useState({ poste: null, clubs: null, cote: null, season: null });
    const [state, setState] = React.useState({ value: [require("../../assets/flag1.png"), require("../../assets/flag2.png"), require("../../assets/flag3.png"), require("../../assets/flag4.png"), require("../../assets/flag5.png")] });
    const [fetchValues, setFetchValues] = React.useState(null);
    useEffect(() => {
        // requete vers l'api pour récupérer les informations
        async function fetchData() {
            var response = await apiFetching.getRequest('/championship/1/2018')
            setFetchValues(response)
        }
        fetchData()
    }, [])
    // changer le texte dans le state
    function changeText(valu) {
        onChangeText({ poste: valu })
    }

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#4cff44' }} >
                <Image resizeMode={"contain"} source={require("../../assets/MPG.png")} style={styles.logo} /></SafeAreaView>
            <SafeAreaView >
                <View style={styles.allView}>
                    {/* Partie recherche */}
                    <View style={styles.topPart}>
                        {/* Vue Catégorie avec les images  */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {state.value.map((number, i) =>
                                <View key={i} style={styles.divisionImageView}>
                                    <Image source={number} style={styles.divisionImage} />
                                </View>
                            )}
                        </ScrollView>
                        <View style={styles.firstPart}>
                            <View style={styles.searchView}>
                                <View style={styles.TextInputView}>
                                    <Icon style={styles.iconSearch} name="search" size={20} color="grey" />
                                    <TextInput placeholder={"Nom Joueur"} style={styles.TextInput} />
                                </View>
                                <View style={styles.yearInterval}>
                                    <RNPickerSelect
                                        style={pickerSelectStyles2}
                                        placeholder={{}}
                                        selectedValue={value.season}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => changeText({ season: value })}
                                        items={[
                                            { label: '2020/2021', value: '2020/2021' },
                                            { label: '2019/2020', value: '2019/2020' },
                                            { label: '2018/2019', value: '2018/2019' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View style={styles.selections} >
                                {/* Modules Sélectionneur  */}
                                <RNPickerSelect
                                    style={pickerSelectStyles}
                                    // placeholder={"Postes"}
                                    placeholder={{
                                        label: 'Postes',
                                        value: null,
                                    }}
                                    selectedValue={value.poste}
                                    useNativeAndroidPickerStyle={false}
                                    onValueChange={(value) => changeText({ poste: value })}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: '2', value: '2' },
                                        { label: '3', value: '3' },
                                    ]}
                                />
                                <RNPickerSelect
                                    style={pickerSelectStyles}
                                    placeholder={{
                                        label: 'Clubs',
                                        value: null,
                                    }}
                                    selectedValue={value}
                                    useNativeAndroidPickerStyle={false}
                                    //placeholder={"Clubs"}
                                    onValueChange={(value) => onChangeText({ clubs: value })}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: '2', value: '2' },
                                        { label: '3', value: '3' },
                                    ]}
                                />
                                <RNPickerSelect
                                    style={pickerSelectStyles1}
                                    placeholder={{
                                        label: 'Cote Inf à',
                                        value: null,
                                    }}
                                    selectedValue={value}
                                    useNativeAndroidPickerStyle={false}
                                    //placeholder={"Clubs"}
                                    onValueChange={(value) => onChangeText({ cote: value })}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: '2', value: '2' },
                                        { label: '3', value: '3' },
                                    ]}
                                />
                            </View>
                        </View>
                        {/* Séparateur */}
                        <VirtualizedView style={styles.allView}>
                            <View style={styles.finderSeparator}>
                                <Text style={styles.finderSeparatorText}>RECHERCHE</Text>
                            </View>
                            {/* partie du bas */}
                            <View style={styles.bottomPart}>
                                {/* les cards des joueurs */}
                                {fetchValues == null ? <Loading /> :
                                    <FlatList
                                        style={styles.flatList}
                                        keyExtractor={(item, key) => key.toString()}
                                        data={fetchValues}
                                        renderItem={({ item }) =>
                                            <TouchableScale
                                                activeScale={0.9}
                                                tension={50}
                                                friction={7}
                                                useNativeDriver
                                                onPress={() => navigation.navigate('Detail', { data: item })}>

                                                <Card params={item} />

                                            </TouchableScale>}
                                    //keyExtractor={(item, index)=> index.toString()}
                                    />
                                }
                            </View>
                        </VirtualizedView>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};
