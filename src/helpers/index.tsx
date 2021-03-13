import { useState } from 'react';

export const useInputState = (initValue: string) => {
  const [input, setInput] = useState(initValue);
  // const onChange = (e: ChangeEventHandler<HTMLInputElement>) => {
  // const onChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
  const onChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return [input, onChange];
};
