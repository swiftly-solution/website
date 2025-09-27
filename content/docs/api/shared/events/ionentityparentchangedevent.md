---
title: IOnEntityParentChangedEvent
---

```csharp
public interface IOnEntityParentChangedEvent
```

## Properties

**Entity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityParentChangedEvent.cs#L13)

```csharp
CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)

**NewParent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityParentChangedEvent.cs#L18)

```csharp
CEntityInstance? NewParent { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)?

