---
title: IOnEntityEndTouchEvent
---

# Interface IOnEntityEndTouchEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L73)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when an entity ends touching another entity.

```csharp
public interface IOnEntityEndTouchEvent
```

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L79)

Gets the entity that initiated the touch.

```csharp
CBaseEntity Entity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)

### OtherEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L84)

Gets the entity being touched.

```csharp
CBaseEntity OtherEntity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)

