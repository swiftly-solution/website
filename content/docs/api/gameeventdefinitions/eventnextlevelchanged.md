---
title: EventNextlevelChanged
---

# Interface EventNextlevelChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNextlevelChanged.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "nextlevel_changed"
a game event, name may be 32 characters long

```csharp
public interface EventNextlevelChanged : IGameEvent<EventNextlevelChanged>
```

#### Implements

- [IGameEvent<EventNextlevelChanged>](/docs/api/gameevents/igameeventt)

## Properties

### MapGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNextlevelChanged.cs#L27)

type: string

```csharp
string MapGroup { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NextLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNextlevelChanged.cs#L22)

type: string

```csharp
string NextLevel { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SkirmishMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNextlevelChanged.cs#L32)

type: string

```csharp
string SkirmishMode { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

