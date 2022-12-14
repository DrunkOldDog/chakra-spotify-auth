import styled from "@emotion/styled";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { Spotify } from "@assets/icons";
import { User } from "./User";
import { GlobalPropTypes } from "@common/constants";
import PropTypes from "prop-types";

export const Navbar = ({ user, signIn, signOut }) => {
  return (
    <NavigationBar height={{ sm: "54px", lg: "80px" }}>
      <Container height={"100%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          height="100%"
        >
          <Spotify fill="#fff" height={{ sm: "26px", lg: "40px" }} />
          {!user ? (
            <Button
              size={{ sm: "sm", lg: "md" }}
              onClick={() => signIn("spotify")}
            >
              Log In
            </Button>
          ) : (
            <User user={user} onLogout={signOut} />
          )}
        </Flex>
      </Container>
    </NavigationBar>
  );
};

const NavigationBar = styled(Box)`
  background-color: #000;
`;

NavigationBar.defaultProps = {
  as: "nav",
};

Navbar.propTypes = {
  user: GlobalPropTypes.user,
  signIn: PropTypes.func,
  signOut: PropTypes.func,
};
