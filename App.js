import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';

// Update the import paths based on your directory structure
import Login from './src/Login';
import Register from './src/Register';
import Recovery from './src/Recovery';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Welcome to Our App!</Text>
      
      {/* Links to navigate to different pages */}
      <Link to="/login" style={styles.link}>
        <Button mode="contained">Go to Login</Button>
      </Link>
      
      <Link to="/register" style={styles.link}>
        <Button mode="contained">Go to Register</Button>
      </Link>
      
      <Link to="/recovery" style={styles.link}>
        <Button mode="contained">Go to Recovery</Button>
      </Link>
    </View>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <NativeRouter>
        <View style={styles.container}>
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />  {/* Home route */}
            <Route path="/login" element={<Login />} />  {/* Login route */}
            <Route path="/register" element={<Register />} />  {/* Register route */}
            <Route path="/recovery" element={<Recovery />} />  {/* Recovery route */}
          </Routes>
        </View>
      </NativeRouter>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  link: {
    margin: 10,
  },
});

export default App;
