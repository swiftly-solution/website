---
title: EventServerShutdown
---

# Interface EventServerShutdown

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventServerShutdown.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "server_shutdown"
server shut down

```csharp
public interface EventServerShutdown : IGameEvent<EventServerShutdown>
```

#### Implements

- [IGameEvent<EventServerShutdown>](/docs/api/gameevents/igameeventt)

## Properties

### Reason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventServerShutdown.cs#L24)

reason why server was shut down
<br />
type: string

```csharp
string Reason { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

