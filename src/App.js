import { RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { router } from "./router";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    text-transform:uppercase;
    font-weight:700;
  }
`;
const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
