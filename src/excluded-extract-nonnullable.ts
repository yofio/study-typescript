export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type Functiontype = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludeingFunction = Exclude<SomeTypes, Function>;

type FunvtionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunvtionTypeByExtract = Extract<SomeTypes, string | number>;
type FunvtionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
