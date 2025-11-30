---
title: IOnItemServicesCanAcquireHookEvent
---

# Interface IOnItemServicesCanAcquireHookEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IOnItemServicesCanAcquireHookEvent
```

## Properties

### AcquireMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L26)

The acquire method.

```csharp
AcquireMethod AcquireMethod { get; }
```

#### Property Value

- [AcquireMethod](/docs/api/misc/acquiremethod)

### EconItemView

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L16)

The econ item view.

```csharp
CEconItemView EconItemView { get; }
```

#### Property Value

- [CEconItemView](/docs/api/schemadefinitions/ceconitemview)

### ItemServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L11)

The item services.

```csharp
CCSPlayer_ItemServices ItemServices { get; }
```

#### Property Value

- [CCSPlayer_ItemServices](/docs/api/schemadefinitions/ccsplayer_itemservices)

### OriginalResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L31)

The original result of the CanAcquire call.

```csharp
AcquireResult OriginalResult { get; }
```

#### Property Value

- [AcquireResult](/docs/api/misc/acquireresult)

### WeaponVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L21)

The weapon vdata if found, otherwise null.

```csharp
CCSWeaponBaseVData? WeaponVData { get; }
```

#### Property Value

- [CCSWeaponBaseVData](/docs/api/schemadefinitions/ccsweaponbasevdata)?

## Methods

### SetAcquireResult(AcquireResult)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L38)

Intercept and modify the acquire result.
This will modify the acquire result and stop the following hooks and original function.

```csharp
void SetAcquireResult(AcquireResult result)
```

#### Parameters

- **result**: [AcquireResult](/docs/api/misc/acquireresult) - The result to modify.

