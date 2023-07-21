import styled from "styled-components"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;

`

export const LoaderBtn = styled.button`
  border-radius: 20px;
  padding: 3px;
  width: 90px;
  border: 2px solid #9daffa;
  outline: transparent;
  background-color: #d9e5e3;
  &:hover {
    border: 2px solid #96b3ce;
    background-color: #fcf6ca;
  }
`

export const LabelLoaderBtn = styled.span`
  color: #504d63;
  font-style: italic;
`
