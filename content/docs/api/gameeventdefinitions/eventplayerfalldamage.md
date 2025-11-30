---
title: EventPlayerFalldamage
---

# Interface EventPlayerFalldamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFalldamage.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "player_falldamage"

```csharp
public interface EventPlayerFalldamage : IGameEvent<EventPlayerFalldamage>
```

#### Implements

- [IGameEvent<EventPlayerFalldamage>](/docs/api/gameevents/igameeventt)

## Properties

### Damage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFalldamage.cs#L42)

type: float

```csharp
float Damage { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UserId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFalldamage.cs#L37)

<br />
type: player_controller_and_pawn

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UserIdController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFalldamage.cs#L22)

<br />
type: player_controller_and_pawn

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### UserIdPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFalldamage.cs#L28)

<br />
type: player_controller_and_pawn

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)

### UserIdPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerFalldamage.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)

