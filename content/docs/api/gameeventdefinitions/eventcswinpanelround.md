---
title: EventCsWinPanelRound
---

# Interface EventCsWinPanelRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "cs_win_panel_round"

```csharp
public interface EventCsWinPanelRound : IGameEvent<EventCsWinPanelRound>
```

#### Implements

- [IGameEvent<EventCsWinPanelRound>](/docs/api/gameevents/igameeventt)

## Properties

### FinalEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L38)

define in cs_gamerules.h
<br />
type: byte

```csharp
byte FinalEvent { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### FunfactData1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L53)

type: long

```csharp
int FunfactData1 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FunfactData2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L58)

type: long

```csharp
int FunfactData2 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FunfactData3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L63)

type: long

```csharp
int FunfactData3 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FunfactPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L48)

type: player_controller

```csharp
int FunfactPlayer { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FunfactToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L43)

type: string

```csharp
string FunfactToken { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShowTimerAttack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L26)

type: bool

```csharp
bool ShowTimerAttack { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowTimerDefend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L21)

type: bool

```csharp
bool ShowTimerDefend { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimerTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventCsWinPanelRound.cs#L31)

type: short

```csharp
short TimerTime { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

