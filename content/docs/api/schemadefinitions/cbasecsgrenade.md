---
title: CBaseCSGrenade
---

# Interface CBaseCSGrenade

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseCSGrenade : CCSWeaponBase, CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaClass<CBaseCSGrenade>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CCSWeaponBase](/docs/api/schemadefinitions/ccsweaponbase)
- [CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)
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
- [ISchemaClass<CCSWeaponBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseCSGrenade>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DropTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L32)

```csharp
GameTime_t DropTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### IsHeldByPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L20)

```csharp
ref bool IsHeldByPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JumpThrow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L24)

```csharp
ref bool JumpThrow { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JustPulledPin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L36)

```csharp
ref bool JustPulledPin { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NextHoldFrac

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L40)

```csharp
ref float NextHoldFrac { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextHoldTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L38)

```csharp
GameTick_t NextHoldTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

### PinPullTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L34)

```csharp
GameTime_t PinPullTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### PinPulled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L22)

```csharp
ref bool PinPulled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Redraw

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L18)

```csharp
ref bool Redraw { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SwitchToWeaponAfterThrow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L42)

```csharp
ref CHandle<CCSWeaponBase> SwitchToWeaponAfterThrow { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSWeaponBase](/docs/api/schemadefinitions/ccsweaponbase)>

### ThrowAnimating

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L26)

```csharp
ref bool ThrowAnimating { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ThrowStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L30)

```csharp
ref float ThrowStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ThrowTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L28)

```csharp
GameTime_t ThrowTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

## Methods

### DropTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L51)

```csharp
void DropTimeUpdated()
```

### IsHeldByPlayerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L45)

```csharp
void IsHeldByPlayerUpdated()
```

### JumpThrowUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L47)

```csharp
void JumpThrowUpdated()
```

### JustPulledPinUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L53)

```csharp
void JustPulledPinUpdated()
```

### NextHoldFracUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L55)

```csharp
void NextHoldFracUpdated()
```

### NextHoldTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L54)

```csharp
void NextHoldTickUpdated()
```

### PinPullTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L52)

```csharp
void PinPullTimeUpdated()
```

### PinPulledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L46)

```csharp
void PinPulledUpdated()
```

### RedrawUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L44)

```csharp
void RedrawUpdated()
```

### SwitchToWeaponAfterThrowUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L56)

```csharp
void SwitchToWeaponAfterThrowUpdated()
```

### ThrowAnimatingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L48)

```csharp
void ThrowAnimatingUpdated()
```

### ThrowStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L50)

```csharp
void ThrowStrengthUpdated()
```

### ThrowTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L49)

```csharp
void ThrowTimeUpdated()
```

