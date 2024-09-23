import {
  Button,
  Container,
  Footer,
  FooterLink,
  Instruction,
  Main,
  NextLogo,
} from "./components";

const Home = () => {
  return (
    <Container>
      <Main>
        <NextLogo />
        <Instruction />
        <Button.Container>
          <Button.Primary />
          <Button.Secondary />
        </Button.Container>
      </Main>
      <Footer>
        <FooterLink.Learn />
        <FooterLink.Example />
        <FooterLink.Home />
      </Footer>
    </Container>
  );
};

export default Home;
