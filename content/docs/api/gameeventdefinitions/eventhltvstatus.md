---
title: EventHltvStatus
---

# Interface EventHltvStatus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvStatus.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "hltv_status"
general HLTV status

```csharp
public interface EventHltvStatus : IGameEvent<EventHltvStatus>
```

#### Implements

- [IGameEvent<EventHltvStatus>](/docs/api/gameevents/igameeventt)

## Properties

### Clients

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvStatus.cs#L24)

number of HLTV spectators
<br />
type: long

```csharp
int Clients { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Master

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvStatus.cs#L45)

disptach master IP:port
<br />
type: string

```csharp
string Master { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Proxies

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvStatus.cs#L38)

number of HLTV proxies
<br />
type: short

```csharp
short Proxies { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Slots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvStatus.cs#L31)

number of HLTV slots
<br />
type: long

```csharp
int Slots { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

