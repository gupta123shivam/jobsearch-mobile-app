import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const Tabs = ({ tabs, activeTab, setactiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={(item) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchtype={() => setactiveTab(item)}
          />
        )}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

const TabButton = ({ name, activeTab, onHandleSearchtype }) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchtype}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Tabs
