'use client';

import { BiShower } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { GiAirplaneArrival } from 'react-icons/gi';
import { Button, FormHeader, Input } from '../components';

const Form = () => {
  const tst = 1;

  // helper with generate PDF - https://harrisonpim.com/blog/creating-a-downloadable-pdf-copy-of-a-page-using-next-js-and-puppeteer
  // eslint-disable-next-line no-console
  console.log('tst:', tst);

  // @ts-expect-error should be ok - type is exactly the same as type from React.onClick btn TypeScript
  const handleOnClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // eslint-disable-next-line no-console
    console.log('e:', e);
  };

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <FormHeader header="CV Generator - Formularz" />
      <Button label="Download" onClick={handleOnClick} />
      <br />
      <br />
      <br />
      <Button disabled label="Download" onClick={handleOnClick} />
      <br />
      <Button disabled label="Download" onClick={handleOnClick} Icon={BiShower} />
      <br />
      <Input label="Text value" id="test1" type="text" error errorDescription="Opis błędu" />
      <br />
      <Input
        label="Number value"
        id="test2"
        type="number"
        error={false}
        errorDescription="Opis błędu"
      />
      <br />
      <Input
        label="Number value"
        id="test2"
        type="number"
        error={false}
        errorDescription="Opis błędu"
        Icon={GiAirplaneArrival}
      />
      <br />
      <Input
        label="Password value"
        id="test3"
        type="password"
        error={false}
        errorDescription="Opis błędu"
      />
      <br />
      <Input
        label="Password value"
        id="test3"
        type="password"
        error={false}
        errorDescription="Opis błędu"
        togglePassword
      />
      <br />
      <Input label="Email value" id="test4" type="email" error errorDescription="Opis błędu" />
      <br />
      <Input
        label="Text with icon value"
        id="test5"
        type="email"
        error={false}
        errorDescription="Opis błędu"
        Icon={BsPerson}
      />
    </div>
  );
};

export default Form;
