1. Create pull up for different times and change them 
2. If click start show screen two with delay and break depending on how configured
    - https://stackoverflow.com/questions/66727049/exporting-a-state-from-hook-function-to-another-component --> global states
3. Implement logic that delay is counting down automatically after clicking start and if sec at 0 change screen to break view page 
    1. Make configured value global and accessible
4. Implement start stopp logic
4. If break view is currently displayed count seconds down based on starter configs and update to high intensity interval view when sec = 0 
5. Define next steps 

https://reactnativeexample.com/a-picker-dropdown-component-for-react-native/

Stackoverflow post:

I have one page where the user selects a value from a picker and another page where the current selected value should be represented. I worked with [Context](https://reactjs.org/docs/context.html) for making the state. The state is the globally current selected value from the picker. The problem is no matter which value is selected form the picker only the standard state value gets displayed.

**Picker with state**

```reactjs
const LandingPage = () => {
  const [selectedValueRound, setSelectedValueRound] = useState("10 rounds");
  return (
    <View>
      <Picker
        selectedValue={selectedValueRound}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValueRound(itemValue)
        }
      >
        <Picker.Item label="1 round" value="0"></Picker.Item>
        <Picker.Item label="2 rounds" value="1"></Picker.Item>
      </Picker>
    </View>
  );
};

``` 

**Page where current picker should be represented**

```reactjs
const PageDelayConfigured = () => {
  const [selectedValueRound, setSelectedValueRound] = useContext(RoundContext);

  return (
    <View style={styles.button}>
      <Text>{selectedValueRound}</Text>
    </View>
  );
};
```

## Context configuration

**Context file**
```reactjs
export const RoundContext = createContext(false);

```
```
    

