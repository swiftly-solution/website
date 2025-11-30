---
title: CBasePlayerWeapon
---

# Interface CBasePlayerWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBasePlayerWeapon : CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CEconEntity](/docs/api/schemadefinitions/ceconentity)
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
- [ISchemaClass<CEconEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerWeapon>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Clip1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L26)

```csharp
ref int Clip1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Clip2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L28)

```csharp
ref int Clip2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextPrimaryAttackTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L18)

```csharp
GameTick_t NextPrimaryAttackTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### NextPrimaryAttackTickRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L20)

```csharp
ref float NextPrimaryAttackTickRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextSecondaryAttackTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L22)

```csharp
GameTick_t NextSecondaryAttackTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### NextSecondaryAttackTickRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L24)

```csharp
ref float NextSecondaryAttackTickRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OnPlayerUse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L32)

```csharp
CEntityIOOutput OnPlayerUse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### PlayerWeaponVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerWeapon.cs#L5)

```csharp
CBasePlayerWeaponVData PlayerWeaponVData { get; }
```

#### Property Value

- [CBasePlayerWeaponVData](/docs/api/schemadefinitions/cbaseplayerweaponvdata)

### ReserveAmmo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L30)

```csharp
ISchemaFixedArray<int> ReserveAmmo { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

## Methods

### Clip1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L38)

```csharp
void Clip1Updated()
```

### Clip2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L39)

```csharp
void Clip2Updated()
```

### NextPrimaryAttackTickRatioUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L35)

```csharp
void NextPrimaryAttackTickRatioUpdated()
```

### NextPrimaryAttackTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L34)

```csharp
void NextPrimaryAttackTickUpdated()
```

### NextSecondaryAttackTickRatioUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L37)

```csharp
void NextSecondaryAttackTickRatioUpdated()
```

### NextSecondaryAttackTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L36)

```csharp
void NextSecondaryAttackTickUpdated()
```

### ReserveAmmoUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerWeapon.cs#L40)

```csharp
void ReserveAmmoUpdated()
```

