---
title: CMolotovProjectile
---

# Interface CMolotovProjectile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMolotovProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CMolotovProjectile>, ISchemaField, ISchemaClass, INativeHandle
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
- [ISchemaClass<CMolotovProjectile>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Detonated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L20)

```csharp
ref bool Detonated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBouncedOffPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L24)

```csharp
ref bool HasBouncedOffPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsIncGrenade

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L18)

```csharp
ref bool IsIncGrenade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StillTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L22)

```csharp
IntervalTimer StillTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

## Methods

### EmitGrenade(Vector, QAngle, Vector, Team, CBasePlayerPawn?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CMolotovProjectile.cs#L18)

Creates a molotov grenade projectile.

```csharp
public static CMolotovProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, Team team, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/natives/vector) - The position where the molotov grenade projectile will be created.
- **angle**: [QAngle](/docs/api/natives/qangle) - The angle at which the molotov grenade projectile will be created.
- **velocity**: [Vector](/docs/api/natives/vector) - The velocity of the molotov grenade projectile.
- **team**: [Team](/docs/api/players/team) - The team of the molotov grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)? - The owner of the molotov grenade projectile.

#### Returns

- [CMolotovProjectile](/docs/api/schemadefinitions/cmolotovprojectile) - The created molotov grenade projectile.

### IsIncGrenadeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L26)

```csharp
void IsIncGrenadeUpdated()
```

