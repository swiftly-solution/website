---
title: EventVoteStarted
---

# Interface EventVoteStarted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVoteStarted.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "vote_started"

```csharp
public interface EventVoteStarted : IGameEvent<EventVoteStarted>
```

#### Implements

- [IGameEvent<EventVoteStarted>](/docs/api/gameevents/igameeventt)

## Properties

### Initiator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVoteStarted.cs#L43)

entity id of the player who initiated the vote
<br />
type: long

```csharp
int Initiator { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Issue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVoteStarted.cs#L21)

type: string

```csharp
string Issue { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Param1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVoteStarted.cs#L26)

type: string

```csharp
string Param1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Team

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVoteStarted.cs#L36)

type: byte

```csharp
byte Team { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### VoteData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventVoteStarted.cs#L31)

type: string

```csharp
string VoteData { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

