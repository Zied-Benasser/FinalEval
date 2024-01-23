import { View, StyleSheet, Text, Button } from 'react-native';

const Bouton = (props) => {
  return <Button onPress={props.action} title={props.text} />;
};

export default Bouton;
