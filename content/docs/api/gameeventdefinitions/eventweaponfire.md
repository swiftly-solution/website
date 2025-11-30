---
title: EventWeaponFire
---

# Interface EventWeaponFire

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "weapon_fire"

```csharp
public interface EventWeaponFire : IGameEvent<EventWeaponFire>
```

#### Implements

- [IGameEvent<EventWeaponFire>](/docs/api/gameevents/igameeventt)

## Properties

### Silenced

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L51)

is weapon silenced
<br />
type: bool

```csharp
bool Silenced { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UserId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L37)

<br />
type: player_controller_and_pawn

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UserIdController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L22)

<br />
type: player_controller_and_pawn

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### UserIdPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L28)

<br />
type: player_controller_and_pawn

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)

### UserIdPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L31)

```csharp
IPlayer UserIdPlayer { get; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)

### Weapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventWeaponFire.cs#L44)

weapon name used
<br />
type: string

```csharp
string Weapon { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

