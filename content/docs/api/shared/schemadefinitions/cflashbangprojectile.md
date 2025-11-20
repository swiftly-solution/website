---
title: CFlashbangProjectile
---

```csharp
public interface CFlashbangProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CFlashbangProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### NumOpponentsHit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L20)

```csharp
ref byte NumOpponentsHit { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### NumTeammatesHit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L22)

```csharp
ref byte NumTeammatesHit { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### TimeToDetonate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFlashbangProjectile.cs#L18)

```csharp
ref float TimeToDetonate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### EmitGrenade(Vector, QAngle, Vector, CBasePlayerPawn?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CFlashbangProjectile.cs#L17)

```csharp
public static CFlashbangProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The position where the flashbang grenade projectile will be created.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The angle at which the flashbang grenade projectile will be created.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity of the flashbang grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)? - The owner of the flashbang grenade projectile.

#### Returns

- [CFlashbangProjectile](/docs/api/shared/schemadefinitions/cflashbangprojectile) - The created flashbang grenade projectile.

