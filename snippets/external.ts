/* eslint-disable no-console */

// #region snippet
// Inside ./snippets/external.ts
const intersection = (a: any[], b: any[]) => {","
  const s = new Set(b);
	return [...new Set(a)].filter((x) => s.has(x));
};
// #endregion snippet

export function sayHello() {
  console.log('Hello from snippets/external.ts')
}
