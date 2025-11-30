---
title: CSmokeGrenadeProjectile
---

# Interface CSmokeGrenadeProjectile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSmokeGrenadeProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CSmokeGrenadeProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseCSGrenadeProjectile](/docs/api/schemadefinitions/cbasecsgrenadeprojectile)
- [CBaseGrenade](/docs/api/schemadefinitions/cbasegrenade)
- [CBaseFlex](/docs/api/schemadefinitions/cbaseflex)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseFlex>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseGrenade>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseCSGrenadeProjectile>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSmokeGrenadeProjectile>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DidGroundScorch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L40)

```csharp
ref bool DidGroundScorch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DidSmokeEffect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L20)

```csharp
ref bool DidSmokeEffect { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExplodeFromInferno

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L38)

```csharp
ref bool ExplodeFromInferno { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FllastSimulationTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L36)

```csharp
GameTime_t FllastSimulationTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastBounce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L34)

```csharp
GameTime_t LastBounce { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### RandomSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L22)

```csharp
ref int RandomSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SmokeColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L24)

```csharp
ref Vector SmokeColor { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SmokeDetonationPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L26)

```csharp
ref Vector SmokeDetonationPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SmokeEffectTickBegin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L18)

```csharp
ref int SmokeEffectTickBegin { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoxelFrameData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L28)

```csharp
ref CUtlVector<byte> VoxelFrameData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VoxelFrameDataSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L30)

```csharp
ref int VoxelFrameDataSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoxelUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L32)

```csharp
ref int VoxelUpdate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### DidSmokeEffectUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L43)

```csharp
void DidSmokeEffectUpdated()
```

### EmitGrenade(Vector, QAngle, Vector, Team, CBasePlayerPawn?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CSmokeGrenadeProjectile.cs#L18)

Creates a smoke grenade projectile.

```csharp
public static CSmokeGrenadeProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, Team team, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/natives/vector) - The position where the smoke grenade projectile will be created.
- **angle**: [QAngle](/docs/api/natives/qangle) - The angle at which the smoke grenade projectile will be created.
- **velocity**: [Vector](/docs/api/natives/vector) - The velocity of the smoke grenade projectile.
- **team**: [Team](/docs/api/players/team) - The team associated with the smoke grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)? - The owner of the smoke grenade projectile.

#### Returns

- [CSmokeGrenadeProjectile](/docs/api/schemadefinitions/csmokegrenadeprojectile) - The created smoke grenade projectile.

### RandomSeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L44)

```csharp
void RandomSeedUpdated()
```

### SmokeColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L45)

```csharp
void SmokeColorUpdated()
```

### SmokeDetonationPosUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L46)

```csharp
void SmokeDetonationPosUpdated()
```

### SmokeEffectTickBeginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L42)

```csharp
void SmokeEffectTickBeginUpdated()
```

### VoxelFrameDataSizeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L48)

```csharp
void VoxelFrameDataSizeUpdated()
```

### VoxelFrameDataUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L47)

```csharp
void VoxelFrameDataUpdated()
```

### VoxelUpdateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSmokeGrenadeProjectile.cs#L49)

```csharp
void VoxelUpdateUpdated()
```

