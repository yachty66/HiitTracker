const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <RoundContext.Provider value={[selectedValueRound, setSelectedValueRound]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirsFile" component={FirsFile} />
          <Stack.Screen name="SecondFile" component={SecondFile} />
        </Stack.Navigator>
      </NavigationContainer>
    </RoundContext.Provider>
  );
};
