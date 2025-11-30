---
title: CFlashbangProjectile
---

# Interface CFlashbangProjectile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFlashbangProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CFlashbangProjectile>, ISchemaField, ISchemaClass, INativeHandle
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
- [ISchemaClass<CFlashbangProjectile>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### NumOpponentsHit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L20)

```csharp
ref byte NumOpponentsHit { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### NumTeammatesHit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L22)

```csharp
ref byte NumTeammatesHit { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### TimeToDetonate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L18)

```csharp
ref float TimeToDetonate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### EmitGrenade(Vector, QAngle, Vector, CBasePlayerPawn?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CFlashbangProjectile.cs#L17)

Creates a flashbang grenade projectile.

```csharp
public static CFlashbangProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/natives/vector) - The position where the flashbang grenade projectile will be created.
- **angle**: [QAngle](/docs/api/natives/qangle) - The angle at which the flashbang grenade projectile will be created.
- **velocity**: [Vector](/docs/api/natives/vector) - The velocity of the flashbang grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)? - The owner of the flashbang grenade projectile.

#### Returns

- [CFlashbangProjectile](/docs/api/schemadefinitions/cflashbangprojectile) - The created flashbang grenade projectile.

