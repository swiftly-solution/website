---
title: ScriptInfo_t
---

# Interface ScriptInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ScriptInfo_t : ISchemaClass<ScriptInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ScriptInfo_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Code

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L18)

```csharp
string Code { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParamsModified

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L20)

```csharp
ref CUtlVector<CAnimParamHandle> ParamsModified { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)>

### ProxyReadParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L22)

```csharp
ref CUtlVector<int> ProxyReadParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ProxyWriteParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L24)

```csharp
ref CUtlVector<int> ProxyWriteParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ScriptType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L26)

```csharp
ref AnimScriptType ScriptType { get; }
```

#### Property Value

- [AnimScriptType](/docs/api/schemadefinitions/animscripttype)

