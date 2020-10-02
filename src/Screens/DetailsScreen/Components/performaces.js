import React, { useEffect } from 'react';
import styles from './styles'
import { View, StatusBar, Text } from 'react-native';
import Dash from 'react-native-dash';


export default function Performances(props) {
    const fields=[]

    for (let i = 0; i <= props.text.length -1; i++) {
        fields.push(
        <View key={i} style={styles.butsMatch}>
            <Text style={styles.butsMatchText}>{props.text[i]}</Text>
            <View style={styles.performancesText}>
                <Text style={styles.butsMatchValue}>{props.number? props.number[i]:0}{props.parentheseValue? props.parentheseValue.length > 0: null}</Text>
                <Text style={styles.butsMatchValuePercent}>{props.parentheseValue?props.parentheseValue[i] != undefined && props.parentheseValue[i] != ''? '('+`${props.parentheseValue[i]}`+'%)' :'': null}</Text>
            </View>
            
        </View>);
      }
    return (
        <View style={styles.bottom}>
            <View style={styles.title}>
                <Text style={styles.dropText}>{props.title}</Text><View style={{ width: "80%" }}><Dash style={styles.dashStyle} dashColor={'grey'} dashThickness={0.8} /></View>
            </View>
            <View style={styles.goodView}>
                {fields}
            </View>
        </View>

    );
};

