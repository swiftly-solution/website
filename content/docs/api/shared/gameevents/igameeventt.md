---
title: IGameEvent<T>
---

```csharp
public interface IGameEvent<T> where T : IGameEvent<T>
```

#### Type Parameters

- **T**: 

## Properties

**Accessor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEvent.cs#L5)

```csharp
IGameEventAccessor Accessor { get; }
```

#### Property Value

- [IGameEventAccessor](/docs/api/shared/gameevents/igameeventaccessor)

**DontBroadcast** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEvent.cs#L14)

```csharp
bool DontBroadcast { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

