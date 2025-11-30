---
title: CCSPlayer_ActionTrackingServices
---

# Interface CCSPlayer_ActionTrackingServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayer_ActionTrackingServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CCSPlayer_ActionTrackingServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayer_ActionTrackingServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### IsRescuing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L20)

```csharp
ref bool IsRescuing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastWeaponBeforeC4AutoSwitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L18)

```csharp
ref CHandle<CBasePlayerWeapon> LastWeaponBeforeC4AutoSwitch { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)>

### WeaponPurchasesThisMatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L22)

```csharp
WeaponPurchaseTracker_t WeaponPurchasesThisMatch { get; }
```

#### Property Value

- [WeaponPurchaseTracker_t](/docs/api/schemadefinitions/weaponpurchasetracker_t)

### WeaponPurchasesThisRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L24)

```csharp
WeaponPurchaseTracker_t WeaponPurchasesThisRound { get; }
```

#### Property Value

- [WeaponPurchaseTracker_t](/docs/api/schemadefinitions/weaponpurchasetracker_t)

## Methods

### IsRescuingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L26)

```csharp
void IsRescuingUpdated()
```

### WeaponPurchasesThisMatchUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L27)

```csharp
void WeaponPurchasesThisMatchUpdated()
```

### WeaponPurchasesThisRoundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_ActionTrackingServices.cs#L28)

```csharp
void WeaponPurchasesThisRoundUpdated()
```

