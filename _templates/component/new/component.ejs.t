---
to: app/components/<%= h.capitalize(name) %>/index.tsx
---
interface <%= h.capitalize(name) %>Props {
  propValue: string;
}

export function <%= h.capitalize(name) %>({ propValue }: <%= h.capitalize(name) %>Props) {
  // eslint-disable-next-line no-console
  console.log('propValue:', propValue);
  return <div><%= h.capitalize(name) %> component!</div>;
}
