---
title: CBaseCSGrenade
---

```csharp
public interface CBaseCSGrenade : CCSWeaponBase, CBasePlayerWeapon, CEconEntity, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CEconEntity>, ISchemaClass<CBasePlayerWeapon>, ISchemaClass<CCSWeaponBase>, ISchemaClass<CBaseCSGrenade>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DropTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L32)

```csharp
GameTime_t DropTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### IsHeldByPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L20)

```csharp
ref bool IsHeldByPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JumpThrow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L24)

```csharp
ref bool JumpThrow { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JustPulledPin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L36)

```csharp
ref bool JustPulledPin { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NextHoldFrac

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L40)

```csharp
ref float NextHoldFrac { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextHoldTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L38)

```csharp
GameTick_t NextHoldTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

### PinPullTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L34)

```csharp
GameTime_t PinPullTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### PinPulled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L22)

```csharp
ref bool PinPulled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Redraw

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L18)

```csharp
ref bool Redraw { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SwitchToWeaponAfterThrow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L42)

```csharp
ref CHandle<CCSWeaponBase> SwitchToWeaponAfterThrow { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSWeaponBase](/docs/api/shared/schemadefinitions/ccsweaponbase)>

### ThrowAnimating

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L26)

```csharp
ref bool ThrowAnimating { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ThrowStrength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L30)

```csharp
ref float ThrowStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ThrowTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L28)

```csharp
GameTime_t ThrowTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

## Methods

### DropTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L51)

```csharp
void DropTimeUpdated()
```

### IsHeldByPlayerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L45)

```csharp
void IsHeldByPlayerUpdated()
```

### JumpThrowUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L47)

```csharp
void JumpThrowUpdated()
```

### JustPulledPinUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L53)

```csharp
void JustPulledPinUpdated()
```

### NextHoldFracUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L55)

```csharp
void NextHoldFracUpdated()
```

### NextHoldTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L54)

```csharp
void NextHoldTickUpdated()
```

### PinPullTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L52)

```csharp
void PinPullTimeUpdated()
```

### PinPulledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L46)

```csharp
void PinPulledUpdated()
```

### RedrawUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L44)

```csharp
void RedrawUpdated()
```

### SwitchToWeaponAfterThrowUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L56)

```csharp
void SwitchToWeaponAfterThrowUpdated()
```

### ThrowAnimatingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L48)

```csharp
void ThrowAnimatingUpdated()
```

### ThrowStrengthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L50)

```csharp
void ThrowStrengthUpdated()
```

### ThrowTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCSGrenade.cs#L49)

```csharp
void ThrowTimeUpdated()
```

