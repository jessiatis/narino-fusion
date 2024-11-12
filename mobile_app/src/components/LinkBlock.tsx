import { View, Text } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

interface ILinkBlock {
  icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
}

export default function LinkBlock({ icon: Icon, label }: ILinkBlock) {
  return (
    <View className="flex-row items-center gap-x-2 px-2 py-4 shadow-sm shadow-primary rounded-lg bg-white">
      <Icon size={24} color="#60631a" />
      <Text className="text-primary-700 text-lg grow">{label}</Text>
      <ChevronRightIcon size={24} color="#60631a" />
    </View>
  )
}
