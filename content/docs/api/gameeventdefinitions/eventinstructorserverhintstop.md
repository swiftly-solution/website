---
title: EventInstructorServerHintStop
---

# Interface EventInstructorServerHintStop

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorServerHintStop.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "instructor_server_hint_stop"
destroys a server/map created hint

```csharp
public interface EventInstructorServerHintStop : IGameEvent<EventInstructorServerHintStop>
```

#### Implements

- [IGameEvent<EventInstructorServerHintStop>](/docs/api/gameevents/igameeventt)

## Properties

### HintEntindex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorServerHintStop.cs#L31)

entity id of the env_instructor_hint that fired the event
<br />
type: long

```csharp
int HintEntindex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HintName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventInstructorServerHintStop.cs#L24)

The hint to stop. Will stop ALL hints with this name
<br />
type: string

```csharp
string HintName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

