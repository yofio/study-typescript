export {};

type MyExclude =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type Functiontype = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunvtionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
