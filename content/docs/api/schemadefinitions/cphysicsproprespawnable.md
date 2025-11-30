---
title: CPhysicsPropRespawnable
---

# Interface CPhysicsPropRespawnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysicsPropRespawnable.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPhysicsPropRespawnable : CPhysicsProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CPhysicsProp>, ISchemaClass<CPhysicsPropRespawnable>, ISchemaField, ISchemaClass, INativeHandle
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
- [ISchemaClass<CPhysicsPropRespawnable>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### OriginalMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysicsPropRespawnable.cs#L24)

```csharp
ref Vector OriginalMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OriginalMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysicsPropRespawnable.cs#L22)

```csharp
ref Vector OriginalMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OriginalSpawnAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysicsPropRespawnable.cs#L20)

```csharp
ref QAngle OriginalSpawnAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### OriginalSpawnOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysicsPropRespawnable.cs#L18)

```csharp
ref Vector OriginalSpawnOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RespawnDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysicsPropRespawnable.cs#L26)

```csharp
ref float RespawnDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

