---
title: FunctionInfo_t
---

# Interface FunctionInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FunctionInfo_t : ISchemaClass<FunctionInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FunctionInfo_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Index

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L24)

```csharp
FuseFunctionIndex_t Index { get; }
```

#### Property Value

- [FuseFunctionIndex_t](/docs/api/schemadefinitions/fusefunctionindex_t)

### IsPure

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L26)

```csharp
ref bool IsPure { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L20)

```csharp
ref CUtlStringToken NameToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### ParamCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FunctionInfo_t.cs#L22)

```csharp
ref int ParamCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

