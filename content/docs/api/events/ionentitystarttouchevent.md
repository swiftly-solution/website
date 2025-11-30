---
title: IOnEntityStartTouchEvent
---

# Interface IOnEntityStartTouchEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L39)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when an entity starts touching another entity.

```csharp
public interface IOnEntityStartTouchEvent
```

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L45)

Gets the entity that initiated the touch.

```csharp
CBaseEntity Entity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)

### OtherEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L50)

Gets the entity being touched.

```csharp
CBaseEntity OtherEntity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)

