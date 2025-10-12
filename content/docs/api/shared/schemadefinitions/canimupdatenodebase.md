---
title: CAnimUpdateNodeBase
---

```csharp
public interface CAnimUpdateNodeBase : ISchemaClass<CAnimUpdateNodeBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NetworkMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L18)

```csharp
ref AnimNodeNetworkMode NetworkMode { get; }
```

#### Property Value

- [AnimNodeNetworkMode](/docs/api/shared/schemadefinitions/animnodenetworkmode)

### NodePath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimUpdateNodeBase.cs#L16)

```csharp
CAnimNodePath NodePath { get; }
```

#### Property Value

- [CAnimNodePath](/docs/api/shared/schemadefinitions/canimnodepath)

