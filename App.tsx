/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import QRCodeEditorScreen from "./app/screens/QRCodeEditorScreen.tsx";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QRCodeEditorScreen />
    </SafeAreaProvider>
  );
}

export default App;
