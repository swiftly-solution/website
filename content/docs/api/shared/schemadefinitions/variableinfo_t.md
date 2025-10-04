---
title: VariableInfo_t
---

```csharp
public interface VariableInfo_t : ISchemaClass<VariableInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Access** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L26)

```csharp
ref FuseVariableAccess_t Access { get; }
```

#### Property Value

- [FuseVariableAccess_t](/docs/api/shared/schemadefinitions/fusevariableaccess_t)

**Index** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L20)

```csharp
FuseVariableIndex_t Index { get; }
```

#### Property Value

- [FuseVariableIndex_t](/docs/api/shared/schemadefinitions/fusevariableindex_t)

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**NameToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L18)

```csharp
ref CUtlStringToken NameToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

**NumComponents** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L22)

```csharp
ref byte NumComponents { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**VarType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VariableInfo_t.cs#L24)

```csharp
ref FuseVariableType_t VarType { get; }
```

#### Property Value

- [FuseVariableType_t](/docs/api/shared/schemadefinitions/fusevariabletype_t)

