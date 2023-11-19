
let codeMap = {
  "PersistentFooterButton": `<flutter>
    <PersistentFooterButton><ElevatedButton>Sign-in</ElevatedButton></PersistentFooterButton>
    <PersistentFooterButton><ElevatedButton>Sign-out</ElevatedButton></PersistentFooterButton>
    <viewBody>
      <Container padding="20">the persistent footer buttons are always on the bottom of the page</Container>
    </viewBody>
  </flutter>
  `,
  "BottomNavigationBar":
    `<flutter>
  <viewBody />
  <BottomNavigationBar initialValue="0" selectedItemColor="blue-500">
    <BottomNavigationBarItem icon="home" label="Home" live-patch="/page/0" />
    <BottomNavigationBarItem icon="wallet" label="Wallet" live-patch="/page/1" />
    <BottomNavigationBarItem icon="apps" label="Photos" live-patch="/page/2" />
    <BottomNavigationBarItem icon="window" label="Albums" live-patch="/page/3" />
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
  <viewBody><Text>my view</Text></viewBody>
  <NavigationRail labelType="all" inititalValue="0" selectedItemColor="blue-500">
    <NavigationRailDestination icon="home" label="Home" live-patch="/page/0" />
    <NavigationRailDestination icon="wallet" label="Wallet" live-patch="/page/1" />
    <NavigationRailDestination icon="apps" label="Photos" live-patch="/page/2" />
    <NavigationRailDestination icon="window" label="Albums" live-patch="/page/3" />
  </NavigationRail>
</flutter>
`, "ActionChip": `<flutter>
<viewBody>
  <Container>
    <ActionChip label="hello" phx-click="server_event" icon="home" />
  </Container>
</viewBody>
</flutter>`,
  "ElevatedButton": `<flutter>
  <viewBody>
    <Center>
      <ElevatedButton>Hello world</ElevatedButton>
    </Center>
  </viewBody>
</flutter>
`,
  "IconButton": `<flutter>
<viewBody>
  <Row mainAxisAlignment="center>
    <IconButton icon="home" />
    <Container margin="0 10">
      <IconButton icon="home" filled="true" />
    </Container>
    <Container margin="0 10">
      <IconButton icon="home" filledTonal="true" />
    </Container>
  </Row>
</viewBody>
</flutter>
`,
  "ListTile": `<flutter>
  <viewBody>
    <Container>
      <ListTile tileColor="deepPurpleShade200">
        <title>my list tile</title>
        <subtitle>subtitle here</subtitle>
      </ListTile>
      <Text>hello</Text>
    </Container>
  </viewBody>
  </flutter>`,
  "BottomAppBar": `
<flutter>
  <viewBody floatingActionButtonLocation="centerDocked">
    <Container>my view</Container>
  </viewBody>
  <FloatingActionButton shape="CircleBorder"><Icon name="home" /></FloatingActionButton>
  <BottomAppBar elevation="10" padding="0" shape="CircularNotchedRectangle">
    <BottomNavigationBar initialValue="0"
      showUnselectedLabel="true"
      backgroundColor="transparent"
      elevation="0"
      selectedItemColor="blue-500">
      <BottomNavigationBarItem live-patch="/" icon="home" label="Page 1" live-patch="/page/0" />
      <BottomNavigationBarItem icon="home" label="Page 2" live-patch="/page/1" />
      <BottomNavigationBarItem icon="arrow_upward" label="Increment" live-patch="/page/2" />
      <BottomNavigationBarItem icon="arrow_downward" label="Decrement" live-patch="/page/3" />
    </BottomNavigationBar>
  </BottomAppBar>
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
  </flutter>`,
  'Form': `
<flutter>
  <Container padding="20">
    <Form phx-change="validate" phx-submit="submit">
      <Column crossAxisAlignment="start">
        <TextField name="login" initialValue="hello@example.org" />
        <TextField name="password" initialValue="hunter2" obscureText="true" />
        <Container padding="20 0">
          <Row>
            <Checkbox name="remember_me" />
            <Text>Remember me</Text>
          </Row>
        </Container>
        <Container padding="20 0">
          <Text>Choose your account type:</Text>
          <SegmentedButton initialValue="1" name="button-group">
            <ButtonSegment name="1" label="Admin" icon="home" />
            <ButtonSegment name="2" label="Normal user" icon="home" />
            <ButtonSegment name="3" label="Read only" icon="home" />
          </SegmentedButton>
        </Container>
        <ElevatedButton name="submit-btn" type="submit">Submit form</ElevatedButton>
      </Column>
    </Form>
  </Container>
</flutter>
  `,
  'Badge': `<flutter>
  <viewBody>
    <Container padding="30">
      <Badge label="1"><Icon name="home" /></Badge>
      <Text>Notifications</Text>
    </Container>
  </viewBody>
  </flutter>`,
  'DropdownButton': `<flutter>
    <viewBody>
      <Container padding="10">
        <Form phx-change="validate">
          <DropdownButton hint="select something" name="myselect">
            <DropdownMenuItem label="Your house" value="1" />
            <DropdownMenuItem value="2">
              <Row><Icon name="home" color="red" /><Text>my house</Text></Row>
            </DropdownMenuItem>
          </DropdownButton>
        </Form>
        <Text>demo</Text>
      </Container>
  </viewBody>
</flutter>`,
  'Tooltip': `<flutter>
  <viewBody>
    <Center>
      <Container padding="100">
        <Tooltip message="be careful clicking here">
          <ElevatedButton>hover me</ElevatedButton>
        </Tooltip>
        <Text>Tooltip demo</Text>
      </Container>
    </Center>
  </viewBody>
  </flutter>`
}

export default codeMap;