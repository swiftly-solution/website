---
title: EventAchievementEarnedLocal
---

# Interface EventAchievementEarnedLocal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEarnedLocal.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "achievement_earned_local"

```csharp
public interface EventAchievementEarnedLocal : IGameEvent<EventAchievementEarnedLocal>
```

#### Implements

- [IGameEvent<EventAchievementEarnedLocal>](/docs/api/gameevents/igameeventt)

## Properties

### Achievement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEarnedLocal.cs#L23)

achievement ID
<br />
type: short

```csharp
short Achievement { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### SplitScreenPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEarnedLocal.cs#L30)

splitscreen ID
<br />
type: short

```csharp
short SplitScreenPlayer { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

