---
title: IOnItemServicesCanAcquireHookEvent
---

```csharp
public interface IOnItemServicesCanAcquireHookEvent
```

## Properties

**AcquireMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L21)

```csharp
AcquireMethod AcquireMethod { get; }
```

#### Property Value

- [AcquireMethod](/docs/api/shared/misc/acquiremethod)

**EconItemView** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L16)

```csharp
CEconItemView EconItemView { get; }
```

#### Property Value

- [CEconItemView](/docs/api/shared/schemadefinitions/ceconitemview)

**ItemServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L11)

```csharp
CCSPlayer_ItemServices ItemServices { get; }
```

#### Property Value

- [CCSPlayer_ItemServices](/docs/api/shared/schemadefinitions/ccsplayer_itemservices)

**OriginalResult** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L26)

```csharp
AcquireResult OriginalResult { get; }
```

#### Property Value

- [AcquireResult](/docs/api/ult)

## Methods

**SetAcquireResult(AcquireResult)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnItemServicesCanAcquireHookEvent.cs#L33)

```csharp
void SetAcquireResult(AcquireResult result)
```

#### Parameters

- **result**: [AcquireResult](/docs/api/ult) - The result to modify.

