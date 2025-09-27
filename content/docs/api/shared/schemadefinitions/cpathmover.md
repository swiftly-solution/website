---
title: CPathMover
---

```csharp
public interface CPathMover : CPathSimple, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPathSimple>, ISchemaClass<CPathMover>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Movers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L18)

```csharp
ref CUtlVector<CHandle<CFuncMover>> Movers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CFuncMover](/docs/api/shared/schemadefinitions/cfuncmover)>>

**PathNodes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L16)

```csharp
ref CUtlVector<CHandle<CMoverPathNode>> PathNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CMoverPathNode](/docs/api/shared/schemadefinitions/cmoverpathnode)>>

**XInitialPathWorldToLocal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L20)

```csharp
ref CTransform XInitialPathWorldToLocal { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

