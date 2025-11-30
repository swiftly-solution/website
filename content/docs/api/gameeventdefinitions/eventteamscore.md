---
title: EventTeamScore
---

# Interface EventTeamScore

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamScore.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "team_score"
team score changed

```csharp
public interface EventTeamScore : IGameEvent<EventTeamScore>
```

#### Implements

- [IGameEvent<EventTeamScore>](/docs/api/gameevents/igameeventt)

## Properties

### Score

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamScore.cs#L31)

total team score
<br />
type: short

```csharp
short Score { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TeamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamScore.cs#L24)

team id
<br />
type: byte

```csharp
byte TeamID { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

