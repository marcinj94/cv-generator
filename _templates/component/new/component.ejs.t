---
to: app/components/<%= h.capitalize(name) %>/index.tsx
---
interface <%= h.capitalize(name) %>Props {
  firstProp: string;
  secondProp: 'option1' | 'option2';
}

export const <%= h.capitalize(name) %> = ({ firstProp, secondProp }: <%= h.capitalize(name) %>Props) => {
  // eslint-disable-next-line no-console
  console.log('firstProp:', firstProp);
  // eslint-disable-next-line no-console
  console.log('secondProp:', secondProp);
  return (
    <div>
      Paragraph component (firstProp={firstProp} | secondProp={secondProp})!
    </div>
  );
}
