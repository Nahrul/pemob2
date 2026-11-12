import { StyleSheet, Text, View } from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import { COLORS, SIZES } from '../constants/theme';

export default function IconLabel({ icon, label, color = COLORS.primary}) {
    return (
        <View style={styles.row}>
            <View style={styles.iconBox}>
                <FaSolid name={icon} size={SIZES.iconSm} color={color} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    iconBox: {
        width: 20,
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: COLORS.text,
    },
});