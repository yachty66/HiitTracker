const SampleComponent = () => {
  const StartButton = () => {
    return <Component1 />;
  };

  const StopButton = () => {
    return <Component2 />;
  };

  const [status, setStatus] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => {
          setStatus(!status);
        }}
      >
        {status ? <StopButton /> : <StartButton />}
      </Pressable>
    </View>
  );
};

export default SampleComponent;
