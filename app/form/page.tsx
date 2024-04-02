'use client';

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
      <br />
      <Input label="Text value" id="test" />
    </div>
  );
};

export default Form;
