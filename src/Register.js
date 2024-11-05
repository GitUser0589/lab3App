import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { Link } from 'react-router-native'; // Import Link from react-router-native

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registering:', { username, email, password });
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/background.jpg')} // Use your own background image
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/logo.jpg')} // Use your own logo image
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Register</Title>
              <TextInput
                label="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                mode="outlined"
              />
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                mode="outlined"
              />
              <Button mode="contained" onPress={handleRegister} style={styles.registerButton}>
                Register
              </Button>
            </Card.Content>
          </Card>

          {/* Link to navigate back to the Home page */}
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
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  card: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  registerButton: {
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

export default RegisterScreen;