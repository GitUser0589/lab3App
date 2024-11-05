import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { Link } from 'react-router-native'; // Use Link for navigation

const RecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSubmit = () => {
    // Handle form submission (e.g., send request to backend)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.container}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Password Recovery</Title>
          <TextInput
            label="Email"
            value={email}
            onChangeText={handleEmailChange}
            autoCapitalize="none"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Reset Password
          </Button>
          {/* Link to navigate back to the Home page */}
          <Link to="/" style={styles.link}>
            <Button mode="outlined" style={styles.button}>
              Back to Home
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    maxWidth: 350,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
  },
  link: {
    width: '100%',
    textAlign: 'center',
  },
});

export default RecoveryPage;
