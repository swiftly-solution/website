---
title: IOnWeaponServicesCanUseHookEvent
---

# Interface IOnWeaponServicesCanUseHookEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IOnWeaponServicesCanUseHookEvent
```

## Properties

### OriginalResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L18)

The original result of the CanUse call.

```csharp
bool OriginalResult { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L14)

The weapon.

```csharp
CCSWeaponBase Weapon { get; }
```

#### Property Value

- [CCSWeaponBase](/docs/api/schemadefinitions/ccsweaponbase)

### WeaponServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L10)

The weapon services.

```csharp
CCSPlayer_WeaponServices WeaponServices { get; }
```

#### Property Value

- [CCSPlayer_WeaponServices](/docs/api/schemadefinitions/ccsplayer_weaponservices)

## Methods

### SetResult(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L25)

Intercept and modify the can use result.
This will modify the can use result and stop the following hooks and original function.

```csharp
void SetResult(bool result)
```

#### Parameters

- **result**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The result to modify.

