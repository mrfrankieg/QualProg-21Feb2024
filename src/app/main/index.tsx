import * as React from 'react';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text, Checkbox, Button } from 'react-native-paper';

// Configure CheckBox
const CheckboxComp = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

// Button Functions
const NextButtonPressed = () => {
  console.log('Next Button Pressed')
  // router.push('/main')
}

// Buttons
const NextButton = () => (
  <Button icon="arrow-right-bold" textColor='#000' mode="contained" onPress={() => NextButtonPressed()}>
    Next
  </Button>
);

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text variant="headlineLarge" style={styles.title}>Q+ Quality Program</Text>
        <Text variant="titleMedium" style={styles.subtitle}>Quality Correspondence Review Exercise</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text variant="titleLarge" style={styles.bodyTitleText}>Support Engineer Communication</Text>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I provide a customized response?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I empathize with the customer?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I speak confidently?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I leave the door open for the customer to ask further questions?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I include a brief greeting or follow-up?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I reiterate the problem?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I use correct punctuation, spelling, and grammar?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I include a new section for each subject content?</Text>
        </View>
      </View>
      <View style={styles.nextbuttonContainer}>
        <NextButton />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    color: '#fff',
  },
  subtitle: {
    color: 'grey',
  },
  contentContainer: {
    marginTop: 50,
  },
  bodyTitleContainer: {
    alignItems: 'flex-start',
  },
  bodyContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  bodyTitleText: {
    color: 'darkorange',
    fontWeight: '500',
  },
  bodyText: {
    color: '#fff'
  },
  nextbuttonContainer: {
    marginTop: 50,
    width: '70%',
    maxWidth: 400
  }
});