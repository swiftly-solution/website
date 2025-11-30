---
title: IGameEvent
---

# Interface IGameEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEvent.cs#L3)

**Namespace**: [SwiftlyS2.Shared.GameEvents](/docs/api/gameevents)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IGameEvent<T> where T : IGameEvent<T>
```

#### Type Parameters

- **T**: 

## Properties

### Accessor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEvent.cs#L5)

```csharp
IGameEventAccessor Accessor { get; }
```

#### Property Value

- [IGameEventAccessor](/docs/api/gameevents/igameeventaccessor)

### DontBroadcast

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEvent.cs#L14)

When true, the event will not be broadcast to clients.

```csharp
bool DontBroadcast { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

