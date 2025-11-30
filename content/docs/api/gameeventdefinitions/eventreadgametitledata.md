---
title: EventReadGameTitledata
---

# Interface EventReadGameTitledata

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventReadGameTitledata.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "read_game_titledata"
read user titledata from profile

```csharp
public interface EventReadGameTitledata : IGameEvent<EventReadGameTitledata>
```

#### Implements

- [IGameEvent<EventReadGameTitledata>](/docs/api/gameevents/igameeventt)

## Properties

### ControllerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventReadGameTitledata.cs#L24)

Controller id of user
<br />
type: short

```csharp
short ControllerId { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

