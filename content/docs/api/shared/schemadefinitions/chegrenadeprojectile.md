---
title: CHEGrenadeProjectile
---

```csharp
public interface CHEGrenadeProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CHEGrenadeProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Methods

### EmitGrenade(Vector, QAngle, Vector, CBasePlayerPawn?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CHEGrenadeProjectile.cs#L17)

```csharp
public static CHEGrenadeProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The position where the HE grenade projectile will be created.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The angle at which the HE grenade projectile will be created.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity of the HE grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)? - The owner of the HE grenade projectile.

#### Returns

- [CHEGrenadeProjectile](/docs/api/shared/schemadefinitions/chegrenadeprojectile) - The created HE grenade projectile.

