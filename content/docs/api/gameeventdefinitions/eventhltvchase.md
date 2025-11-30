---
title: EventHltvChase
---

# Interface EventHltvChase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "hltv_chase"
shot of a single entity

```csharp
public interface EventHltvChase : IGameEvent<EventHltvChase>
```

#### Implements

- [IGameEvent<EventHltvChase>](/docs/api/gameevents/igameeventt)

## Properties

### Distance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L38)

camera distance
<br />
type: short

```csharp
short Distance { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### InEye

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L66)

diretcor suggests to show ineye
<br />
type: byte

```csharp
byte InEye { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Inertia

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L59)

camera inertia
<br />
type: byte

```csharp
byte Inertia { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Phi

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L52)

view angle vertical
<br />
type: short

```csharp
short Phi { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Target1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L24)

primary traget index
<br />
type: player_controller

```csharp
int Target1 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Target2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L31)

secondary traget index or 0
<br />
type: player_controller

```csharp
int Target2 { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Theta

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChase.cs#L45)

view angle horizontal
<br />
type: short

```csharp
short Theta { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

