---
title: EventPlayerInfo
---

# Interface EventPlayerInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "player_info"
a player changed his name

```csharp
public interface EventPlayerInfo : IGameEvent<EventPlayerInfo>
```

#### Implements

- [IGameEvent<EventPlayerInfo>](/docs/api/gameevents/igameeventt)

## Properties

### Bot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L63)

true if player is a AI bot
<br />
type: bool

```csharp
bool Bot { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L24)

player name
<br />
type: string

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L56)

player network (i.e steam) id
<br />
type: uint64

```csharp
ulong SteamID { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### UserId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L49)

user ID on server (unique on server)
<br />
type: player_controller

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UserIdController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L31)

user ID on server (unique on server)
<br />
type: player_controller

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### UserIdPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L38)

user ID on server (unique on server)
<br />
type: player_controller

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)

### UserIdPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerInfo.cs#L42)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)

