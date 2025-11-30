---
title: EventHltvReplayStatus
---

# Interface EventHltvReplayStatus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvReplayStatus.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "hltv_replay_status"

```csharp
public interface EventHltvReplayStatus : IGameEvent<EventHltvReplayStatus>
```

#### Implements

- [IGameEvent<EventHltvReplayStatus>](/docs/api/gameevents/igameeventt)

## Properties

### Reason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvReplayStatus.cs#L23)

reason for hltv replay status change ()
<br />
type: long

```csharp
int Reason { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

