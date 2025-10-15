---
title: FunctionInfo_t
---

```csharp
public interface FunctionInfo_t : ISchemaClass<FunctionInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Index

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L23)

```csharp
FuseFunctionIndex_t Index { get; }
```

#### Property Value

- [FuseFunctionIndex_t](/docs/api/shared/schemadefinitions/fusefunctionindex_t)

### IsPure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L25)

```csharp
ref bool IsPure { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L17)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameToken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L19)

```csharp
ref CUtlStringToken NameToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### ParamCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L21)

```csharp
ref int ParamCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

