---
title: EventEntityKilled
---

# Interface EventEntityKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventEntityKilled.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "entity_killed"

```csharp
public interface EventEntityKilled : IGameEvent<EventEntityKilled>
```

#### Implements

- [IGameEvent<EventEntityKilled>](/docs/api/gameevents/igameeventt)

## Properties

### DamageBits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventEntityKilled.cs#L36)

type: long

```csharp
int DamageBits { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EntindexAttacker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventEntityKilled.cs#L26)

type: long

```csharp
int EntindexAttacker { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EntindexInflictor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventEntityKilled.cs#L31)

type: long

```csharp
int EntindexInflictor { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EntindexKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventEntityKilled.cs#L21)

type: long

```csharp
int EntindexKilled { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

