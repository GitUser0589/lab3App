import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { Link } from 'react-router-native'; // Import Link from react-router-native

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/background.jpg')} // Change to your background image
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/logo.jpg')} // Change to your logo image
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
              />
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                mode="outlined"
              />
            </Card.Content>
          </Card>
          <Button mode="contained" onPress={() => { /* Add login logic here */ }} style={styles.loginButton}>
            Log In
          </Button>

          {/* Add a Link for navigating back to Home */}
          <Link to="/" style={styles.link}>
            <Button mode="outlined" style={styles.button}>
              Back to Home
            </Button>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
  },
  button: {
    marginTop: 15,
  },
  link: {
    width: '100%',
    textAlign: 'center',
  },
});

export default LoginScreen;
