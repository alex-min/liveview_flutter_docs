
let codeMap = {
  "bottom-bar":
    `<flutter>
  <viewBody />
  <BottomNavigationBar currentIndex="0" selectedItemColor="blue-500">
    <BottomNavigationBarIcon name="home" label="Home" />
    <BottomNavigationBarIcon name="wallet" label="Wallet" />
    <BottomNavigationBarIcon name="apps" label="Photos" />
    <BottomNavigationBarIcon name="window" label="Albums" />
  </BottomNavigationBar>
</flutter>
`, "AppBar": `<flutter>
<AppBar elevation="1">
  <leading>
    <Icon name="menu"  as="leading" />
  </leading>
  <title>
    <Text>hello</Text>
  </title>
</AppBar>
<viewBody>Content of the page</viewBody>
</flutter>`, "navigation-rail": `<flutter>
  <viewBody />
  <NavigationRail labelType="all" selectedIndex="0" selectedItemColor="blue-500">
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
      <TextField value="hello@example.org" />
      <TextField value="mypassword" obscureText="true" />
    </Container>
  </viewBody>
</flutter>
`}

export default codeMap;