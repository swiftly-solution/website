---
title: EventTeamInfo
---

# Interface EventTeamInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamInfo.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "team_info"
info about team

```csharp
public interface EventTeamInfo : IGameEvent<EventTeamInfo>
```

#### Implements

- [IGameEvent<EventTeamInfo>](/docs/api/gameevents/igameeventt)

## Properties

### TeamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamInfo.cs#L24)

unique team id
<br />
type: byte

```csharp
byte TeamID { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Teamname

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamInfo.cs#L31)

team name eg "Team Blue"
<br />
type: string

```csharp
string Teamname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

