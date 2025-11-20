---
title: CMolotovProjectile
---

```csharp
public interface CMolotovProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CMolotovProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Detonated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L20)

```csharp
ref bool Detonated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBouncedOffPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L24)

```csharp
ref bool HasBouncedOffPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsIncGrenade

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L18)

```csharp
ref bool IsIncGrenade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StillTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L22)

```csharp
IntervalTimer StillTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

## Methods

### EmitGrenade(Vector, QAngle, Vector, Team, CBasePlayerPawn?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CMolotovProjectile.cs#L18)

```csharp
public static CMolotovProjectile EmitGrenade(Vector pos, QAngle angle, Vector velocity, Team team, CBasePlayerPawn? owner)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The position where the molotov grenade projectile will be created.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The angle at which the molotov grenade projectile will be created.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity of the molotov grenade projectile.
- **team**: [Team](/docs/api/shared/players/team) - The team of the molotov grenade projectile.
- **owner**: [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)? - The owner of the molotov grenade projectile.

#### Returns

- [CMolotovProjectile](/docs/api/shared/schemadefinitions/cmolotovprojectile) - The created molotov grenade projectile.

### IsIncGrenadeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L26)

```csharp
void IsIncGrenadeUpdated()
```

