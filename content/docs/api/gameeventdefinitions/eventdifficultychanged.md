---
title: EventDifficultyChanged
---

# Interface EventDifficultyChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDifficultyChanged.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "difficulty_changed"

```csharp
public interface EventDifficultyChanged : IGameEvent<EventDifficultyChanged>
```

#### Implements

- [IGameEvent<EventDifficultyChanged>](/docs/api/gameevents/igameeventt)

## Properties

### NewDifficulty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDifficultyChanged.cs#L21)

type: short

```csharp
short NewDifficulty { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### OldDifficulty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDifficultyChanged.cs#L26)

type: short

```csharp
short OldDifficulty { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### StrDifficulty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDifficultyChanged.cs#L33)

new difficulty as string
<br />
type: string

```csharp
string StrDifficulty { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

