---
title: IOnWeaponServicesCanUseHookEvent
---

```csharp
public interface IOnWeaponServicesCanUseHookEvent
```

## Properties

### OriginalResult

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L18)

```csharp
bool OriginalResult { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weapon

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L14)

```csharp
CCSWeaponBase Weapon { get; }
```

#### Property Value

- [CCSWeaponBase](/docs/api/shared/schemadefinitions/ccsweaponbase)

### WeaponServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L10)

```csharp
CCSPlayer_WeaponServices WeaponServices { get; }
```

#### Property Value

- [CCSPlayer_WeaponServices](/docs/api/shared/schemadefinitions/ccsplayer_weaponservices)

## Methods

### SetResult(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnWeaponServicesCanUseHookEvent.cs#L25)

```csharp
void SetResult(bool result)
```

#### Parameters

- **result**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The result to modify.

