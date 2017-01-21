// @declaration: true
declare const x: any;

declare function f00<T = number>(a?: T): T;
const f00c00 = f00();
const f00c01 = f00(1);
const f00c02 = f00("a");
const f00c03 = f00<number>();
const f00c04 = f00<number>(1);
const f00c05 = f00<string>("a");

declare function f01<T, U = T>(a?: T, b?: U): [T, U];
const f01c00 = f01();
const f01c01 = f01(1);
const f01c02 = f01(1, "a");
const f01c03 = f01<number>();
const f01c04 = f01<number>(1);
const f01c05 = f01<number>(1, 2);
const f01c06 = f01<number, string>();
const f01c07 = f01<number, string>(1);
const f01c08 = f01<number, string>(1, "a");

declare function f02<T extends number, U = T>(a?: T, b?: U): [T, U];
const f02c00 = f02();
const f02c01 = f02(1);
const f02c02 = f02(1, "a");
const f02c03 = f02<number>();
const f02c04 = f02<number>(1);
const f02c05 = f02<number>(1, 2);
const f02c06 = f02<number, string>();
const f02c07 = f02<number, string>(1);
const f02c08 = f02<number, string>(1, "a");

declare function f03<T extends number, U extends T = T>(a?: T, b?: U): [T, U];
const f03c00 = f03();
const f03c01 = f03(1);
const f03c02 = f03(1, 1);
const f03c03 = f03<number>();
const f03c04 = f03<number>(1);
const f03c05 = f03<number>(1, 2);
const f03c06 = f03<number, number>();
const f03c07 = f03<number, number>(1);
const f03c08 = f03<number, number>(1, 2);

declare function f04<T, U = T | { a: number }>(a?: T, b?: U): [T, U];
const f04c00 = f04();
const f04c01 = f04(1);
const f04c02 = f04(1, 1);
const f04c03 = f04<number>();
const f04c04 = f04<number>(1);
const f04c05 = f04<number>(1, 2);
const f04c06 = f04<number, number>();
const f04c07 = f04<number, number>(1);
const f04c08 = f04<number, number>(1, 2);

declare function f05<T, U = T & { b: number }>(a?: T, b?: U): [T, U];
const f05c00 = f05();
const f05c01 = f05(1);
const f05c02 = f05(1, 1);
const f05c03 = f05<number>();
const f05c04 = f05<number>(1);
const f05c05 = f05<{ a: number }>({ a: 1 }, { a: 2, b: 3});
const f05c06 = f05<number, number>();
const f05c07 = f05<number, number>(1);
const f05c08 = f05<number, number>(1, 2);

interface i00<T = number> { a: T; }
const i00c00 = (<i00>x).a;
const i00c01 = (<i00<number>>x).a;

interface i01<T, U = T> { a: [T, U]; }
const i01c00 = (<i01<number>>x).a;
const i01c01 = (<i01<number, string>>x).a;

interface i02<T extends number, U = T> { a: [T, U]; }
const i02c00 = (<i02<number>>x).a;
const i02c01 = (<i02<1>>x).a;
const i02c02 = (<i02<number, number>>x).a;
const i02c03 = (<i02<1, number>>x).a;
const i02c04 = (<i02<number, 1>>x).a;

interface i03<T extends number, U extends T = T> { a: [T, U]; }
const i03c00 = (<i03<number>>x).a;
const i03c01 = (<i03<1>>x).a;
const i03c02 = (<i03<number, number>>x).a;
const i03c03 = (<i03<1, 1>>x).a;
const i03c04 = (<i03<number, 1>>x).a;

interface i04 {}
interface i04<T> {}
interface i04<T = number> {}
interface i04<T = number, U = string> {}

interface Base01<T> { a: T; }
interface Base01Constructor { new <T = number>(a?: T): Base01<T>; }

declare const Base01: Base01Constructor;
const Base01c00 = new Base01();
const Base01c01 = new Base01(1);
const Base01c02 = new Base01<number>();
const Base01c03 = new Base01<number>(1);

declare class Derived01<T> extends Base01<T> { }
const Derived01c00 = new Derived01();
const Derived01c01 = new Derived01(1);
const Derived01c02 = new Derived01<number>();
const Derived01c03 = new Derived01<number>(1);

declare class Derived02<T = string> extends Base01<T> { }
const Derived02c00 = new Derived02();
const Derived02c01 = new Derived02(1);
const Derived02c02 = new Derived02<number>();
const Derived02c03 = new Derived02<number>(1);
