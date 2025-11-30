---
title: EventRoundStart
---

# Interface EventRoundStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundStart.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "round_start"

```csharp
public interface EventRoundStart : IGameEvent<EventRoundStart>
```

#### Implements

- [IGameEvent<EventRoundStart>](/docs/api/gameevents/igameeventt)

## Properties

### FragLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundStart.cs#L30)

frag limit in seconds
<br />
type: long

```csharp
int FragLimit { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Objective

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundStart.cs#L37)

round objective
<br />
type: string

```csharp
string Objective { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TimeLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundStart.cs#L23)

round time limit in seconds
<br />
type: long

```csharp
int TimeLimit { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

