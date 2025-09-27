---
title: ScriptInfo_t
---

```csharp
public interface ScriptInfo_t : ISchemaClass<ScriptInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Code** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L16)

```csharp
ref CUtlString Code { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**ParamsModified** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L19)

```csharp
ref CUtlVector ParamsModified { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**ProxyReadParams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L21)

```csharp
ref CUtlVector<int> ProxyReadParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**ProxyWriteParams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L23)

```csharp
ref CUtlVector<int> ProxyWriteParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**ScriptType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ScriptInfo_t.cs#L25)

```csharp
ref AnimScriptType ScriptType { get; }
```

#### Property Value

- [AnimScriptType](/docs/api/shared/schemadefinitions/animscripttype)

