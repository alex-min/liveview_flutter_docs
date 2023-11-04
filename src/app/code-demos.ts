
let codeMap = {
  "BottomNavigationBar":
    `<flutter>
  <viewBody />
  <BottomNavigationBar initialValue="0" selectedItemColor="blue-500">
    <BottomNavigationBarItem icon="home" label="Home" />
    <BottomNavigationBarItem icon="wallet" label="Wallet" />
    <BottomNavigationBarItem icon="apps" label="Photos" />
    <BottomNavigationBarItem icon="window" label="Albums" />
  </BottomNavigationBar>
</flutter>
`, "AppBar": `<flutter>
<AppBar elevation="1">
  <leading>
    <Icon name="menu" />
  </leading>
  <title>
    <Text>hello</Text>
  </title>
</AppBar>
<viewBody>Content of the page</viewBody>
</flutter>`, "NavigationRail": `<flutter>
  <viewBody />
  <NavigationRail labelType="all" inititalValue="0" selectedItemColor="blue-500">
    <NavigationRailDestination icon="home" label="Home" />
    <NavigationRailDestination icon="wallet" label="Wallet" />
    <NavigationRailDestination icon="apps" label="Photos" />
    <NavigationRailDestination icon="window" label="Albums" />
  </NavigationRail>
</flutter>
`, "ElevatedButton": `<flutter>
  <viewBody>
    <Center>
      <ElevatedButton>Hello world</ElevatedButton>
    </Center>
  </viewBody>
</flutter>
`,
  "TextField": `<flutter>
  <viewBody>
    <Container padding="40">
      <TextField initialValue="hello@example.org" />
      <TextField initialValue="mypassword" obscureText="true" />
    </Container>
  </viewBody>
</flutter>`,
  "SegmentedButton": `
  <flutter>
    <viewBody>
      <Center>
        <SegmentedButton initialValue="1" name="button-group">
        <ButtonSegment name="1" label="first choice" icon="home" />
        <ButtonSegment name="2" label="second choice" icon="home" />
        <ButtonSegment name="3" label="third choice" icon="home" />
        </SegmentedButton>
      </Center>
    </viewBody>
  </flutter>`
}

export default codeMap;