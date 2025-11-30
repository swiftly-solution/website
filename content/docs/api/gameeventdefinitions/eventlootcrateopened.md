---
title: EventLootCrateOpened
---

# Interface EventLootCrateOpened

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventLootCrateOpened.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "loot_crate_opened"

```csharp
public interface EventLootCrateOpened : IGameEvent<EventLootCrateOpened>
```

#### Implements

- [IGameEvent<EventLootCrateOpened>](/docs/api/gameevents/igameeventt)

## Properties

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventLootCrateOpened.cs#L48)

type of crate (metal, wood, or paradrop)
<br />
type: string

```csharp
string Type { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UserId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventLootCrateOpened.cs#L41)

player entindex
<br />
type: player_controller

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UserIdController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventLootCrateOpened.cs#L23)

player entindex
<br />
type: player_controller

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### UserIdPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventLootCrateOpened.cs#L30)

player entindex
<br />
type: player_controller

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)

### UserIdPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventLootCrateOpened.cs#L34)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)

