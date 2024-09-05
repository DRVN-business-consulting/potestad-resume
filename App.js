import React from 'react';
import { SafeAreaView } from "react-native";
import Main from './components/main';

export default function App() {

  return (
    <SafeAreaView style={{  
      width: '100%',
      height: '100%'
    }}>
     <Main></Main> 
    </SafeAreaView>
  );
}
