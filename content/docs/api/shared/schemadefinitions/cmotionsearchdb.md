---
title: CMotionSearchDB
---

```csharp
public interface CMotionSearchDB : ISchemaClass<CMotionSearchDB>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CodeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L21)

```csharp
ref CUtlVector CodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### ResidualQuantizer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L18)

```csharp
CProductQuantizer ResidualQuantizer { get; }
```

#### Property Value

- [CProductQuantizer](/docs/api/shared/schemadefinitions/cproductquantizer)

### RootNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L16)

```csharp
CMotionSearchNode RootNode { get; }
```

#### Property Value

- [CMotionSearchNode](/docs/api/shared/schemadefinitions/cmotionsearchnode)

