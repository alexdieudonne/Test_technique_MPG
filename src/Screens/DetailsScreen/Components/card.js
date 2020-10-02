import React, { useEffect } from 'react';
import styles from './styles'
import { View, StatusBar, Text } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';

export default function Card(props) {
    useEffect(() => {
            console.log(props)
    }, [])

    return (
        <View style={styles.rightSideCard}>

            <View style={styles.caracteristicsPlayer}>
                <View>
                    <View style={styles.caracteristicsNote}>
                        <Text style={styles.caracteristicsTextNote}>Note moyenne</Text>
                        <Text style={styles.caracteristicsTextNoteValue}>{props.params.stats.avgRate.toString().replace('.', ',')}</Text>
                    </View>
                    <View style={styles.caracteristicsCote}>
                        <Text style={styles.caracteristicsTextNote}>Cote</Text>
                        <Text style={styles.caracteristicsTextNoteValue}>{props.params.quotation}</Text>
                    </View>
                </View>

                <View style={styles.caracteristicsClean}>
                    <View>
                        <Text style={styles.caracteristicsTextNote}>{props.poste == 'Gardien'?'Clean Sheet':'Buts (pén.)'}</Text>
                        <View style={styles.caracteristicsTitulaireView}>
                            <View style={styles.caracteristicsTitulaireValue1}>
                                <Text style={styles.caracteristicsTitulaireValue1Text}>{props.poste == 'Gardien'?props.params.stats.sumCleanSheet:props.params.stats.sumGoals}{}</Text>
                            </View>
                            <View style={styles.caracteristicsTitulaireValue2}>
                                <Text style={styles.caracteristicsTitulaireValue2Text}>{props.params.stats.sumPenalties}</Text>
                            </View>
                        </View >
                    </View>

                    <View style={styles.caracteristicsSavedPercent}>
                        <Text style={styles.caracteristicsTextNote}>{props.poste == 'Gardien'?'% Sauvés':'Passes dé.'}</Text>
                        <Text style={styles.caracteristicsTextNoteValue}>{props.poste == 'Gardien'?props.params.stats.percentageSaveShot:props.params.stats.sumGoalAssist}</Text>
                    </View>
                </View>

                <View style={styles.caracteristicsTitulaire}>
                    <View>
                        <Text style={styles.caracteristicsTextNote}>Titulaire (remp.)</Text>
                        <View style={styles.caracteristicsTitulaireView}>
                            <View style={styles.caracteristicsTitulaireValue1}>
                                <Text style={styles.caracteristicsTitulaireValue1Text}>{props.params.stats.appearances.starter}</Text>
                            </View>
                            <View style={styles.caracteristicsTitulaireValue2}>
                                <Text style={styles.caracteristicsTitulaireValue2Text}>{props.params.stats.appearances.standIn}</Text>
                            </View>
                        </View >
                    </View>
                    <View style={styles.caracteristicsBoxes}>
                        <Text style={styles.caracteristicsTextBoxes}>Cartons</Text>
                        <View style={styles.caracteristicsBoxesView}>
                            <Text style={styles.caracteristicsBoxesValue1}>{props.params.stats.sumRedCard}</Text>
                            <Text style={styles.caracteristicsBoxesValue2}>{props.params.stats.sumYellowCard}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
};

