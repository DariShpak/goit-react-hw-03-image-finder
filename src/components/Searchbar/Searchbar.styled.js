import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: auto;

  border-bottom: 2px solid #96b3ce;
  background-color: #c9dce3;
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const Input = styled.input`
  font-size: 12px;
  color: #504d63;

  border-radius: 30px;
  background: #d9e5e3;
  border: 2px solid #ddba86;
  outline: transparent;
  height: 15px;
  width: 145px;
  padding: 8px;

  &: focus,
  &: hover,
  &: active {
    border: 2px solid #96b3ce;
    background-color: #fcf6ca;
  }
`

export const Button = styled.button`
  border-radius: 50px;

  padding: 3px;
  width: 35px;
  border: 2px solid #ddba86;
  outline: transparent;
  background-color: #e7dfdd;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    border: 2px solid #96b3ce;
    background-color: #fcf6ca;
  }
`
