---
title: EventRoundEnd
---

# Interface EventRoundEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "round_end"

```csharp
public interface EventRoundEnd : IGameEvent<EventRoundEnd>
```

#### Implements

- [IGameEvent<EventRoundEnd>](/docs/api/gameevents/igameeventt)

## Properties

### Legacy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L49)

server-generated legacy value
<br />
type: byte

```csharp
byte Legacy { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Message

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L37)

end round message
<br />
type: string

```csharp
string Message { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NoMusic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L63)

if set, don't play round end music, because action is still on-going
<br />
type: byte

```csharp
byte NoMusic { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### PlayerCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L56)

total number of players alive at the end of round, used for statistics gathering, computed on the server in the event client is in replay when receiving this message
<br />
type: short

```csharp
short PlayerCount { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Reason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L30)

reson why team won
<br />
type: byte

```csharp
byte Reason { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Time

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L42)

type: float

```csharp
float Time { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Winner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventRoundEnd.cs#L23)

winner team/user i
<br />
type: byte

```csharp
byte Winner { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

