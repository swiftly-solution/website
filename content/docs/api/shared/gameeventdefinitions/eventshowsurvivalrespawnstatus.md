---
title: EventShowSurvivalRespawnStatus
---

```csharp
public interface EventShowSurvivalRespawnStatus : IGameEvent<EventShowSurvivalRespawnStatus>
```

#### Implements

## Properties

**Duration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowSurvivalRespawnStatus.cs#L25)

```csharp
int Duration { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LocToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowSurvivalRespawnStatus.cs#L20)

```csharp
string LocToken { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowSurvivalRespawnStatus.cs#L43)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowSurvivalRespawnStatus.cs#L31)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowSurvivalRespawnStatus.cs#L37)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

