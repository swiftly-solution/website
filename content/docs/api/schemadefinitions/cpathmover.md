---
title: CPathMover
---

# Interface CPathMover

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPathMover : CPathSimple, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPathSimple>, ISchemaClass<CPathMover>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPathSimple](/docs/api/schemadefinitions/cpathsimple)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPathSimple>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPathMover>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Movers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L20)

```csharp
ref CUtlVector<CHandle<CFuncMover>> Movers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CFuncMover](/docs/api/schemadefinitions/cfuncmover)>>

### PathNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L18)

```csharp
ref CUtlVector<CHandle<CMoverPathNode>> PathNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CMoverPathNode](/docs/api/schemadefinitions/cmoverpathnode)>>

### XInitialPathWorldToLocal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathMover.cs#L22)

```csharp
ref CTransform XInitialPathWorldToLocal { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

