---
title: IOnEntityTouchHookEvent
---

# Interface IOnEntityTouchHookEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L16)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Obsolete("IOnEntityTouchHookEvent is deprecated. Use IOnEntityStartTouchEvent, IOnEntityTouchEvent, or IOnEntityEndTouchEvent instead.")]
public interface IOnEntityTouchHookEvent
```

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L23)

Gets the entity that initiated the touch.

```csharp
CBaseEntity Entity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)

### OtherEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L28)

Gets the entity being touched.

```csharp
CBaseEntity OtherEntity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)

### TouchType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L33)

Gets the type of touch interaction.

```csharp
EntityTouchType TouchType { get; }
```

#### Property Value

- [EntityTouchType](/docs/api/schemadefinitions/entitytouchtype)

