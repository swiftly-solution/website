---
title: EventAchievementEvent
---

# Interface EventAchievementEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEvent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "achievement_event"

```csharp
public interface EventAchievementEvent : IGameEvent<EventAchievementEvent>
```

#### Implements

- [IGameEvent<EventAchievementEvent>](/docs/api/gameevents/igameeventt)

## Properties

### AchievementName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEvent.cs#L23)

non-localized name of achievement
<br />
type: string

```csharp
string AchievementName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CurVal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEvent.cs#L30)

# of steps toward achievement
<br />
type: short

```csharp
short CurVal { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### MaxVal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventAchievementEvent.cs#L37)

total # of steps in achievement
<br />
type: short

```csharp
short MaxVal { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

