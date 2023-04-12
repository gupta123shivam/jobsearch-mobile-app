import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, images, icons, SIZES } from '../constants'
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components'

const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.tertiary },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          },
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
