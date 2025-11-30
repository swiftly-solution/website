---
title: EventVipKilled
---

# Interface EventVipKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVipKilled.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "vip_killed"

```csharp
public interface EventVipKilled : IGameEvent<EventVipKilled>
```

#### Implements

- [IGameEvent<EventVipKilled>](/docs/api/gameevents/igameeventt)

## Properties

### Attacker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVipKilled.cs#L48)

user ID who killed the VIP
<br />
type: player_controller

```csharp
int Attacker { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UserId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVipKilled.cs#L41)

player who was the VIP
<br />
type: player_controller

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UserIdController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVipKilled.cs#L23)

player who was the VIP
<br />
type: player_controller

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### UserIdPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVipKilled.cs#L30)

player who was the VIP
<br />
type: player_controller

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)

### UserIdPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVipKilled.cs#L34)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)

