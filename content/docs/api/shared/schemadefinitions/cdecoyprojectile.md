---
title: CDecoyProjectile
---

```csharp
public interface CDecoyProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CDecoyProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DecoyShotTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L18)

```csharp
ref int DecoyShotTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DecoyWeaponDefIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L24)

```csharp
ref ushort DecoyWeaponDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ExpireTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L22)

```csharp
GameTime_t ExpireTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### ShotsRemaining

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L20)

```csharp
ref int ShotsRemaining { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### DecoyShotTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecoyProjectile.cs#L26)

```csharp
void DecoyShotTickUpdated()
```

### EmitGrenade(Vector, QAngle, Vector, CBasePlayerPawn?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CDecoyProjectile.cs#L17)

```csharp
public static CDecoyProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The position where the decoy grenade projectile will be created.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The angle at which the decoy grenade projectile will be created.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity of the decoy grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)? - The owner of the decoy grenade projectile.

#### Returns

- [CDecoyProjectile](/docs/api/shared/schemadefinitions/cdecoyprojectile) - The created decoy grenade projectile.

