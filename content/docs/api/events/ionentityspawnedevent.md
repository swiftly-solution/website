---
title: IOnEntitySpawnedEvent
---

# Interface IOnEntitySpawnedEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntitySpawnedEvent.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when an entity is spawned.

```csharp
public interface IOnEntitySpawnedEvent
```

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntitySpawnedEvent.cs#L13)

The entity that was spawned.

```csharp
CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

