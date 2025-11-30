---
title: EventNavBlocked
---

# Interface EventNavBlocked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNavBlocked.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "nav_blocked"

```csharp
public interface EventNavBlocked : IGameEvent<EventNavBlocked>
```

#### Implements

- [IGameEvent<EventNavBlocked>](/docs/api/gameevents/igameeventt)

## Properties

### Area

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNavBlocked.cs#L21)

type: long

```csharp
int Area { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Blocked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventNavBlocked.cs#L26)

type: bool

```csharp
bool Blocked { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

