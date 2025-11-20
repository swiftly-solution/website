---
title: CMotionSearchDB
---

```csharp
public interface CMotionSearchDB : ISchemaClass<CMotionSearchDB>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CodeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L22)

```csharp
ref CUtlVector<MotionDBIndex> CodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MotionDBIndex](/docs/api/shared/schemadefinitions/motiondbindex)>

### ResidualQuantizer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L20)

```csharp
CProductQuantizer ResidualQuantizer { get; }
```

#### Property Value

- [CProductQuantizer](/docs/api/shared/schemadefinitions/cproductquantizer)

### RootNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L18)

```csharp
CMotionSearchNode RootNode { get; }
```

#### Property Value

- [CMotionSearchNode](/docs/api/shared/schemadefinitions/cmotionsearchnode)

