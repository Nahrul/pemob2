// layar latihan: mencoba ukuran, warna, dan posisi icon

import { ScrollView, StyleSheet, Text, View } from "react-native";
import FaSolid from "@react-native-vector-icons/fontawesome-free-solid";
import { COLORS, SIZES } from "../constants/theme";

export default function IconPlaygroundScreen() {
  return (
    <ScrollView 
        style={styles.screen}
        contentContainerStyle={styles.content}
    >
        <Text style={styles.title}>Icon Playground</Text>

        {/* 1. UKURAN: prop size */}
        <Text style={styles.section}>1. ukuran (size)</Text>
        <View style={styles.row}>
            <FaSolid name="star" size={16} color={COLORS.primary} />
            <FaSolid name="star" size={24} color={COLORS.primary} />
            <FaSolid name="star" size={32} color={COLORS.primary} />
            <FaSolid name="star" size={48} color={COLORS.primary} />
        </View>

        {/* 2. WARNA: prop color */}
        <Text style={styles.section}>2. warna (color)</Text>
        <View style={styles.row}>
            <FaSolid name="star" size={32} color="#d64545" />
            <FaSolid name="star" size={32} color="#f5a623" />
            <FaSolid name="star" size={32} color="#2e9e5b" />
            <FaSolid name="star" size={32} color={COLORS.dark} />
        </View>

        {/* 3. POSISI A: ikon di kiri text */}
        <Text style={styles.section}>3. posisi A (ikon di kiri text)</Text>
        <View style={[styles.box, styles.leftIcon]}>
            <FaSolid
             name="envelope"
             size={SIZES.iconMd} 
             color={COLORS.primary} />
            <Text style={styles.text}>nahrul@domain.com</Text>
        </View>

        {/* 4. POSISI B: ikon di kanan text */}
        <Text style={styles.section}>4. posisi B (ikon di kanan text)</Text>
        <View style={[styles.box, styles.rightIcon]}>
        <Text style={styles.label}>Pengaturan</Text>
        <FaSolid
            name="chevron-right"
            size={SIZES.iconSm}
            color={COLORS.muted}
        />
        </View>

        {/* 5. POSISI C: ikon di atas text */}
        <Text style={styles.section}>5. posisi C (ikon di atas text)</Text>
        <View style={styles.row}>
            <View style={styles.topIcon}>
                <FaSolid
                    name="house"
                    size={SIZES.iconLg}
                    color={COLORS.primary}
                />
                <Text style={styles.small}>Beranda</Text>
            </View>
            <View style={styles.topIcon}>
                <FaSolid
                    name="magnifying-glass"
                    size={SIZES.iconLg}
                    color={COLORS.muted}
                />
                <Text style={styles.small}>Cari</Text>
            </View>
            <View style={styles.topIcon}>
                <FaSolid
                    name="user"
                    size={SIZES.iconLg}
                    color={COLORS.muted}
                />
                <Text style={styles.small}>Profil</Text>
            </View>
        </View>
        {/* 6. POSISI D: ikon di tengah lingkaran */}
        <Text style={styles.section}>6. posisi D (ikon di tengah lingkaran)</Text>
        <View style={styles.row}>
            <View style={styles.circle}>
                <FaSolid
                    name="camera"
                    size={SIZES.iconMd}
                    color={COLORS.card}
                />
            </View>
            <View style={[styles.circle, { backgroundColor: COLORS.danger }]}>
                <FaSolid
                    name="trash"
                    size={SIZES.iconMd}
                    color={COLORS.card}
                />
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        paddingTop: 64,
        paddingHorizontal: SIZES.padding,
        paddingBottom: 32,
        gap: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    section: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.muted,
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:20,
    },
    box: {
        backgroundColor: COLORS.card,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: SIZES.padding,
    },
    leftIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:12,
    },
    rightIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topIcon: {
        alignItems: 'center',
        gap:4,
        width: 72,
    },
    circle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: COLORS.dark,
    },
    small: {
        fontSize: 12,
        color: COLORS.text,
    },
});