---
title: EventGameEnd
---

# Interface EventGameEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGameEnd.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "game_end"
a game ended

```csharp
public interface EventGameEnd : IGameEvent<EventGameEnd>
```

#### Implements

- [IGameEvent<EventGameEnd>](/docs/api/gameevents/igameeventt)

## Properties

### Winner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGameEnd.cs#L24)

winner team/user id
<br />
type: byte

```csharp
byte Winner { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

