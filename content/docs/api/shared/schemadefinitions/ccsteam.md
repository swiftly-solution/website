---
title: CCSTeam
---

```csharp
public interface CCSTeam : CTeam, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CTeam>, ISchemaClass<CCSTeam>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ClanID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L34)

```csharp
ref uint ClanID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**ClanTeamname** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L32)

```csharp
ISchemaFixedString ClanTeamname { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**LastRecievedShorthandedRoundBonus** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L16)

```csharp
ref int LastRecievedShorthandedRoundBonus { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LastUpdateSentAt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L42)

```csharp
ref int LastUpdateSentAt { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**NextResourceTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L40)

```csharp
ref float NextResourceTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NumMapVictories** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L24)

```csharp
ref int NumMapVictories { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ScoreFirstHalf** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L26)

```csharp
ref int ScoreFirstHalf { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ScoreOvertime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L30)

```csharp
ref int ScoreOvertime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ScoreSecondHalf** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L28)

```csharp
ref int ScoreSecondHalf { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ShorthandedRoundBonusStartRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L18)

```csharp
ref int ShorthandedRoundBonusStartRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Surrendered** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L20)

```csharp
ref bool Surrendered { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TeamFlagImage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L36)

```csharp
ISchemaFixedString TeamFlagImage { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**TeamLogoImage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L38)

```csharp
ISchemaFixedString TeamLogoImage { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**TeamMatchStat** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L22)

```csharp
ISchemaFixedString TeamMatchStat { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

## Methods

**ClanIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L51)

```csharp
void ClanIDUpdated()
```

**ClanTeamnameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L50)

```csharp
void ClanTeamnameUpdated()
```

**NumMapVictoriesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L46)

```csharp
void NumMapVictoriesUpdated()
```

**ScoreFirstHalfUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L47)

```csharp
void ScoreFirstHalfUpdated()
```

**ScoreOvertimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L49)

```csharp
void ScoreOvertimeUpdated()
```

**ScoreSecondHalfUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L48)

```csharp
void ScoreSecondHalfUpdated()
```

**SurrenderedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L44)

```csharp
void SurrenderedUpdated()
```

**TeamFlagImageUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L52)

```csharp
void TeamFlagImageUpdated()
```

**TeamLogoImageUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L53)

```csharp
void TeamLogoImageUpdated()
```

**TeamMatchStatUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSTeam.cs#L45)

```csharp
void TeamMatchStatUpdated()
```

