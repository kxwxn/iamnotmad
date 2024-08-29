import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100vh;
  overflow-y: auto;
`;

const OutletFrame = styled.div``;

export const Layout = () => {
  return (
    <Wrapper>
      <Nav />
      <OutletFrame>
        <Outlet />
      </OutletFrame>
    </Wrapper>
  );
};
