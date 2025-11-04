---
title: IOnEntityTouchHookEvent
---

```csharp
[Obsolete("IOnEntityTouchHookEvent is deprecated. Use IOnEntityStartTouchEvent, IOnEntityTouchEvent, or IOnEntityEndTouchEvent instead.")]
public interface IOnEntityTouchHookEvent
```

## Properties

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L23)

```csharp
CBaseEntity Entity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)

### OtherEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L28)

```csharp
CBaseEntity OtherEntity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)

### TouchType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L33)

```csharp
EntityTouchType TouchType { get; }
```

#### Property Value

- [EntityTouchType](/docs/api/shared/schemadefinitions/entitytouchtype)

