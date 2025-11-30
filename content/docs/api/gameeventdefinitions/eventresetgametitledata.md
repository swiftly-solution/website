---
title: EventResetGameTitledata
---

# Interface EventResetGameTitledata

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventResetGameTitledata.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "reset_game_titledata"
reset user titledata; do not automatically write profile

```csharp
public interface EventResetGameTitledata : IGameEvent<EventResetGameTitledata>
```

#### Implements

- [IGameEvent<EventResetGameTitledata>](/docs/api/gameevents/igameeventt)

## Properties

### ControllerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventResetGameTitledata.cs#L24)

Controller id of user
<br />
type: short

```csharp
short ControllerId { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

