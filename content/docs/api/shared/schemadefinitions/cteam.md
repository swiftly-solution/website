---
title: CTeam
---

```csharp
public interface CTeam : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CTeam>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### PlayerControllers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L17)

```csharp
ref CUtlVector<CHandle<CBasePlayerController>> PlayerControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller)>>

### Players

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L19)

```csharp
ref CUtlVector<CHandle<CBasePlayerPawn>> Players { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>>

### Score

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L21)

```csharp
ref int Score { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Teamname

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L23)

```csharp
string Teamname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### PlayerControllersUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L25)

```csharp
void PlayerControllersUpdated()
```

### PlayersUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L26)

```csharp
void PlayersUpdated()
```

### ScoreUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L27)

```csharp
void ScoreUpdated()
```

### TeamnameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTeam.cs#L28)

```csharp
void TeamnameUpdated()
```

