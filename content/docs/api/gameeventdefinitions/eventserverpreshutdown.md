---
title: EventServerPreShutdown
---

# Interface EventServerPreShutdown

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventServerPreShutdown.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "server_pre_shutdown"
server is about to be shut down

```csharp
public interface EventServerPreShutdown : IGameEvent<EventServerPreShutdown>
```

#### Implements

- [IGameEvent<EventServerPreShutdown>](/docs/api/gameevents/igameeventt)

## Properties

### Reason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventServerPreShutdown.cs#L24)

reason why server is about to be shut down
<br />
type: string

```csharp
string Reason { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

