---
title: EventOtherDeath
---

# Interface EventOtherDeath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "other_death"

```csharp
public interface EventOtherDeath : IGameEvent<EventOtherDeath>
```

#### Implements

- [IGameEvent<EventOtherDeath>](/docs/api/gameevents/igameeventt)

## Properties

### Attacker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L37)

user ID who killed
<br />
type: short

```csharp
short Attacker { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### AttackerBlind

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L98)

attacker was blind from flashbang
<br />
type: bool

```csharp
bool AttackerBlind { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Headshot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L70)

singals a headshot
<br />
type: bool

```csharp
bool Headshot { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoScope

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L84)

kill happened without a scope, used for death notice icon
<br />
type: bool

```csharp
bool NoScope { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OtherID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L23)

other entity ID who died
<br />
type: short

```csharp
short OtherID { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### OtherType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L30)

other entity type
<br />
type: string

```csharp
string OtherType { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Penetrated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L77)

number of objects shot penetrated before killing target
<br />
type: short

```csharp
short Penetrated { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### ThruSmoke

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L91)

hitscan weapon went through smoke grenade
<br />
type: bool

```csharp
bool ThruSmoke { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L44)

weapon name killer used
<br />
type: string

```csharp
string Weapon { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WeaponFauxitemid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L58)

faux item id of weapon killer used
<br />
type: string

```csharp
string WeaponFauxitemid { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WeaponItemid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L51)

inventory item id of weapon killer used
<br />
type: string

```csharp
string WeaponItemid { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WeaponOriginalownerXuid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventOtherDeath.cs#L63)

type: string

```csharp
string WeaponOriginalownerXuid { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

