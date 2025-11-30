---
title: EventAchievementEarned
---

# Interface EventAchievementEarned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEarned.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "achievement_earned"

```csharp
public interface EventAchievementEarned : IGameEvent<EventAchievementEarned>
```

#### Implements

- [IGameEvent<EventAchievementEarned>](/docs/api/gameevents/igameeventt)

## Properties

### Achievement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEarned.cs#L30)

achievement ID
<br />
type: short

```csharp
short Achievement { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Player

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEarned.cs#L23)

entindex of the player
<br />
type: player_controller

```csharp
int Player { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

