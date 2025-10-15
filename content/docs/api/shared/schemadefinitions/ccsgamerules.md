---
title: CCSGameRules
---

```csharp
public interface CCSGameRules : CTeamplayRules, CMultiplayRules, CGameRules, ISchemaClass<CGameRules>, ISchemaClass<CMultiplayRules>, ISchemaClass<CTeamplayRules>, ISchemaClass<CCSGameRules>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccountCT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L238)

```csharp
ref int AccountCT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AccountTerrorist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L236)

```csharp
ref int AccountTerrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AccumulatedRoundOffDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L328)

```csharp
ref float AccumulatedRoundOffDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AllowWeaponSwitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L318)

```csharp
ref bool AllowWeaponSwitch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AnyHostageReached

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L65)

```csharp
ref bool AnyHostageReached { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutobalanceDisplayTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L316)

```csharp
ref float AutobalanceDisplayTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AvgPlayerRank

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L206)

```csharp
ref float AvgPlayerRank { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BombDefused

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L290)

```csharp
ref bool BombDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombDropped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L119)

```csharp
ref bool BombDropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombPlanted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L121)

```csharp
ref bool BombPlanted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BtGlobalBlackboard

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L341)

```csharp
SchemaUntypedField BtGlobalBlackboard { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### BuyTimeEnded

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L284)

```csharp
ref bool BuyTimeEnded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CMMItemDropRevealEndTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L103)

```csharp
GameTime_t CMMItemDropRevealEndTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### CMMItemDropRevealStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L101)

```csharp
GameTime_t CMMItemDropRevealStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### CTCantBuy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L129)

```csharp
ref bool CTCantBuy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CTSpawnPointUsedTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L304)

```csharp
ref float CTSpawnPointUsedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CTSpawnPoints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L310)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> CTSpawnPoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### CTSpawnPointsMasterList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L296)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> CTSpawnPointsMasterList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### CTTeamIntroVariant

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L355)

```csharp
ref int CTTeamIntroVariant { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CTTimeOutActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L27)

```csharp
ref bool CTTimeOutActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CTTimeOutRemaining

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L31)

```csharp
ref float CTTimeOutRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CTTimeOuts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L35)

```csharp
ref int CTTimeOuts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CTsAliveAtFreezetimeEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L218)

```csharp
ref int CTsAliveAtFreezetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CanDonateWeapons

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L268)

```csharp
ref bool CanDonateWeapons { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CompleteReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L192)

```csharp
ref bool CompleteReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndMatchMapGroupVoteOptions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L152)

```csharp
ISchemaFixedArray<int> EndMatchMapGroupVoteOptions { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### EndMatchMapGroupVoteTypes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L150)

```csharp
ISchemaFixedArray<int> EndMatchMapGroupVoteTypes { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### EndMatchMapVoteWinner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L154)

```csharp
ref int EndMatchMapVoteWinner { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndMatchOnRoundReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L172)

```csharp
ref bool EndMatchOnRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndMatchOnThink

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L174)

```csharp
ref bool EndMatchOnThink { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndMatchTiedVotes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L200)

```csharp
ref CUtlVector<int> EndMatchTiedVotes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### FirstBloodTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L272)

```csharp
ref float FirstBloodTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FirstConnected

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L190)

```csharp
ref bool FirstConnected { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstKillTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L270)

```csharp
ref float FirstKillTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForceTeamChangeSilent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L222)

```csharp
ref bool ForceTeamChangeSilent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FreezePeriod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L17)

```csharp
ref bool FreezePeriod { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FreezeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L176)

```csharp
ref int FreezeTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GameModeRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L338)

```csharp
CCSGameModeRules? GameModeRules { get; }
```

#### Property Value

- [CCSGameModeRules](/docs/api/shared/schemadefinitions/ccsgamemoderules)?

### GamePhase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L55)

```csharp
ref int GamePhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GameRestart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L49)

```csharp
ref bool GameRestart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GameStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L51)

```csharp
ref float GameStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HalloweenMaskListSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L117)

```csharp
ref int HalloweenMaskListSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasHostageBeenTouched

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L160)

```csharp
ref bool HasHostageBeenTouched { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasMatchStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L87)

```csharp
ref bool HasMatchStarted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasTriggeredRoundStartMusic

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L334)

```csharp
ref bool HasTriggeredRoundStartMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageWasInjured

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L274)

```csharp
ref bool HostageWasInjured { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageWasKilled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L276)

```csharp
ref bool HostageWasKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostagesRemaining

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L63)

```csharp
ref int HostagesRemaining { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HostagesRescued

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L256)

```csharp
ref int HostagesRescued { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HostagesTouched

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L258)

```csharp
ref int HostagesTouched { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IntermissionEndTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L164)

```csharp
GameTime_t IntermissionEndTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### IntermissionStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L162)

```csharp
GameTime_t IntermissionStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### IsDroppingItems

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L105)

```csharp
ref bool IsDroppingItems { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHltvActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L109)

```csharp
ref bool IsHltvActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsQuestEligible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L107)

```csharp
ref bool IsQuestEligible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsQueuedMatchmaking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L73)

```csharp
ref bool IsQueuedMatchmaking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUnreservedGameServer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L314)

```csharp
ref bool IsUnreservedGameServer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValveDS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L77)

```csharp
ref bool IsValveDS { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastFreezeEndBeep

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L286)

```csharp
ref int LastFreezeEndBeep { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastPerfSampleTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L395)

```csharp
ref double LastPerfSampleTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### LastThinkTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L326)

```csharp
GameTime_t LastThinkTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LevelInitialized

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L166)

```csharp
ref bool LevelInitialized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoadingRoundBackupData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L224)

```csharp
ref bool LoadingRoundBackupData { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LogoMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L79)

```csharp
ref bool LogoMap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoserBonusMostRecentTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L248)

```csharp
ref int LoserBonusMostRecentTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MTeamDMLastThinkTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L232)

```csharp
ref float MTeamDMLastThinkTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MTeamDMLastWinningTeamNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L230)

```csharp
ref int MTeamDMLastWinningTeamNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MainCTSpawnPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L294)

```csharp
ref Vector MainCTSpawnPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MapHasBombTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L67)

```csharp
ref bool MapHasBombTarget { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MapHasBombZone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L292)

```csharp
ref bool MapHasBombZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MapHasBuyZone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L71)

```csharp
ref bool MapHasBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MapHasRescueZone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L69)

```csharp
ref bool MapHasRescueZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchAbortedEarlyReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L332)

```csharp
ref int MatchAbortedEarlyReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchDevice

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L85)

```csharp
ref int MatchDevice { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchEndCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L351)

```csharp
ref byte MatchEndCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MatchInfoDecidedTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L228)

```csharp
ref float MatchInfoDecidedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MatchInfoShowType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L226)

```csharp
ref int MatchInfoShowType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L43)

```csharp
ref float MatchStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MatchStatTxt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L95)

```csharp
string MatchStatTxt { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MatchStats_PlayersAlive_CT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L133)

```csharp
ISchemaFixedArray<int> MatchStats_PlayersAlive_CT { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MatchStats_PlayersAlive_T

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L135)

```csharp
ISchemaFixedArray<int> MatchStats_PlayersAlive_T { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MatchStats_RoundResults

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L131)

```csharp
ISchemaFixedArray<int> MatchStats_RoundResults { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MatchWaitingForResume

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L39)

```csharp
ref bool MatchWaitingForResume { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxNumCTs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L246)

```csharp
ref int MaxNumCTs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxNumTerrorists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L244)

```csharp
ref int MaxNumTerrorists { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MinimapMaxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L144)

```csharp
ref Vector MinimapMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MinimapMins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L142)

```csharp
ref Vector MinimapMins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MinimapVerticalSectionHeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L146)

```csharp
ISchemaFixedArray<float> MinimapVerticalSectionHeights { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### NeedToAskPlayersForContinueVote

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L202)

```csharp
ref bool NeedToAskPlayersForContinueVote { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NextCTSpawnPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L302)

```csharp
ref int NextCTSpawnPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextHostageAnnouncement

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L260)

```csharp
ref float NextHostageAnnouncement { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextMapInMapgroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L89)

```csharp
ref int NextMapInMapgroup { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextRespawnWave

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L140)

```csharp
SchemaUntypedField NextRespawnWave { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### NextTerroristSpawnPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L306)

```csharp
ref int NextTerroristSpawnPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextUpdateTeamClanNamesTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L324)

```csharp
ref float NextUpdateTeamClanNamesTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoCTsKilled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L264)

```csharp
ref bool NoCTsKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoEnemiesKilled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L266)

```csharp
ref bool NoEnemiesKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoTerroristsKilled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L262)

```csharp
ref bool NoTerroristsKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumBestOfMaps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L115)

```csharp
ref int NumBestOfMaps { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumCT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L180)

```csharp
ref int NumCT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumConsecutiveCTLoses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L156)

```csharp
ref int NumConsecutiveCTLoses { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumConsecutiveTerroristLoses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L158)

```csharp
ref int NumConsecutiveTerroristLoses { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumQueuedMatchmakingAccounts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L204)

```csharp
ref uint NumQueuedMatchmakingAccounts { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumSpawnableCT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L184)

```csharp
ref int NumSpawnableCT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumSpawnableTerrorist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L182)

```csharp
ref int NumSpawnableTerrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumSpectatorsCountMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L212)

```csharp
ref uint NumSpectatorsCountMax { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumSpectatorsCountMaxLnk

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L216)

```csharp
ref uint NumSpectatorsCountMaxLnk { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumSpectatorsCountMaxTV

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L214)

```csharp
ref uint NumSpectatorsCountMaxTV { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumTerrorist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L178)

```csharp
ref int NumTerrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumTotalTournamentDrops

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L210)

```csharp
ref uint NumTotalTournamentDrops { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OvertimePlaying

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L61)

```csharp
ref int OvertimePlaying { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PhaseChangeAnnouncementTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L322)

```csharp
GameTime_t PhaseChangeAnnouncementTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### PickNewTeamsOnReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L194)

```csharp
ref bool PickNewTeamsOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayAllStepSoundsOnServer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L81)

```csharp
ref bool PlayAllStepSoundsOnServer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayedTeamIntroVO

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L361)

```csharp
ref bool PlayedTeamIntroVO { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayerResource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L343)

```csharp
ref CHandle<CBaseEntity> PlayerResource { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### ProhibitedItemIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L111)

```csharp
ISchemaFixedArray<ushort> ProhibitedItemIndices { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### QueuedMatchmakingMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L75)

```csharp
ref int QueuedMatchmakingMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QueuedMatchmakingReservationString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L208)

```csharp
string QueuedMatchmakingReservationString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RespawningAllRespawnablePlayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L300)

```csharp
ref bool RespawningAllRespawnablePlayers { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RestartRoundTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L47)

```csharp
GameTime_t RestartRoundTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### RetakeRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L345)

```csharp
CRetakeGameRules RetakeRules { get; }
```

#### Property Value

- [CRetakeGameRules](/docs/api/shared/schemadefinitions/cretakegamerules)

### RoundEndCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L389)

```csharp
ref byte RoundEndCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### RoundEndFunFactData1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L375)

```csharp
ref int RoundEndFunFactData1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndFunFactData2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L377)

```csharp
ref int RoundEndFunFactData2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndFunFactData3

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L379)

```csharp
ref int RoundEndFunFactData3 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndFunFactPlayerSlot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L373)

```csharp
ref uint RoundEndFunFactPlayerSlot { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RoundEndFunFactToken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L371)

```csharp
string RoundEndFunFactToken { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoundEndLegacy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L387)

```csharp
ref int RoundEndLegacy { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndMessage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L381)

```csharp
string RoundEndMessage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoundEndNoMusic

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L385)

```csharp
ref bool RoundEndNoMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundEndPlayerCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L383)

```csharp
ref int RoundEndPlayerCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L365)

```csharp
ref int RoundEndReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndShowTimerDefend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L367)

```csharp
ref bool RoundEndShowTimerDefend { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundEndTimerTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L369)

```csharp
ref int RoundEndTimerTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndWinnerTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L363)

```csharp
ref int RoundEndWinnerTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundStartCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L393)

```csharp
ref byte RoundStartCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### RoundStartRoundNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L391)

```csharp
ref int RoundStartRoundNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L45)

```csharp
GameTime_t RoundStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### RoundTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L41)

```csharp
ref int RoundTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundTimeWarningTriggered

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L320)

```csharp
ref bool RoundTimeWarningTriggered { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundWinReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L125)

```csharp
ref int RoundWinReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundWinStatus

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L123)

```csharp
ref int RoundWinStatus { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundsPlayedThisPhase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L59)

```csharp
ref int RoundsPlayedThisPhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScrambleTeamsOnRestart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L196)

```csharp
ref bool ScrambleTeamsOnRestart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SelectedHostageSpawnIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L186)

```csharp
ref CUtlVector<int> SelectedHostageSpawnIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ServerVoteOnReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L280)

```csharp
ref bool ServerVoteOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShorthandedBonusLastEvalRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L330)

```csharp
ref int ShorthandedBonusLastEvalRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpawnPointCount_CT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L242)

```csharp
ref int SpawnPointCount_CT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpawnPointCount_Terrorist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L240)

```csharp
ref int SpawnPointCount_Terrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpawnPointsRandomSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L188)

```csharp
ref int SpawnPointsRandomSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpectatorSlotCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L83)

```csharp
ref int SpectatorSlotCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SwapTeamsOnRestart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L198)

```csharp
ref bool SwapTeamsOnRestart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SwitchingTeamsAtRoundReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L336)

```csharp
ref bool SwitchingTeamsAtRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TCantBuy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L127)

```csharp
ref bool TCantBuy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TTeamIntroVariant

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L353)

```csharp
ref int TTeamIntroVariant { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetBombed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L288)

```csharp
ref bool TargetBombed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeamDMLastAnnouncementTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L234)

```csharp
ref float TeamDMLastAnnouncementTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TeamIntroPeriod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L357)

```csharp
ref bool TeamIntroPeriod { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeamIntroPeriodEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L359)

```csharp
GameTime_t TeamIntroPeriodEnd { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TeamLastKillUsedUniqueWeaponMatch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L349)

```csharp
ISchemaFixedArray<bool> TeamLastKillUsedUniqueWeaponMatch { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### TeamRespawnWaveTimes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L137)

```csharp
ISchemaFixedArray<float> TeamRespawnWaveTimes { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### TeamUniqueKillWeaponsMatch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L347)

```csharp
ISchemaFixedArray<CUtlVector<int>> TeamUniqueKillWeaponsMatch { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### TechnicalTimeOut

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L37)

```csharp
ref bool TechnicalTimeOut { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TerroristSpawnPointUsedTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L308)

```csharp
ref float TerroristSpawnPointUsedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TerroristSpawnPoints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L312)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> TerroristSpawnPoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### TerroristSpawnPointsMasterList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L298)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> TerroristSpawnPointsMasterList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### TerroristTimeOutActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L25)

```csharp
ref bool TerroristTimeOutActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TerroristTimeOutRemaining

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L29)

```csharp
ref float TerroristTimeOutRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TerroristTimeOuts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L33)

```csharp
ref int TerroristTimeOuts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TerroristsAliveAtFreezetimeEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L220)

```csharp
ref int TerroristsAliveAtFreezetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimeUntilNextPhaseStarts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L53)

```csharp
ref float TimeUntilNextPhaseStarts { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TmNextPeriodicThink

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L250)

```csharp
ref float TmNextPeriodicThink { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TotalRoundsPlayed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L57)

```csharp
ref int TotalRoundsPlayed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalRoundsPlayed1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L168)

```csharp
ref int TotalRoundsPlayed1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TournamentActiveCasterAccounts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L113)

```csharp
ISchemaFixedArray<uint> TournamentActiveCasterAccounts { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### TournamentEventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L91)

```csharp
string TournamentEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TournamentEventStage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L93)

```csharp
string TournamentEventStage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TournamentPredictionsPct

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L99)

```csharp
ref int TournamentPredictionsPct { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TournamentPredictionsTxt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L97)

```csharp
string TournamentPredictionsTxt { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UllLocalMatchID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L148)

```csharp
ref ulong UllLocalMatchID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### UnBalancedRounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L170)

```csharp
ref int UnBalancedRounds { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoiceWonMatchBragFired

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L252)

```csharp
ref bool VoiceWonMatchBragFired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoteCalled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L278)

```csharp
ref bool VoteCalled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoteCheckThrottle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L282)

```csharp
ref float VoteCheckThrottle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WarmupNextChatNoticeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L254)

```csharp
ref float WarmupNextChatNoticeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WarmupPeriod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L19)

```csharp
ref bool WarmupPeriod { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WarmupPeriodEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L21)

```csharp
GameTime_t WarmupPeriodEnd { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### WarmupPeriodStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L23)

```csharp
GameTime_t WarmupPeriodStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

## Methods

### AnyHostageReachedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L421)

```csharp
void AnyHostageReachedUpdated()
```

### BombDroppedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L448)

```csharp
void BombDroppedUpdated()
```

### BombPlantedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L449)

```csharp
void BombPlantedUpdated()
```

### CMMItemDropRevealEndTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L440)

```csharp
void CMMItemDropRevealEndTimeUpdated()
```

### CMMItemDropRevealStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L439)

```csharp
void CMMItemDropRevealStartTimeUpdated()
```

### CTCantBuyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L453)

```csharp
void CTCantBuyUpdated()
```

### CTTeamIntroVariantUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L472)

```csharp
void CTTeamIntroVariantUpdated()
```

### CTTimeOutActiveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L402)

```csharp
void CTTimeOutActiveUpdated()
```

### CTTimeOutRemainingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L404)

```csharp
void CTTimeOutRemainingUpdated()
```

### CTTimeOutsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L406)

```csharp
void CTTimeOutsUpdated()
```

### EndMatchMapGroupVoteOptionsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L463)

```csharp
void EndMatchMapGroupVoteOptionsUpdated()
```

### EndMatchMapGroupVoteTypesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L462)

```csharp
void EndMatchMapGroupVoteTypesUpdated()
```

### EndMatchMapVoteWinnerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L464)

```csharp
void EndMatchMapVoteWinnerUpdated()
```

### FindPickerEntity(CBasePlayerController)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSGameRules.cs#L13)

```csharp
T? FindPickerEntity<T>(CBasePlayerController controller) where T : ISchemaClass<T>
```

#### Parameters

- **controller**: [CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller) - Player Controller

#### Returns

- T?

#### Type Parameters

- **T**:  - Entity Class

### FreezePeriodUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L397)

```csharp
void FreezePeriodUpdated()
```

### GameModeRulesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L468)

```csharp
void GameModeRulesUpdated()
```

### GamePhaseUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L416)

```csharp
void GamePhaseUpdated()
```

### GameRestartUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L413)

```csharp
void GameRestartUpdated()
```

### GameStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L414)

```csharp
void GameStartTimeUpdated()
```

### HalloweenMaskListSeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L447)

```csharp
void HalloweenMaskListSeedUpdated()
```

### HasMatchStartedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L432)

```csharp
void HasMatchStartedUpdated()
```

### HostagesRemainingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L420)

```csharp
void HostagesRemainingUpdated()
```

### IsDroppingItemsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L441)

```csharp
void IsDroppingItemsUpdated()
```

### IsHltvActiveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L443)

```csharp
void IsHltvActiveUpdated()
```

### IsQuestEligibleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L442)

```csharp
void IsQuestEligibleUpdated()
```

### IsQueuedMatchmakingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L425)

```csharp
void IsQueuedMatchmakingUpdated()
```

### IsValveDSUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L427)

```csharp
void IsValveDSUpdated()
```

### LogoMapUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L428)

```csharp
void LogoMapUpdated()
```

### MapHasBombTargetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L422)

```csharp
void MapHasBombTargetUpdated()
```

### MapHasBuyZoneUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L424)

```csharp
void MapHasBuyZoneUpdated()
```

### MapHasRescueZoneUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L423)

```csharp
void MapHasRescueZoneUpdated()
```

### MatchAbortedEarlyReasonUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L467)

```csharp
void MatchAbortedEarlyReasonUpdated()
```

### MatchDeviceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L431)

```csharp
void MatchDeviceUpdated()
```

### MatchEndCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L470)

```csharp
void MatchEndCountUpdated()
```

### MatchStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L410)

```csharp
void MatchStartTimeUpdated()
```

### MatchStatTxtUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L436)

```csharp
void MatchStatTxtUpdated()
```

### MatchStats_PlayersAlive_CTUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L455)

```csharp
void MatchStats_PlayersAlive_CTUpdated()
```

### MatchStats_PlayersAlive_TUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L456)

```csharp
void MatchStats_PlayersAlive_TUpdated()
```

### MatchStats_RoundResultsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L454)

```csharp
void MatchStats_RoundResultsUpdated()
```

### MatchWaitingForResumeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L408)

```csharp
void MatchWaitingForResumeUpdated()
```

### MinimapMaxsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L460)

```csharp
void MinimapMaxsUpdated()
```

### MinimapMinsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L459)

```csharp
void MinimapMinsUpdated()
```

### MinimapVerticalSectionHeightsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L461)

```csharp
void MinimapVerticalSectionHeightsUpdated()
```

### NextMapInMapgroupUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L433)

```csharp
void NextMapInMapgroupUpdated()
```

### NextRespawnWaveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L458)

```csharp
void NextRespawnWaveUpdated()
```

### NumBestOfMapsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L446)

```csharp
void NumBestOfMapsUpdated()
```

### NumConsecutiveCTLosesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L465)

```csharp
void NumConsecutiveCTLosesUpdated()
```

### NumConsecutiveTerroristLosesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L466)

```csharp
void NumConsecutiveTerroristLosesUpdated()
```

### OvertimePlayingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L419)

```csharp
void OvertimePlayingUpdated()
```

### PlayAllStepSoundsOnServerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L429)

```csharp
void PlayAllStepSoundsOnServerUpdated()
```

### ProhibitedItemIndicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L444)

```csharp
void ProhibitedItemIndicesUpdated()
```

### QueuedMatchmakingModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L426)

```csharp
void QueuedMatchmakingModeUpdated()
```

### RestartRoundTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L412)

```csharp
void RestartRoundTimeUpdated()
```

### RetakeRulesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L469)

```csharp
void RetakeRulesUpdated()
```

### RoundEndCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L487)

```csharp
void RoundEndCountUpdated()
```

### RoundEndFunFactData1Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L480)

```csharp
void RoundEndFunFactData1Updated()
```

### RoundEndFunFactData2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L481)

```csharp
void RoundEndFunFactData2Updated()
```

### RoundEndFunFactData3Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L482)

```csharp
void RoundEndFunFactData3Updated()
```

### RoundEndFunFactPlayerSlotUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L479)

```csharp
void RoundEndFunFactPlayerSlotUpdated()
```

### RoundEndFunFactTokenUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L478)

```csharp
void RoundEndFunFactTokenUpdated()
```

### RoundEndLegacyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L486)

```csharp
void RoundEndLegacyUpdated()
```

### RoundEndMessageUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L483)

```csharp
void RoundEndMessageUpdated()
```

### RoundEndNoMusicUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L485)

```csharp
void RoundEndNoMusicUpdated()
```

### RoundEndPlayerCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L484)

```csharp
void RoundEndPlayerCountUpdated()
```

### RoundEndReasonUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L475)

```csharp
void RoundEndReasonUpdated()
```

### RoundEndShowTimerDefendUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L476)

```csharp
void RoundEndShowTimerDefendUpdated()
```

### RoundEndTimerTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L477)

```csharp
void RoundEndTimerTimeUpdated()
```

### RoundEndWinnerTeamUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L474)

```csharp
void RoundEndWinnerTeamUpdated()
```

### RoundStartCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L489)

```csharp
void RoundStartCountUpdated()
```

### RoundStartRoundNumberUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L488)

```csharp
void RoundStartRoundNumberUpdated()
```

### RoundStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L411)

```csharp
void RoundStartTimeUpdated()
```

### RoundTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L409)

```csharp
void RoundTimeUpdated()
```

### RoundWinReasonUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L451)

```csharp
void RoundWinReasonUpdated()
```

### RoundWinStatusUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L450)

```csharp
void RoundWinStatusUpdated()
```

### RoundsPlayedThisPhaseUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L418)

```csharp
void RoundsPlayedThisPhaseUpdated()
```

### SpectatorSlotCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L430)

```csharp
void SpectatorSlotCountUpdated()
```

### TCantBuyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L452)

```csharp
void TCantBuyUpdated()
```

### TTeamIntroVariantUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L471)

```csharp
void TTeamIntroVariantUpdated()
```

### TeamIntroPeriodUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L473)

```csharp
void TeamIntroPeriodUpdated()
```

### TeamRespawnWaveTimesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L457)

```csharp
void TeamRespawnWaveTimesUpdated()
```

### TechnicalTimeOutUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L407)

```csharp
void TechnicalTimeOutUpdated()
```

### TerroristTimeOutActiveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L401)

```csharp
void TerroristTimeOutActiveUpdated()
```

### TerroristTimeOutRemainingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L403)

```csharp
void TerroristTimeOutRemainingUpdated()
```

### TerroristTimeOutsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L405)

```csharp
void TerroristTimeOutsUpdated()
```

### TimeUntilNextPhaseStartsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L415)

```csharp
void TimeUntilNextPhaseStartsUpdated()
```

### TotalRoundsPlayedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L417)

```csharp
void TotalRoundsPlayedUpdated()
```

### TournamentActiveCasterAccountsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L445)

```csharp
void TournamentActiveCasterAccountsUpdated()
```

### TournamentEventNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L434)

```csharp
void TournamentEventNameUpdated()
```

### TournamentEventStageUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L435)

```csharp
void TournamentEventStageUpdated()
```

### TournamentPredictionsPctUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L438)

```csharp
void TournamentPredictionsPctUpdated()
```

### TournamentPredictionsTxtUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L437)

```csharp
void TournamentPredictionsTxtUpdated()
```

### WarmupPeriodEndUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L399)

```csharp
void WarmupPeriodEndUpdated()
```

### WarmupPeriodStartUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L400)

```csharp
void WarmupPeriodStartUpdated()
```

### WarmupPeriodUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L398)

```csharp
void WarmupPeriodUpdated()
```

