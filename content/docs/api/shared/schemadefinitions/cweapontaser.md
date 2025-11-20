---
title: CWeaponTaser
---

```csharp
public interface CWeaponTaser : CCSWeaponBaseGun, CCSWeaponBase, CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaClass<CCSWeaponBaseGun>, ISchemaClass<CWeaponTaser>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FireTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponTaser.cs#L18)

```csharp
GameTime_t FireTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastAttackTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponTaser.cs#L20)

```csharp
ref int LastAttackTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### FireTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CWeaponTaser.cs#L22)

```csharp
void FireTimeUpdated()
```

