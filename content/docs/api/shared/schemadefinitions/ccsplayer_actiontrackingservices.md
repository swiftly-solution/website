---
title: CCSPlayer_ActionTrackingServices
---

```csharp
public interface CCSPlayer_ActionTrackingServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CCSPlayer_ActionTrackingServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### IsRescuing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L18)

```csharp
ref bool IsRescuing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastWeaponBeforeC4AutoSwitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L16)

```csharp
ref CHandle<CBasePlayerWeapon> LastWeaponBeforeC4AutoSwitch { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>

### WeaponPurchasesThisMatch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L20)

```csharp
WeaponPurchaseTracker_t WeaponPurchasesThisMatch { get; }
```

#### Property Value

- [WeaponPurchaseTracker_t](/docs/api/shared/schemadefinitions/weaponpurchasetracker_t)

### WeaponPurchasesThisRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L22)

```csharp
WeaponPurchaseTracker_t WeaponPurchasesThisRound { get; }
```

#### Property Value

- [WeaponPurchaseTracker_t](/docs/api/shared/schemadefinitions/weaponpurchasetracker_t)

## Methods

### IsRescuingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L24)

```csharp
void IsRescuingUpdated()
```

### WeaponPurchasesThisMatchUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L25)

```csharp
void WeaponPurchasesThisMatchUpdated()
```

### WeaponPurchasesThisRoundUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L26)

```csharp
void WeaponPurchasesThisRoundUpdated()
```

