---
title: CTeam
---

# Interface CTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTeam : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CTeam>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTeam>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### PlayerControllers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L18)

```csharp
ref CUtlVector<CHandle<CBasePlayerController>> PlayerControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)>>

### Players

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L20)

```csharp
ref CUtlVector<CHandle<CBasePlayerPawn>> Players { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)>>

### Score

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L22)

```csharp
ref int Score { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Teamname

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L24)

```csharp
string Teamname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### PlayerControllersUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L26)

```csharp
void PlayerControllersUpdated()
```

### PlayersUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L27)

```csharp
void PlayersUpdated()
```

### ScoreUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L28)

```csharp
void ScoreUpdated()
```

### TeamnameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L29)

```csharp
void TeamnameUpdated()
```

