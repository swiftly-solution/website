---
title: CDecoyProjectile
---

# Interface CDecoyProjectile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDecoyProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CDecoyProjectile>, ISchemaField, ISchemaClass, INativeHandle
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
- [ISchemaClass<CDecoyProjectile>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DecoyShotTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L18)

```csharp
ref int DecoyShotTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DecoyWeaponDefIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L24)

```csharp
ref ushort DecoyWeaponDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ExpireTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L22)

```csharp
GameTime_t ExpireTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ShotsRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L20)

```csharp
ref int ShotsRemaining { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### DecoyShotTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L26)

```csharp
void DecoyShotTickUpdated()
```

### EmitGrenade(Vector, QAngle, Vector, CBasePlayerPawn?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CDecoyProjectile.cs#L17)

Creates a decoy grenade projectile.

```csharp
public static CDecoyProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/natives/vector) - The position where the decoy grenade projectile will be created.
- **angle**: [QAngle](/docs/api/natives/qangle) - The angle at which the decoy grenade projectile will be created.
- **velocity**: [Vector](/docs/api/natives/vector) - The velocity of the decoy grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)? - The owner of the decoy grenade projectile.

#### Returns

- [CDecoyProjectile](/docs/api/schemadefinitions/cdecoyprojectile) - The created decoy grenade projectile.

