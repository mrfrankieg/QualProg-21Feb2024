import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';

// Button Functions
const SignInButtonPressed = () => {
  console.log('SignIn Button Pressed')
  router.push('/main')
}

const SignInButton = () => (
    <Button icon="account-arrow-right" textColor='#000' mode="contained" onPress={() => SignInButtonPressed()}>
      Sign In // Authenticate
    </Button>
  );

const RegisterButton = () => (
    <Button icon="account-plus" buttonColor='darkgray' textColor='#000' mode="contained" onPress={() => console.log('Register Button Pressed')}>
      Register
    </Button>
  );

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.titleContainer}>
        <Text variant="headlineLarge" style={styles.title}>Q+ Quality Program</Text>
      </View> */}
      
      <View style={styles.subtitleContainer}>
        <Text variant="titleLarge" style={styles.title}>Welcome! Let's begin...</Text>
      </View>
      
      <View style={styles.authButton}>
        <SignInButton />
        </View>

      <View style={styles.authButton}>
        <RegisterButton />
      </View>

      <View style={styles.subtextContainer}>
        <Text variant="titleSmall" style={styles.title}>Powered by AWS NMnS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    marginBottom: 30
  },
  title: {
    color: '#fff',
  },
  subtitleContainer: {
    marginBottom: 10
  },
  authButton: {
    width: '70%',
    maxWidth: 400,
    marginVertical: 5
  },
  subtextContainer: {
    marginTop: 40
  }
});