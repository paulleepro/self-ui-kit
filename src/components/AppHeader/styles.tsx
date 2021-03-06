import styled from "styled-components";
import colors from "styles/colors";
import { NavLink } from "react-router-dom";
import { Box } from "react-basic-blocks";

export const Wrapper = styled(Box)`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.7);
  height: 64px;
  z-index: 10;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  padding-left: 24px;
`;

export const LogoutWrapper = styled.div`
  padding-left: 24px;
  cursor: pointer;
`;
