---
title: CMotionSearchDB
---

# Interface CMotionSearchDB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMotionSearchDB : ISchemaClass<CMotionSearchDB>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMotionSearchDB>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CodeIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L22)

```csharp
ref CUtlVector<MotionDBIndex> CodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MotionDBIndex](/docs/api/schemadefinitions/motiondbindex)>

### ResidualQuantizer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L20)

```csharp
CProductQuantizer ResidualQuantizer { get; }
```

#### Property Value

- [CProductQuantizer](/docs/api/schemadefinitions/cproductquantizer)

### RootNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchDB.cs#L18)

```csharp
CMotionSearchNode RootNode { get; }
```

#### Property Value

- [CMotionSearchNode](/docs/api/schemadefinitions/cmotionsearchnode)

