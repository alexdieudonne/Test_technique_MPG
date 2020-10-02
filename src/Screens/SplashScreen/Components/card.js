import React, { useEffect } from 'react';
import styles from './styles'
import { View, StatusBar, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SharedElement } from 'react-navigation-shared-element';

export default function Card(props) {
    const Post = [
        { id: 10, poste: "Gardien" },
        { id: 20, poste: "Defenseur" },
        { id: 21, poste: "Lateral" },
        { id: 31, poste: "Milieu défensif" },
        { id: 32, poste: "Milieu offensif" },
        { id: 40, poste: "Attaquant" }
    ]

    return (

        <View style={styles.card}>
            <View style={styles.playerCard}>
                <SharedElement id={`item.${props.params.id}.name`}>
                    <Text style={styles.cardNamePlayer}>{props.params.lastname} {props.params.firstname} </Text>
                </SharedElement>
                <View style={styles.rightSideCard}>
                    <SharedElement id={`item.${props.params.id}.poste`}>
                        <View style={styles.caracteristicsCard}>
                            <View style={styles.cardTitle1}>
                                <Entypo style={styles.iconCardTitle} name="location-pin" size={23} color="grey" />
                                <Text style={styles.cardTitleStyle}>Poste :</Text>
                            </View>
                            <Text style={styles.cardValue}>{Post.map((data, i) => (data.id == props.params.ultraPosition ? data.poste : null))}</Text>
                        </View>
                    </SharedElement>
                    <SharedElement id={`item.${props.params.id}.equip`}>
                    <View style={styles.caracteristicsCard}>
                        <View style={styles.cardTitle}>
                            <FontAwesome style={styles.iconCardTitle} name="shield" size={21} color="grey" />
                            <Text style={styles.cardTitleStyle}>Equipe:</Text>
                        </View>
                        <Text style={styles.cardValue}>{props.params.club}</Text>
                    </View>
                    </SharedElement>
                    <SharedElement id={`item.${props.params.id}.buts`}>
                    <View style={styles.caracteristicsCard}>
                        <View style={styles.cardTitle}>
                            <FontAwesome style={styles.iconCardTitle} name="soccer-ball-o" size={18} color="grey" />
                            <Text style={styles.cardTitleStyle}>Buts:</Text>
                        </View>
                        <Text style={styles.cardValue}>{props.params.stats.sumGoals}</Text>
                    </View>
                    </SharedElement>
                </View>
            </View>
            <View style={styles.cardBottom}>
                
                <View style={styles.caracteristicsCard}>
                    <View style={styles.cardTitle}>
                        <FontAwesome style={styles.iconCardTitle} name="star-half-empty" size={16} color="grey" />
                        <SharedElement id={`item.${props.params.id}.noteText`}>
                        <Text style={styles.cardTitleStyle}>Note:</Text>
                        </SharedElement>
                    </View>
                    <SharedElement id={`item.${props.params.id}.note`}>
                    <Text style={styles.cardValue}>{props.params.stats.avgRate}</Text>
                    </SharedElement>
                </View>
               
                
                <View style={styles.caracteristicsCard}>
                    <View style={styles.cardTitle}>
                        <FontAwesome style={styles.iconCardTitle} name="money" size={16} color="grey" />
                        <SharedElement id={`item.${props.params.id}.coteText`}>
                        <Text style={styles.cardTitleStyle}>Cote:</Text>
                        </SharedElement>
                    </View>
                    <SharedElement id={`item.${props.params.id}.cote`}>
                    <Text style={styles.cardValue}>{props.params.quotation}</Text>
                    </SharedElement>
                </View>
                
                <SharedElement id={`item.${props.params.id}.titu`}>
                <View style={styles.caracteristicsCard}>
                    <View style={styles.cardTitle}>
                        <FontAwesome style={styles.iconCardTitle} name="street-view" size={16} color="grey" />
                        <Text style={styles.cardTitleStyle}>Titu:</Text>
                    </View>
                    <Text style={styles.cardValue}>{props.params.stats.percentageStarter} %</Text>
                </View>
                </SharedElement>
            </View>
        </View>
       
    );
};

