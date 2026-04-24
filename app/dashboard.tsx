import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp, FadeOutDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const router = useRouter();
  const [fabOpen, setFabOpen] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const baseBanners = [
    require('../assets/images/banner1.jpg'),
    require('../assets/images/banner2.jpg'),
    require('../assets/images/banner3.jpg'),
    require('../assets/images/banner4.jpg'),
    require('../assets/images/banner5.jpg'),
  ];
  // Repeat the banners 50 times to simulate an infinite smooth forward loop
  const banners = Array(50).fill(baseBanners).flat();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === banners.length - 1 ? 0 : prevIndex + 1;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * (width - 16),
          animated: true,
        });
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <View style={styles.container}>
      {/* 1. ORIGINAL HEADER */}
      <View style={styles.header}>
        <View style={styles.logoBoxOriginal}>
          <Ionicons name="leaf" size={24} color="#FFF" />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.greeting}>Mahadevaswamy</Text>
          <Text style={styles.subtitle}>Welcome to FarmerOne</Text>
        </View>
        <TouchableOpacity style={styles.profileBtn}>
          <Ionicons name="person" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* CAROUSEL YOU REQUESTED EARLIER */}
        <Animated.View entering={FadeInDown.duration(400).delay(50)}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carouselContainer}
            snapToInterval={width - 16}
            decelerationRate="fast"
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(event.nativeEvent.contentOffset.x / (width - 16));
              setCurrentIndex(newIndex);
            }}
          >
            {banners.map((imgSrc, index) => (
              <View key={index} style={styles.carouselCard}>
                <Image source={imgSrc} style={styles.carouselImage} />
              </View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* NEW BUSINESS OVERVIEW DESIGN */}
        <Text style={styles.sectionTitle}>Business Overview</Text>
        <View style={styles.grid}>
          {/* Pending Bill */}
          <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <View style={[styles.smallIconBox, { backgroundColor: '#FFF3E0' }]}>
                <Ionicons name="clipboard-outline" size={14} color="#F57C00" />
              </View>
              <Text style={styles.overviewTitle}>Pending Bill</Text>
            </View>
            <Text style={styles.overviewValue}>0</Text>
            <View style={[styles.statusPill, { backgroundColor: '#E8F5E9' }]}>
              <Text style={[styles.statusText, { color: '#388E3C' }]}>All Clear</Text>
            </View>
            <View style={[styles.overviewBlob, { backgroundColor: 'rgba(245, 124, 0, 0.04)' }]} />
          </View>

          {/* Today's Sales */}
          <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <View style={[styles.smallIconBox, { backgroundColor: '#E8F5E9' }]}>
                <Ionicons name="basket" size={14} color="#388E3C" />
              </View>
              <Text style={styles.overviewTitle}>Today's Sales</Text>
            </View>
            <Text style={styles.overviewValue}>0</Text>
            <View style={[styles.statusPill, { backgroundColor: '#E8F5E9' }]}>
              <Text style={[styles.statusText, { color: '#388E3C' }]}>+0 from yesterday</Text>
            </View>
            <View style={[styles.overviewBlob, { backgroundColor: 'rgba(56, 142, 60, 0.04)' }]} />
          </View>

          {/* Advance Given */}
          <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <View style={[styles.smallIconBox, { backgroundColor: '#E3F2FD' }]}>
                <Ionicons name="cash" size={14} color="#1976D2" />
              </View>
              <Text style={styles.overviewTitle}>Advance Given</Text>
            </View>
            <Text style={styles.overviewValue}>0</Text>
            <View style={[styles.statusPill, { backgroundColor: '#E3F2FD' }]}>
              <Text style={[styles.statusText, { color: '#1976D2' }]}>Today</Text>
            </View>
            <View style={[styles.overviewBlob, { backgroundColor: 'rgba(25, 118, 210, 0.04)' }]} />
          </View>

          {/* Service Earnings */}
          <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <View style={[styles.smallIconBox, { backgroundColor: '#F3E5F5' }]}>
                <Ionicons name="pie-chart" size={14} color="#7B1FA2" />
              </View>
              <Text style={styles.overviewTitle}>Service Earnings</Text>
            </View>
            <Text style={styles.overviewValue}>0</Text>
            <View style={[styles.statusPill, { backgroundColor: '#F3E5F5' }]}>
              <Text style={[styles.statusText, { color: '#7B1FA2' }]}>Today</Text>
            </View>
            <View style={[styles.overviewBlob, { backgroundColor: 'rgba(123, 31, 162, 0.04)' }]} />
          </View>
        </View>

        {/* NEW QUICK ACTIONS DESIGN WITH OLD CONNECTIONS RESTORED */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.grid}>
          {/* Add Stock */}
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/add-stock')} activeOpacity={0.8}>
            <View style={[styles.bigIconBox, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="add-circle" size={28} color="#388E3C" />
            </View>
            <Text style={styles.actionTitle}>Add Stock</Text>
            <View style={[styles.blob, { backgroundColor: 'rgba(56, 142, 60, 0.03)', top: -20, right: -20 }]} />
          </TouchableOpacity>

          {/* Sell */}
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/sales-entry')} activeOpacity={0.8}>
            <View style={[styles.bigIconBox, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="pricetag" size={28} color="#1976D2" />
            </View>
            <Text style={styles.actionTitle}>Sell</Text>
            <View style={[styles.blob, { backgroundColor: 'rgba(25, 118, 210, 0.03)', top: -20, right: -20 }]} />
          </TouchableOpacity>

          {/* Add Advance */}
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/add-advance')} activeOpacity={0.8}>
            <View style={[styles.bigIconBox, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="wallet" size={28} color="#F57C00" />
            </View>
            <Text style={styles.actionTitle}>Add Advance</Text>
            <View style={[styles.blob, { backgroundColor: 'rgba(245, 124, 0, 0.03)', top: -20, right: -20 }]} />
          </TouchableOpacity>

          {/* Ledger */}
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/ledger')} activeOpacity={0.8}>
            <View style={[styles.bigIconBox, { backgroundColor: '#F3E5F5' }]}>
              <Ionicons name="book" size={28} color="#7B1FA2" />
            </View>
            <Text style={styles.actionTitle}>Ledger</Text>
            <View style={[styles.blob, { backgroundColor: 'rgba(123, 31, 162, 0.03)', top: -20, right: -20 }]} />
          </TouchableOpacity>

          {/* Manage People */}
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/manage-users')} activeOpacity={0.8}>
            <View style={[styles.bigIconBox, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="people" size={28} color="#388E3C" />
            </View>
            <Text style={styles.actionTitle}>People</Text>
            <View style={[styles.blob, { backgroundColor: 'rgba(56, 142, 60, 0.03)', top: -20, right: -20 }]} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* FLOATING ACTION BUTTON */}
      {fabOpen && (
        <Animated.View entering={FadeInUp.duration(200)} exiting={FadeOutDown.duration(200)} style={styles.fabMenu}>
          <TouchableOpacity style={styles.fabMenuItem} onPress={() => { setFabOpen(false); router.push('/upload-book?type=purchase'); }}>
            <Text style={styles.fabMenuText}>Upload Purchase</Text>
            <View style={styles.fabMenuIcon}>
              <Ionicons name="cloud-upload" size={20} color="#FFF" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabMenuItem} onPress={() => { setFabOpen(false); router.push('/upload-book?type=sale'); }}>
            <Text style={styles.fabMenuText}>Upload Sale</Text>
            <View style={styles.fabMenuIcon}>
              <Ionicons name="cloud-upload" size={20} color="#FFF" />
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}

      {fabOpen && (
        <TouchableOpacity style={styles.fabOverlay} activeOpacity={1} onPress={() => setFabOpen(false)} />
      )}

      <TouchableOpacity
        style={[styles.fab, fabOpen && styles.fabActive]}
        activeOpacity={0.9}
        onPress={() => setFabOpen(!fabOpen)}
      >
        <Ionicons name={fabOpen ? "close" : "add"} size={30} color="#FFF" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FA', // very light clean background
  },
  header: {
    backgroundColor: '#2E7D32', // Original green
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logoBoxOriginal: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    marginLeft: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#E8F5E9',
    marginTop: 2,
  },
  profileBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  carouselContainer: { marginBottom: 24, paddingRight: 16 },
  carouselCard: {
    width: width - 32,
    height: (width - 32) * 0.666,
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  carouselImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  blob: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
    rowGap: 16,
  },
  overviewCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2,
  },
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    zIndex: 2,
  },
  smallIconBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  overviewTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    flex: 1,
  },
  overviewValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
    zIndex: 2,
  },
  statusPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 2,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  overviewBlob: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    right: -40,
    top: 20,
    zIndex: 1,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    height: 140,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2,
  },
  bigIconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    zIndex: 2,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
    zIndex: 2,
  },
  soonBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 3,
  },
  soonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#F57C00',
  },
  fabOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', zIndex: 10
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 20, // Squircle shape like mockup
    backgroundColor: '#388E3C',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5, zIndex: 20,
  },
  fabActive: { backgroundColor: '#1B5E20' },
  fabMenu: { position: 'absolute', bottom: 100, right: 20, alignItems: 'flex-end', zIndex: 20 },
  fabMenuItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  fabMenuText: { backgroundColor: '#FFF', color: '#333', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, fontSize: 14, fontWeight: '600', marginRight: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  fabMenuIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#388E3C', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 3 }
});