/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import QRCodeEditorScreen from "./app/screens/QRCodeEditorScreen.tsx";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <QRCodeEditorScreen />
    </SafeAreaView>
  );
}

export default App;
