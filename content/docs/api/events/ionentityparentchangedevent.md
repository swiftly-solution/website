---
title: IOnEntityParentChangedEvent
---

# Interface IOnEntityParentChangedEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityParentChangedEvent.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when an entity's parent changes.

```csharp
public interface IOnEntityParentChangedEvent
```

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityParentChangedEvent.cs#L13)

The entity that had its parent changed.

```csharp
CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

### NewParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityParentChangedEvent.cs#L18)

The new parent of the entity.

```csharp
CEntityInstance? NewParent { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)?

