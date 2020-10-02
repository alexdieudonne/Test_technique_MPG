import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Components/styles'
import images from './Components/images.json'
import { SharedElement } from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';
import Swiper from 'react-native-swiper'
import moment from 'moment';

import Card from './Components/card'
import Performances from './Components/performaces'
import apiFetching from '../../Utils/ApiFetching'
import Loading from '../SplashScreen/Components/loading';

export default function DetailsScreen(props) {
    const { data } = props.route.params;
    const [fetchValues, setFetchValues] = React.useState(null);

    const popAction = StackActions.pop(1)
    const Post = [
        { id: 10, poste: "Gardien" },
        { id: 20, poste: "Defenseur" },
        { id: 21, poste: "Lateral" },
        { id: 31, poste: "Milieu défensif" },
        { id: 32, poste: "Milieu offensif" },
        { id: 40, poste: "Attaquant" }
    ]
    const poste = Post.map((daa, i) => (daa.id == data.ultraPosition ? daa.poste : null))
    useEffect(() => {
        // requete vers l'api pour récupérer les informations
        async function fetchData() {
            var ret = data.id.replace('player_', '');
            var response = await apiFetching.detailRequest(ret)
            //console.log(response.stats.wonContestByMatch)
            setFetchValues(response)
        }
        fetchData()
    }, [])
    return (
        <SafeAreaView>
            {/* croix de retour */}

            <View style={styles.cross}>
                <TouchableOpacity onPress={() => props.navigation.dispatch(popAction)}>
                    <Icon style={styles.iconSearch} name="x" size={25} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ height: "100%" }} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" backgroundColor="grey" />
                {/* Header de la page avec l'image du maillot */}
                <View style={styles.header}>
                    <Image source={{ uri: images.PSG.imageURL }} style={styles.imageHeader} />
                </View>

                <SharedElement id={`item.${data.id}.name`}>
                    <Text style={styles.nameStyle}>{data.lastname} {data.firstname}</Text>
                </SharedElement>
                <View style={styles.post}>
                    <SharedElement id={`item.${data.id}.poste`}>
                        <View style={styles.caracteristicsCard}>
                            <View style={styles.cardTitle1}>
                                <Entypo style={styles.iconCardTitle} name="location-pin" size={23} color="grey" />
                                <Text style={styles.cardTitleStyle}>Poste :</Text>
                            </View>
                            <Text style={styles.cardValue}>{poste}</Text>
                        </View>
                    </SharedElement>
                    <SharedElement id={`item.${data.id}.equip`}>
                        <View style={styles.caracteristicsCard}>
                            <View style={styles.cardTitle}>
                                <FontAwesome style={styles.iconCardTitle} name="shield" size={21} color="grey" />
                                <Text style={styles.cardTitleStyle}>Equipe:</Text>
                            </View>
                            <Text style={styles.cardValue}>{data.club}</Text>
                        </View>
                    </SharedElement>
                </View>
                {/* Carré centrale avec les caractéristiques du joueur */}

                {fetchValues == null ? <Loading /> :

                    poste[0] == "Gardien" ?
                        <>
                            <Card params={fetchValues} poste={poste[0]} />
                            <Performances
                                title={"EFFICACE ?"}
                                text={[
                                    "Buts encaissés par match",
                                    "Arrêts réalisés",
                                    "Parades",
                                    "Pénaltys sauvés",
                                ]}
                                number={[
                                    fetchValues.stats.goalsConcededByMatch.toString().replace('.', ','),
                                    fetchValues.stats.sumSaves.toString().replace('.', ','),
                                    fetchValues.stats.sumDeflect.toString().replace('.', ','),
                                    fetchValues.stats.sumPenaltySave.toString().replace('.', ',')]}
                            /></> :
                        <>
                            <Card params={fetchValues} />
                            <Text style={styles.updatedText}>Données mises à jour le {moment(fetchValues.updatedAt).format('MM/DD/YYYY')}</Text>
                            {/* performances du joueurs avec swiper pour ne pas prendre trop d'espace sur l'écran*/}

                            <Swiper showsPagination={false} autoplayTimeout={6} autoplay={true} style={styles.wrapper} showsButtons={false}>
                                <View style={styles.slide1}>
                                    <Performances
                                        title={"EFFICACE ?"}
                                        text={[
                                            "Dribbles réussis par match",
                                            "Duels remportés par match",
                                            "Pertes de balle par match",
                                            "Fautes commises par match",
                                            "Fautes subies par match",
                                            "Tirs cadrés par match"
                                        ]}
                                        number={[
                                            fetchValues.stats.wonContestByMatch.toString().replace('.', ','),
                                            fetchValues.stats.wonDuelByMatch.toString().replace('.', ','),
                                            fetchValues.stats.lostBallByMatch.toString().replace('.', ','),
                                            fetchValues.stats.foulsByMatch.toString().replace('.', ','),
                                            fetchValues.stats.foulsEnduredByMatch.toFixed(1).toString().replace('.', ','),
                                            fetchValues.stats.shotOnTargetByMatch.toFixed(1).toString().replace('.', ',')
                                        ]}
                                        parentheseValue={[fetchValues.stats.percentageWonContest, fetchValues.stats.percentageWonDuel, '', "", "", fetchValues.stats.percentageShotOnTarget]}
                                    />
                                </View>
                                <View>
                                    <Performances
                                        title={"IL PLANTE ?"}
                                        text={[
                                            "Buts (pén.)",
                                            "Fréquence de buts (min.)",
                                            "Buts par match",
                                            "Tirs par match",
                                            "Grosses occasions ratées"
                                        ]}
                                        number={[
                                            fetchValues.stats.sumGoals.toString().replace('.', ','),
                                            fetchValues.stats.minutesByGoal.toString().replace('.', ','),
                                            fetchValues.stats.goalByMatch.toString().replace('.', ','),
                                            fetchValues.stats.shotByMatch.toString().replace('.', ','),
                                            fetchValues.stats.sumBigChanceMissed.toString().replace('.', ',')]}
                                        parentheseValue={["0"]}
                                    />
                                </View>
                                <View>
                                    <Performances
                                        title={"SOLIDE ?"}
                                        text={[
                                            "Interceptions par match",
                                            "Tacles par match",
                                            "Buts encaissés par match",
                                            "Erreurs qui amènent un but"
                                        ]}
                                        number={[
                                            fetchValues.stats.interceptByMatch.toString().replace('.', ','),
                                            fetchValues.stats.tackleByMatch.toString().replace('.', ','),
                                            fetchValues.stats.goalsConcededByMatch.toString().replace('.', ','),
                                            fetchValues.stats.mistakeByMatch.toString().replace('.', ',')
                                        ]}

                                    />
                                </View>
                                <View>
                                    <Performances
                                        title={"UN AS DE LA PASSE ?"}
                                        text={[
                                            "Passes décisives",
                                            "Grosses occasions créées",
                                            "Passes réussies par match",
                                            "Passes réussies dans le camp adverse par match",
                                            "Passes réussies dans son camp par match",
                                            "Passes longues réussies par match",
                                            "Centres réussis par match"
                                        ]}
                                        number={[
                                            fetchValues.stats.sumGoalAssist.toString().replace('.', ','),
                                            fetchValues.stats.sumBigChanceCreated.toString().replace('.', ','),
                                            fetchValues.stats.succeedPassByMatch.toString().replace('.', ','),
                                            fetchValues.stats.succeedPassFwdZoneByMatch.toString().replace('.', ','),
                                            fetchValues.stats.succeedPassBackZoneByMatch.toString().replace('.', ','),
                                            fetchValues.stats.succeedLongPassByMatch.toString().replace('.', ','),
                                            fetchValues.stats.succeedCrossByMatch.toString().replace('.', ',')
                                        ]}
                                        parentheseValue={["", "",
                                            fetchValues.stats.percentageSucceedPass.toString().replace('.', ','),
                                            fetchValues.stats.percentageAccurateFwdZone.toString().replace('.', ','),
                                            fetchValues.stats.percentageAccuratePassBackZone.toString().replace('.', ','),
                                            fetchValues.stats.percentageAccurateLongPass.toString().replace('.', ','),
                                            fetchValues.stats.percentageCrossSuccess.toString().replace('.', ','),]}
                                    />
                                </View>
                            </Swiper>
                        </>
                }
            </ScrollView>

        </SafeAreaView>
    );
};

