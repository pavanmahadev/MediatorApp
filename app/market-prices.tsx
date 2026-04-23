import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const cardWidth = (width - 45) / 2; // 2 columns with 15 padding on sides and 15 between

const dummyProducts = [
  { id: '1', name: 'Yalvana', localName: 'ಯಲ್ಲವನ ಬಳ್ಳಿ', price: '00', change: '- 0.0%' },
  { id: '2', name: 'White Payar', localName: 'ಬಿಳಿ ಪಾಯರ್', price: '00', change: '- 0.0%' },
  { id: '3', name: 'White Brinjal', localName: 'ಬಿಳಿ ಬದನೆಕಾಯಿ', price: '00', change: '- 0.0%' },
  { id: '4', name: 'Tunde Kai', localName: 'ತುಂಡೆಕಾಯಿ', price: '00', change: '- 0.0%' },
  { id: '5', name: 'Tsunami', localName: 'ಸುನಾಮಿ', price: '00', change: '- 0.0%' },
  { id: '6', name: 'Tomato - Sour', localName: 'ಹುಳಿ ಟೊಮೇಟೊ', price: '00', change: '- 0.0%' },
];

export default function MarketPrices() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.headerTitles}>
            <Text style={styles.headerTitle}>Today's Prices</Text>
            <Text style={styles.headerSubtitle}>Live Market Rates</Text>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <Ionicons name="person" size={20} color="#2e7d32" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.topSection}>
          <View style={styles.titleRow}>
            <Text style={styles.mainTitle}>Market Rates</Text>
            <Text style={styles.dateText}>Apr 23, 2026</Text>
          </View>

          {/* SEARCH BAR */}
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput 
              placeholder="Search products..." 
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>

          {/* TABS */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsScroll} contentContainerStyle={styles.tabsContainer}>
            <TouchableOpacity style={[styles.tab, styles.activeTab]}>
              <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Grains</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* PRODUCT GRID */}
        <View style={styles.gridContainer}>
          {dummyProducts.map((item, index) => (
            <Animated.View 
              key={item.id} 
              entering={FadeInDown.delay(index * 100).duration(500)}
            >
              <TouchableOpacity style={styles.productCard}>
                {/* Simulated App Logo Area */}
                <View style={styles.cardImageBg}>
                  <View style={styles.cardLogoBox}>
                    <Text style={styles.cardLogoText}>Farmer<Text style={{color: '#4caf50'}}>One</Text></Text>
                    <View style={styles.logoDots}>
                      <View style={[styles.dot, { backgroundColor: '#4caf50' }]} />
                      <View style={[styles.dot, { backgroundColor: '#ff9800' }]} />
                      <View style={[styles.dot, { backgroundColor: '#2196f3' }]} />
                    </View>
                  </View>
                </View>

                <View style={styles.cardContent}>
                  <Text style={styles.productName} numberOfLines={2}>
                    {item.name} - {item.localName}
                  </Text>
                  
                  <View style={styles.priceRow}>
                    <Text style={styles.priceSymbol}>₹</Text>
                    <Text style={styles.priceValue}>{item.price}</Text>
                    <Text style={styles.priceUnit}> /kg</Text>
                  </View>
                  
                  <View style={styles.changeBadge}>
                    <Text style={styles.changeText}>{item.change}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>

      {/* FLOATING ACTION BUTTON */}
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/add-stock')}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* CUSTOM BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/dashboard')}>
          <Ionicons name="home-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <MaterialCommunityIcons name="storefront" size={20} color="#2e7d32" />
          <Text style={styles.navTextActive}>Market</Text>
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
  backBtn: {
    width: 40,
  },
  headerTitles: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#c8e6c9',
    fontSize: 11,
    marginTop: 2,
  },
  profileBtn: {
    backgroundColor: '#c8e6c9',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
  },
  dateText: {
    fontSize: 13,
    color: '#888',
    fontWeight: '600',
    marginBottom: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  tabsScroll: {
    marginHorizontal: -15,
  },
  tabsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  tab: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  activeTab: {
    backgroundColor: '#2e7d32',
  },
  tabText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 14,
  },
  activeTabText: {
    color: 'white',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  productCard: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  cardImageBg: {
    backgroundColor: '#fffcfc', // subtle pink/orange tint from image
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLogoBox: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardLogoText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  logoDots: {
    flexDirection: 'row',
    marginTop: 4,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  cardContent: {
    padding: 15,
  },
  productName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    minHeight: 36,
    marginBottom: 15,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  priceSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  priceValue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111',
  },
  priceUnit: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
  },
  changeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eee',
  },
  changeText: {
    fontSize: 11,
    color: '#666',
    fontWeight: '600',
  },
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
