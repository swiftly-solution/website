---
title: CShatterGlassShardPhysics
---

# Interface CShatterGlassShardPhysics

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CShatterGlassShardPhysics : CPhysicsProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CPhysicsProp>, ISchemaClass<CShatterGlassShardPhysics>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPhysicsProp](/docs/api/schemadefinitions/cphysicsprop)
- [CBreakableProp](/docs/api/schemadefinitions/cbreakableprop)
- [CBaseProp](/docs/api/schemadefinitions/cbaseprop)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBreakableProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPhysicsProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CShatterGlassShardPhysics>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Debris

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L18)

```csharp
ref bool Debris { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParentShard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L20)

```csharp
ref uint ParentShard { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ShardDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L22)

```csharp
shard_model_desc_t ShardDesc { get; }
```

#### Property Value

- [shard_model_desc_t](/docs/api/schemadefinitions/shard_model_desc_t)

## Methods

### ShardDescUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L24)

```csharp
void ShardDescUpdated()
```

