---
title: EventGgKilledEnemy
---

# Interface EventGgKilledEnemy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGgKilledEnemy.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "gg_killed_enemy"

```csharp
public interface EventGgKilledEnemy : IGameEvent<EventGgKilledEnemy>
```

#### Implements

- [IGameEvent<EventGgKilledEnemy>](/docs/api/gameevents/igameeventt)

## Properties

### AttackerID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGgKilledEnemy.cs#L30)

user ID who killed
<br />
type: player_controller

```csharp
int AttackerID { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Bonus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGgKilledEnemy.cs#L51)

did killer kill with a bonus weapon?
<br />
type: bool

```csharp
bool Bonus { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dominated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGgKilledEnemy.cs#L37)

did killer dominate victim with this kill
<br />
type: short

```csharp
short Dominated { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Revenge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGgKilledEnemy.cs#L44)

did killer get revenge on victim with this kill
<br />
type: short

```csharp
short Revenge { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### VictimID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventGgKilledEnemy.cs#L23)

user ID who died
<br />
type: player_controller

```csharp
int VictimID { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

