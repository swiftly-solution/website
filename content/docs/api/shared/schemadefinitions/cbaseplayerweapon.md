---
title: CBasePlayerWeapon
---

```csharp
public interface CBasePlayerWeapon : CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Clip1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L25)

```csharp
ref int Clip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Clip2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L27)

```csharp
ref int Clip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextPrimaryAttackTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L17)

```csharp
GameTick_t NextPrimaryAttackTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### NextPrimaryAttackTickRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L19)

```csharp
ref float NextPrimaryAttackTickRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextSecondaryAttackTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L21)

```csharp
GameTick_t NextSecondaryAttackTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### NextSecondaryAttackTickRatio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L23)

```csharp
ref float NextSecondaryAttackTickRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnPlayerUse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L31)

```csharp
CEntityIOOutput OnPlayerUse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PlayerWeaponVData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerWeapon.cs#L5)

```csharp
CBasePlayerWeaponVData PlayerWeaponVData { get; }
```

#### Property Value

- [CBasePlayerWeaponVData](/docs/api/shared/schemadefinitions/cbaseplayerweaponvdata)

### ReserveAmmo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L29)

```csharp
ISchemaFixedArray<int> ReserveAmmo { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

## Methods

### Clip1Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L37)

```csharp
void Clip1Updated()
```

### Clip2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L38)

```csharp
void Clip2Updated()
```

### NextPrimaryAttackTickRatioUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L34)

```csharp
void NextPrimaryAttackTickRatioUpdated()
```

### NextPrimaryAttackTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L33)

```csharp
void NextPrimaryAttackTickUpdated()
```

### NextSecondaryAttackTickRatioUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L36)

```csharp
void NextSecondaryAttackTickRatioUpdated()
```

### NextSecondaryAttackTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L35)

```csharp
void NextSecondaryAttackTickUpdated()
```

### ReserveAmmoUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L39)

```csharp
void ReserveAmmoUpdated()
```

