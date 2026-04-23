import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence, Easing } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const router = useRouter();

  // Floating animation for the banner
  const floatAnim = useSharedValue(0);

  useEffect(() => {
    floatAnim.value = withRepeat(
      withSequence(
        withTiming(5, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  const animatedBannerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: floatAnim.value }]
    };
  });

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>Farmer<Text style={{color: '#4caf50'}}>One</Text></Text>
            </View>
            <View>
              <Text style={styles.greeting}>ನಮಸ್ಕಾರ, MAHADEVASWAMY</Text>
              <Text style={styles.welcome}>Welcome to FarmerOne</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <Ionicons name="person" size={20} color="#2e7d32" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* MARKET REACH CAROUSEL */}
        <Animated.ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.carouselContainer}
          snapToInterval={width * 0.85 + 15}
          decelerationRate="fast"
          entering={FadeInRight.duration(800)}
        >
          <View style={styles.marketCard}>
            <View style={styles.marketIconBox}>
              <MaterialCommunityIcons name="storefront" size={24} color="#1976d2" />
            </View>
            <View style={styles.marketTextContent}>
              <Text style={styles.marketTitle}>MARKET REACH</Text>
              <Text style={styles.marketSub}>Connecting you to 50+ major markets across Karnataka instantly.</Text>
            </View>
          </View>
          <View style={[styles.marketCard, { opacity: 0.5 }]} >
            <View style={styles.marketIconBox}>
              <MaterialCommunityIcons name="truck-fast" size={24} color="#f57c00" />
            </View>
            <View style={styles.marketTextContent}>
              <Text style={styles.marketTitle}>LOGISTICS</Text>
              <Text style={styles.marketSub}>Fast and reliable transport for your produce.</Text>
            </View>
          </View>
        </Animated.ScrollView>

        {/* ILLUSTRATION BANNER */}
        <Animated.View style={[styles.bannerContainer, animatedBannerStyle]} entering={FadeInDown.delay(200).duration(800)}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Instant Payment. Clear Billing.</Text>
            <View style={styles.bannerIcons}>
              <Ionicons name="phone-portrait-outline" size={40} color="#2e7d32" />
              <Ionicons name="arrow-forward" size={24} color="#81c784" />
              <Ionicons name="print-outline" size={40} color="#2e7d32" />
              <Ionicons name="arrow-forward" size={24} color="#81c784" />
              <Ionicons name="document-text-outline" size={40} color="#2e7d32" />
            </View>
            <Text style={styles.bannerHighlight}>Printed Bill for Farmer</Text>
            <Text style={styles.bannerSubtext}>No disputes • No confusion • Full transparency</Text>
          </View>
        </Animated.View>

        {/* DAILY TRANSACTIONS */}
        <Text style={styles.sectionTitle}>Daily Transactions</Text>
        <View style={styles.row}>
          <Animated.View entering={FadeInDown.delay(400).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/add-stock')}>
              <View style={styles.cardBgCircle1} />
              <View style={[styles.iconWrapper, { backgroundColor: '#ffebee' }]}>
                <Ionicons name="cash-outline" size={24} color="#e64a19" />
              </View>
              <View style={styles.cardBottomRow}>
                <Text style={styles.actionCardText}>Add Advance</Text>
                <Ionicons name="arrow-forward" size={16} color="#ccc" />
              </View>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(500).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/ledger')}>
              <View style={styles.cardBgCircle2} />
              <View style={[styles.iconWrapper, { backgroundColor: '#f3e5f5' }]}>
                <MaterialCommunityIcons name="handshake" size={24} color="#7b1fa2" />
              </View>
              <View style={styles.cardBottomRow}>
                <Text style={styles.actionCardText}>Outstanding</Text>
                <Ionicons name="arrow-forward" size={16} color="#ccc" />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* BUSINESS OVERVIEW (NEW DESIGN) */}
        <Text style={styles.sectionTitle}>Business Overview</Text>
        
        {/* Row 1 */}
        <View style={styles.row}>
          <Animated.View entering={FadeInDown.delay(600).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.overviewCard}>
              <Ionicons name="clipboard-outline" size={80} color="#ffe0b2" style={styles.watermarkIcon} />
              <View style={styles.overviewHeader}>
                <View style={[styles.overviewIconBox, { backgroundColor: '#fff3e0' }]}>
                  <Ionicons name="clipboard" size={16} color="#e65100" />
                </View>
                <Text style={styles.overviewTitle}>Pending Bill</Text>
              </View>
              <Text style={styles.overviewValue}>0</Text>
              <View style={[styles.overviewBadge, { backgroundColor: '#e8f5e9' }]}>
                <Text style={[styles.overviewBadgeText, { color: '#2e7d32' }]}>All Clear</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(700).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.overviewCard}>
              <Ionicons name="basket-outline" size={80} color="#c8e6c9" style={styles.watermarkIcon} />
              <View style={styles.overviewHeader}>
                <View style={[styles.overviewIconBox, { backgroundColor: '#e8f5e9' }]}>
                  <Ionicons name="basket" size={16} color="#2e7d32" />
                </View>
                <Text style={styles.overviewTitle}>Today's Sales</Text>
              </View>
              <Text style={styles.overviewValue}>0</Text>
              <View style={[styles.overviewBadge, { backgroundColor: '#e8f5e9' }]}>
                <Text style={[styles.overviewBadgeText, { color: '#2e7d32' }]}>+0 from yesterday</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <Animated.View entering={FadeInDown.delay(800).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.overviewCard}>
              <Ionicons name="wallet-outline" size={80} color="#bbdefb" style={styles.watermarkIcon} />
              <View style={styles.overviewHeader}>
                <View style={[styles.overviewIconBox, { backgroundColor: '#e3f2fd' }]}>
                  <Ionicons name="wallet" size={16} color="#1565c0" />
                </View>
                <Text style={styles.overviewTitle}>Advance Given</Text>
              </View>
              <Text style={styles.overviewValue}>0</Text>
              <View style={[styles.overviewBadge, { backgroundColor: '#e3f2fd' }]}>
                <Text style={[styles.overviewBadgeText, { color: '#1565c0' }]}>Today</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(900).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.overviewCard}>
              <Ionicons name="pie-chart-outline" size={80} color="#e1bee7" style={styles.watermarkIcon} />
              <View style={styles.overviewHeader}>
                <View style={[styles.overviewIconBox, { backgroundColor: '#f3e5f5' }]}>
                  <Ionicons name="pie-chart" size={16} color="#7b1fa2" />
                </View>
                <Text style={styles.overviewTitle}>Service Earnings</Text>
              </View>
              <Text style={styles.overviewValue}>0</Text>
              <View style={[styles.overviewBadge, { backgroundColor: '#f3e5f5' }]}>
                <Text style={[styles.overviewBadgeText, { color: '#7b1fa2' }]}>Today</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.row}>
          <Animated.View entering={FadeInDown.delay(1000).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.quickActionCard}>
              <View style={styles.cardBgCircleLightGreen} />
              <View style={[styles.quickActionIconBox, { backgroundColor: '#dcedc8' }]}>
                 <Ionicons name="person-add" size={28} color="#2e7d32" />
              </View>
              <Text style={styles.quickActionText}>Add People</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1100).duration(800)} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.quickActionCard}>
              <View style={styles.soonBadge}>
                <Text style={styles.soonText}>Soon</Text>
              </View>
              <View style={styles.cardBgCircleLightPurple} />
              <View style={[styles.quickActionIconBox, { backgroundColor: '#e1bee7' }]}>
                 <Ionicons name="bar-chart" size={28} color="#7b1fa2" />
              </View>
              <Text style={styles.quickActionText}>Reports</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* MARKET ANALYTICS */}
        <Animated.View entering={FadeInDown.delay(1200).duration(800)}>
          <TouchableOpacity style={styles.analyticsBanner}>
            <View style={styles.proBadge}>
              <Text style={styles.proText}>PRO FEATURE</Text>
            </View>
            <View style={styles.analyticsContent}>
              <View style={{ flex: 1, paddingRight: 15 }}>
                <Text style={styles.analyticsTitle}>Market Analytics</Text>
                <Text style={styles.analyticsSub}>Get deep insights into your sales trends and performance.</Text>
              </View>
              <View style={styles.analyticsIconCircle}>
                <Ionicons name="stats-chart" size={28} color="#283593" />
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>

      </ScrollView>

      {/* FLOATING ACTION BUTTON */}
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/add-stock')}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* CUSTOM BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="home" size={20} color="#2e7d32" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/market-prices')}>
          <MaterialCommunityIcons name="storefront-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/ledger')}>
          <Ionicons name="book-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/assist')}>
          <Ionicons name="headset-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#388e3c',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 8,
    marginRight: 10,
  },
  logoText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  greeting: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  welcome: {
    color: '#c8e6c9',
    fontSize: 12,
  },
  profileBtn: {
    backgroundColor: '#c8e6c9',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollArea: {
    flex: 1,
  },
  carouselContainer: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  marketCard: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  marketIconBox: {
    backgroundColor: '#e3f2fd',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  marketTextContent: {
    flex: 1,
  },
  marketTitle: {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 4,
    letterSpacing: 1,
  },
  marketSub: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    lineHeight: 20,
  },
  bannerContainer: {
    marginHorizontal: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#c8e6c9',
    overflow: 'hidden',
  },
  bannerContent: {
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 15,
  },
  bannerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 15,
  },
  bannerHighlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
  },
  bannerSubtext: {
    fontSize: 12,
    color: '#558b2f',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginHorizontal: 15,
    marginBottom: 12,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  actionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 5,
    minHeight: 110,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  cardBgCircle1: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff3e0',
    opacity: 0.5,
  },
  cardBgCircle2: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f3e5f5',
    opacity: 0.5,
  },
  iconWrapper: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 12,
  },
  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  actionCardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  // NEW STYLES
  overviewCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 5,
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  overviewIconBox: {
    padding: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  overviewTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555',
    flexShrink: 1,
  },
  overviewValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  overviewBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  overviewBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  watermarkIcon: {
    position: 'absolute',
    right: -20,
    top: 20,
    opacity: 0.3,
    transform: [{ rotate: '-15deg' }]
  },
  quickActionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
    minHeight: 120,
    justifyContent: 'center',
  },
  quickActionIconBox: {
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
  },
  quickActionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  cardBgCircleLightGreen: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e8f5e9',
    opacity: 0.5,
  },
  cardBgCircleLightPurple: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f3e5f5',
    opacity: 0.5,
  },
  soonBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#fff3e0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomLeftRadius: 15,
  },
  soonText: {
    color: '#e65100',
    fontSize: 12,
    fontWeight: 'bold',
  },
  analyticsBanner: {
    backgroundColor: '#283593',
    marginHorizontal: 15,
    borderRadius: 24,
    padding: 20,
    marginBottom: 40,
    shadowColor: '#283593',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  proBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 15,
  },
  proText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  analyticsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  analyticsTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  analyticsSub: {
    color: '#c5cae9',
    fontSize: 13,
    lineHeight: 18,
  },
  analyticsIconCircle: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // END NEW STYLES
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    backgroundColor: '#2e7d32',
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2e7d32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    padding: 10,
  },
  navItemActive: {
    flexDirection: 'row',
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  navTextActive: {
    color: '#2e7d32',
    fontWeight: 'bold',
    marginLeft: 6,
  }
});