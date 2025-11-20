---
title: ScriptInfo_t
---

```csharp
public interface ScriptInfo_t : ISchemaClass<ScriptInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Code

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L18)

```csharp
string Code { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParamsModified

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L20)

```csharp
ref CUtlVector<CAnimParamHandle> ParamsModified { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)>

### ProxyReadParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L22)

```csharp
ref CUtlVector<int> ProxyReadParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ProxyWriteParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L24)

```csharp
ref CUtlVector<int> ProxyWriteParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ScriptType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L26)

```csharp
ref AnimScriptType ScriptType { get; }
```

#### Property Value

- [AnimScriptType](/docs/api/shared/schemadefinitions/animscripttype)

