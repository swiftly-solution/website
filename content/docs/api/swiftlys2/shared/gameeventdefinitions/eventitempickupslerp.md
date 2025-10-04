---
title: EventItemPickupSlerp
---

```csharp
public interface EventItemPickupSlerp : IGameEvent<EventItemPickupSlerp>
```

#### Implements

## Properties

**Behavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventItemPickupSlerp.cs#L43)

```csharp
short Behavior { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**Index** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventItemPickupSlerp.cs#L38)

```csharp
short Index { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventItemPickupSlerp.cs#L33)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventItemPickupSlerp.cs#L21)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventItemPickupSlerp.cs#L27)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

