---
title: CAnimUpdateNodeBase
---

# Interface CAnimUpdateNodeBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimUpdateNodeBase : ISchemaClass<CAnimUpdateNodeBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L22)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NetworkMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L20)

```csharp
ref AnimNodeNetworkMode NetworkMode { get; }
```

#### Property Value

- [AnimNodeNetworkMode](/docs/api/schemadefinitions/animnodenetworkmode)

### NodePath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L18)

```csharp
CAnimNodePath NodePath { get; }
```

#### Property Value

- [CAnimNodePath](/docs/api/schemadefinitions/canimnodepath)

