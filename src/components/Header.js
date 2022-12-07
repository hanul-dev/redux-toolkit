import { HeaderSection, Title, Navigation, StyledLink } from "../Style/styles";

const Header = () => {
  return (
    <HeaderSection>
      <Title>
        iden
      </Title>
      <Navigation>
        <StyledLink>Home</StyledLink>
        <StyledLink>Todo</StyledLink>
        <StyledLink>category</StyledLink>
      </Navigation>
    </HeaderSection>
  );
};

export default Header;
