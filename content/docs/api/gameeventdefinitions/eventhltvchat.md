---
title: EventHltvChat
---

# Interface EventHltvChat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChat.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "hltv_chat"
a HLTV chat msg sent by spectators

```csharp
public interface EventHltvChat : IGameEvent<EventHltvChat>
```

#### Implements

- [IGameEvent<EventHltvChat>](/docs/api/gameevents/igameeventt)

## Properties

### SteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChat.cs#L29)

steam id
<br />
type: uint64

```csharp
ulong SteamID { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Text

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChat.cs#L22)

type: string

```csharp
string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

