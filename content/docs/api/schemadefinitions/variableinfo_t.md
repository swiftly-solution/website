---
title: VariableInfo_t
---

# Interface VariableInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VariableInfo_t : ISchemaClass<VariableInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VariableInfo_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Access

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L28)

```csharp
ref FuseVariableAccess_t Access { get; }
```

#### Property Value

- [FuseVariableAccess_t](/docs/api/schemadefinitions/fusevariableaccess_t)

### Index

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L22)

```csharp
FuseVariableIndex_t Index { get; }
```

#### Property Value

- [FuseVariableIndex_t](/docs/api/schemadefinitions/fusevariableindex_t)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L20)

```csharp
ref CUtlStringToken NameToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### NumComponents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L24)

```csharp
ref byte NumComponents { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### VarType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L26)

```csharp
ref FuseVariableType_t VarType { get; }
```

#### Property Value

- [FuseVariableType_t](/docs/api/schemadefinitions/fusevariabletype_t)

