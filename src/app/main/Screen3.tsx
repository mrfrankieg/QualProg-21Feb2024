import * as React from 'react';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text, Checkbox, Button } from 'react-native-paper';

//Configure Icon Button
const PageButton = () => (
  <IconButton
    icon="numeric-1-circle"
    // iconColor='darkorange'
    // iconColor={MD3Colors.error50}
    size={30}
    onPress={() => router.push('/main')}
  />
);

const PageButton2 = () => (
  <IconButton
    icon="numeric-2-circle"
    // iconColor='darkorange'
    // iconColor={MD3Colors.error50}
    size={30}
    // onPress={() => console.log('Pressed 2')}
    onPress={() => router.push('/main/Screen2')}
  />
);

const PageButton3 = () => (
  <IconButton
    icon="numeric-3-circle"
    iconColor='darkorange'
    // iconColor={MD3Colors.error50}
    size={30}
    onPress={() => console.log('Pressed 3')}
  />
);

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
  router.push('/')
}

// Buttons
const NextButton = () => (
  <Button icon="checkbox-multiple-marked-circle" textColor='#000' mode="contained" onPress={() => NextButtonPressed()}>
    Done
  </Button>
);

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text variant="headlineLarge" style={styles.title}>Q+ Quality Program</Text>
        <Text variant="titleMedium" style={styles.subtitle}>Quality Correspondence Review Exercise</Text>
      </View>

      <View style={styles.pagenumberContainer}>
        <PageButton />
        <PageButton2 />
        <PageButton3 />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.contentcontainerTitle}>
          <Text variant="titleLarge" style={styles.bodyTitleText}>Support Engineer: Knowledge</Text>
        </View>

        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Do I fully understand the customer problem?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I complete all relevant troubleshooting?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I answer all the customers questions?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I provide accurate steps?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I validate all steps and reproduce if necessary?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I provide excellent data sources?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CheckboxComp />
          <Text variant="bodyLarge" style={styles.bodyText}>Did I provide relevant references?</Text>
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
    backgroundColor: '#000',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  title: {
    color: '#fff',
  },
  subtitle: {
    color: 'grey',
  },
  pagenumberContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentcontainerTitle: {
    // marginTop: 30,
    paddingHorizontal: 30,
  },
  bodyTitleContainer: {
  },
  bodyContainer: {
    paddingHorizontal: 60,
    marginEnd: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 5,
  },
  bodyTitleText: {
    color: 'darkorange',
    fontWeight: '500',
  },
  bodyText: {
    color: '#fff'
  },
  nextbuttonContainer: {
    // marginTop: 50,
    marginBottom: 50,
    width: '70%',
    maxWidth: 400
  }
});