---
title: EventShowDeathpanel
---

# Interface EventShowDeathpanel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "show_deathpanel"

```csharp
public interface EventShowDeathpanel : IGameEvent<EventShowDeathpanel>
```

#### Implements

- [IGameEvent<EventShowDeathpanel>](/docs/api/gameevents/igameeventt)

## Properties

### DamageGiven

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L55)

type: short

```csharp
short DamageGiven { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### DamageTaken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L45)

type: short

```csharp
short DamageTaken { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### HitsGiven

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L50)

type: short

```csharp
short HitsGiven { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### HitsTaken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L40)

type: short

```csharp
short HitsTaken { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Killer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L30)

entindex of the killer entity
<br />
type: ehandle

```csharp
nint Killer { get; set; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### KillerController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L35)

type: player_controller

```csharp
int KillerController { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Victim

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventShowDeathpanel.cs#L23)

endindex of the one who was killed
<br />
type: player_controller_and_pawn

```csharp
int Victim { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

