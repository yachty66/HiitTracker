const Page1 = ({ navigation }) => {
  return (
    <View>
      <CountDown
        size={40}
        until={someValueConfiguredAtTheBeginning}
        timeToShow={["S"]}
        onFinish={() => {
          navigation.navigate("Page2");
        }}
      />
    </View>
  );
};


const Page2 = ({ navigation }) => {
  return (
    <View>
      <CountDown
        size={40}
        until={someValueConfiguredAtTheBeginning}
        timeToShow={["S"]}
        onFinish={() => {
          navigation.navigate("Page1");
        }}
      />
    </View>
  );
};
