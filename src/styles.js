import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
`

export const EditorTextArea = styled.textarea`
  background-color: transparent;
  border-color: #cbd5e1;
  border-top: none;
  color: #f8fafc;
  padding: 1em;
  font-size: 1rem;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
`
