---
title: EventBulletDamage
---

# Interface EventBulletDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "bullet_damage"

```csharp
public interface EventBulletDamage : IGameEvent<EventBulletDamage>
```

#### Implements

- [IGameEvent<EventBulletDamage>](/docs/api/gameevents/igameeventt)

## Properties

### AimPunchX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L107)

aim punch x
<br />
type: float

```csharp
float AimPunchX { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AimPunchY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L114)

aim punch y
<br />
type: float

```csharp
float AimPunchY { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AimPunchZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L121)

aim punch z
<br />
type: float

```csharp
float AimPunchZ { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AttackTickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L128)

attack tick
<br />
type: int

```csharp
int AttackTickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AttackTickFrac

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L135)

attack frac
<br />
type: float

```csharp
float AttackTickFrac { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Attacker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L30)

player index who attacked
<br />
type: player_controller_and_pawn

```csharp
int Attacker { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DamageDirX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L44)

direction vector of the bullet
<br />
type: float

```csharp
float DamageDirX { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageDirY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L51)

direction vector of the bullet
<br />
type: float

```csharp
float DamageDirY { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageDirZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L58)

direction vector of the bullet
<br />
type: float

```csharp
float DamageDirZ { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Distance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L37)

how far the bullet travelled before it hit the player
<br />
type: float

```csharp
float Distance { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InAir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L79)

was the shooter jumping?
<br />
type: bool

```csharp
bool InAir { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InaccuracyAir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L170)

air inaccuracy
<br />
type: float

```csharp
float InaccuracyAir { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyMove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L163)

move inaccuracy
<br />
type: float

```csharp
float InaccuracyMove { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InaccuracyTotal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L156)

total inaccuracy
<br />
type: float

```csharp
float InaccuracyTotal { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoScope

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L72)

was the shooter noscoped?
<br />
type: bool

```csharp
bool NoScope { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumPenetrations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L65)

how many surfaces were penetrated
<br />
type: byte

```csharp
byte NumPenetrations { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### RecoilIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L177)

recoil index. Yes this is really a float.
<br />
type: float

```csharp
float RecoilIndex { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RenderTickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L142)

render tick
<br />
type: int

```csharp
int RenderTickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RenderTickFrac

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L149)

render frac
<br />
type: float

```csharp
float RenderTickFrac { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShootAngX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L86)

shoot angle x
<br />
type: float

```csharp
float ShootAngX { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShootAngY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L93)

shoot angle y
<br />
type: float

```csharp
float ShootAngY { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShootAngZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L100)

shoot angle z
<br />
type: float

```csharp
float ShootAngZ { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L184)

lag compensation type
<br />
type: int

```csharp
int Type { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Victim

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventBulletDamage.cs#L23)

player index who was hurt
<br />
type: player_controller_and_pawn

```csharp
int Victim { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

