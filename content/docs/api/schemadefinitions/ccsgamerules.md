---
title: CCSGameRules
---

# Interface CCSGameRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSGameRules : CTeamplayRules, CMultiplayRules, CGameRules, ISchemaClass<CGameRules>, ISchemaClass<CMultiplayRules>, ISchemaClass<CTeamplayRules>, ISchemaClass<CCSGameRules>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CTeamplayRules](/docs/api/schemadefinitions/cteamplayrules)
- [CMultiplayRules](/docs/api/schemadefinitions/cmultiplayrules)
- [CGameRules](/docs/api/schemadefinitions/cgamerules)
- [ISchemaClass<CGameRules>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMultiplayRules>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTeamplayRules>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSGameRules>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountCT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L239)

```csharp
ref int AccountCT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AccountTerrorist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L237)

```csharp
ref int AccountTerrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AccumulatedRoundOffDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L329)

```csharp
ref float AccumulatedRoundOffDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AllowWeaponSwitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L319)

```csharp
ref bool AllowWeaponSwitch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AnyHostageReached

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L68)

```csharp
ref bool AnyHostageReached { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutobalanceDisplayTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L317)

```csharp
ref float AutobalanceDisplayTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AvgPlayerRank

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L207)

```csharp
ref float AvgPlayerRank { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BombDefused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L291)

```csharp
ref bool BombDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombDropped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L122)

```csharp
ref bool BombDropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombPlanted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L124)

```csharp
ref bool BombPlanted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BtGlobalBlackboard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L342)

```csharp
SchemaUntypedField BtGlobalBlackboard { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### BuyTimeEnded

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L285)

```csharp
ref bool BuyTimeEnded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CMMItemDropRevealEndTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L106)

```csharp
GameTime_t CMMItemDropRevealEndTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### CMMItemDropRevealStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L104)

```csharp
GameTime_t CMMItemDropRevealStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### CTCantBuy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L132)

```csharp
ref bool CTCantBuy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CTSpawnPointUsedTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L305)

```csharp
ref float CTSpawnPointUsedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CTSpawnPoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L311)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> CTSpawnPoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SpawnPoint](/docs/api/schemadefinitions/spawnpoint)>>

### CTSpawnPointsMasterList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L297)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> CTSpawnPointsMasterList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SpawnPoint](/docs/api/schemadefinitions/spawnpoint)>>

### CTTeamIntroVariant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L356)

```csharp
ref int CTTeamIntroVariant { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CTTimeOutActive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L28)

```csharp
ref bool CTTimeOutActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CTTimeOutRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L32)

```csharp
ref float CTTimeOutRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CTTimeOuts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L36)

```csharp
ref int CTTimeOuts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CTsAliveAtFreezetimeEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L219)

```csharp
ref int CTsAliveAtFreezetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CanDonateWeapons

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L269)

```csharp
ref bool CanDonateWeapons { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CompleteReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L193)

```csharp
ref bool CompleteReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndMatchMapGroupVoteOptions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L155)

```csharp
ISchemaFixedArray<int> EndMatchMapGroupVoteOptions { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### EndMatchMapGroupVoteTypes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L153)

```csharp
ISchemaFixedArray<int> EndMatchMapGroupVoteTypes { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### EndMatchMapVoteWinner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L157)

```csharp
ref int EndMatchMapVoteWinner { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndMatchOnRoundReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L175)

```csharp
ref bool EndMatchOnRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndMatchOnThink

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L177)

```csharp
ref bool EndMatchOnThink { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndMatchTiedVotes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L201)

```csharp
ref CUtlVector<int> EndMatchTiedVotes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### FirstBloodTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L273)

```csharp
ref float FirstBloodTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FirstConnected

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L191)

```csharp
ref bool FirstConnected { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstKillTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L271)

```csharp
ref float FirstKillTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForceTeamChangeSilent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L223)

```csharp
ref bool ForceTeamChangeSilent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FreezePeriod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L18)

```csharp
ref bool FreezePeriod { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FreezeTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L42)

```csharp
ref int FreezeTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GameModeRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L339)

```csharp
CCSGameModeRules? GameModeRules { get; }
```

#### Property Value

- [CCSGameModeRules](/docs/api/schemadefinitions/ccsgamemoderules)?

### GamePhase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L58)

```csharp
ref int GamePhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GamePhaseEnum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSGameRules.cs#L9)

```csharp
GamePhase GamePhaseEnum { get; set; }
```

#### Property Value

- [GamePhase](/docs/api/misc/gamephase)

### GameRestart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L52)

```csharp
ref bool GameRestart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GameStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L54)

```csharp
ref float GameStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HalloweenMaskListSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L120)

```csharp
ref int HalloweenMaskListSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasHostageBeenTouched

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L163)

```csharp
ref bool HasHostageBeenTouched { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasMatchStarted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L90)

```csharp
ref bool HasMatchStarted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasTriggeredRoundStartMusic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L335)

```csharp
ref bool HasTriggeredRoundStartMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageWasInjured

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L275)

```csharp
ref bool HostageWasInjured { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageWasKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L277)

```csharp
ref bool HostageWasKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostagesRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L66)

```csharp
ref int HostagesRemaining { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HostagesRescued

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L257)

```csharp
ref int HostagesRescued { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HostagesTouched

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L259)

```csharp
ref int HostagesTouched { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IntermissionEndTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L167)

```csharp
GameTime_t IntermissionEndTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### IntermissionStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L165)

```csharp
GameTime_t IntermissionStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### IsDroppingItems

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L108)

```csharp
ref bool IsDroppingItems { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHltvActive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L112)

```csharp
ref bool IsHltvActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsQuestEligible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L110)

```csharp
ref bool IsQuestEligible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsQueuedMatchmaking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L76)

```csharp
ref bool IsQueuedMatchmaking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUnreservedGameServer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L315)

```csharp
ref bool IsUnreservedGameServer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValveDS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L80)

```csharp
ref bool IsValveDS { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastFreezeEndBeep

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L287)

```csharp
ref int LastFreezeEndBeep { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastPerfSampleTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L396)

```csharp
ref double LastPerfSampleTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### LastThinkTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L327)

```csharp
GameTime_t LastThinkTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LevelInitialized

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L169)

```csharp
ref bool LevelInitialized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoadingRoundBackupData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L225)

```csharp
ref bool LoadingRoundBackupData { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LogoMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L82)

```csharp
ref bool LogoMap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoserBonusMostRecentTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L249)

```csharp
ref int LoserBonusMostRecentTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MTeamDMLastThinkTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L233)

```csharp
ref float MTeamDMLastThinkTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MTeamDMLastWinningTeamNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L231)

```csharp
ref int MTeamDMLastWinningTeamNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MainCTSpawnPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L295)

```csharp
ref Vector MainCTSpawnPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MapHasBombTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L70)

```csharp
ref bool MapHasBombTarget { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MapHasBombZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L293)

```csharp
ref bool MapHasBombZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MapHasBuyZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L74)

```csharp
ref bool MapHasBuyZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MapHasRescueZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L72)

```csharp
ref bool MapHasRescueZone { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchAbortedEarlyReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L333)

```csharp
ref int MatchAbortedEarlyReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchDevice

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L88)

```csharp
ref int MatchDevice { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchEndCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L352)

```csharp
ref byte MatchEndCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MatchInfoDecidedTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L229)

```csharp
ref float MatchInfoDecidedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MatchInfoShowType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L227)

```csharp
ref int MatchInfoShowType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L46)

```csharp
ref float MatchStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MatchStatTxt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L98)

```csharp
string MatchStatTxt { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MatchStats_PlayersAlive_CT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L136)

```csharp
ISchemaFixedArray<int> MatchStats_PlayersAlive_CT { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MatchStats_PlayersAlive_T

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L138)

```csharp
ISchemaFixedArray<int> MatchStats_PlayersAlive_T { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MatchStats_RoundResults

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L134)

```csharp
ISchemaFixedArray<int> MatchStats_RoundResults { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MatchWaitingForResume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L40)

```csharp
ref bool MatchWaitingForResume { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxNumCTs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L247)

```csharp
ref int MaxNumCTs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxNumTerrorists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L245)

```csharp
ref int MaxNumTerrorists { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MinimapMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L147)

```csharp
ref Vector MinimapMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinimapMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L145)

```csharp
ref Vector MinimapMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinimapVerticalSectionHeights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L149)

```csharp
ISchemaFixedArray<float> MinimapVerticalSectionHeights { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### NeedToAskPlayersForContinueVote

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L203)

```csharp
ref bool NeedToAskPlayersForContinueVote { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NextCTSpawnPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L303)

```csharp
ref int NextCTSpawnPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextHostageAnnouncement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L261)

```csharp
ref float NextHostageAnnouncement { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NextMapInMapgroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L92)

```csharp
ref int NextMapInMapgroup { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextRespawnWave

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L143)

```csharp
SchemaUntypedField NextRespawnWave { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### NextTerroristSpawnPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L307)

```csharp
ref int NextTerroristSpawnPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextUpdateTeamClanNamesTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L325)

```csharp
ref float NextUpdateTeamClanNamesTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoCTsKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L265)

```csharp
ref bool NoCTsKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoEnemiesKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L267)

```csharp
ref bool NoEnemiesKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoTerroristsKilled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L263)

```csharp
ref bool NoTerroristsKilled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumBestOfMaps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L118)

```csharp
ref int NumBestOfMaps { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumCT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L181)

```csharp
ref int NumCT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumConsecutiveCTLoses

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L159)

```csharp
ref int NumConsecutiveCTLoses { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumConsecutiveTerroristLoses

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L161)

```csharp
ref int NumConsecutiveTerroristLoses { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumQueuedMatchmakingAccounts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L205)

```csharp
ref uint NumQueuedMatchmakingAccounts { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumSpawnableCT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L185)

```csharp
ref int NumSpawnableCT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumSpawnableTerrorist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L183)

```csharp
ref int NumSpawnableTerrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumSpectatorsCountMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L213)

```csharp
ref uint NumSpectatorsCountMax { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumSpectatorsCountMaxLnk

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L217)

```csharp
ref uint NumSpectatorsCountMaxLnk { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumSpectatorsCountMaxTV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L215)

```csharp
ref uint NumSpectatorsCountMaxTV { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumTerrorist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L179)

```csharp
ref int NumTerrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumTotalTournamentDrops

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L211)

```csharp
ref uint NumTotalTournamentDrops { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OvertimePlaying

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L64)

```csharp
ref int OvertimePlaying { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PhaseChangeAnnouncementTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L323)

```csharp
GameTime_t PhaseChangeAnnouncementTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### PickNewTeamsOnReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L195)

```csharp
ref bool PickNewTeamsOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayAllStepSoundsOnServer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L84)

```csharp
ref bool PlayAllStepSoundsOnServer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayedTeamIntroVO

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L362)

```csharp
ref bool PlayedTeamIntroVO { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayerResource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L344)

```csharp
ref CHandle<CBaseEntity> PlayerResource { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### ProhibitedItemIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L114)

```csharp
ISchemaFixedArray<ushort> ProhibitedItemIndices { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### QueuedMatchmakingMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L78)

```csharp
ref int QueuedMatchmakingMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QueuedMatchmakingReservationString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L209)

```csharp
string QueuedMatchmakingReservationString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RespawningAllRespawnablePlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L301)

```csharp
ref bool RespawningAllRespawnablePlayers { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RestartRoundTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L50)

```csharp
GameTime_t RestartRoundTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### RetakeRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L346)

```csharp
CRetakeGameRules RetakeRules { get; }
```

#### Property Value

- [CRetakeGameRules](/docs/api/schemadefinitions/cretakegamerules)

### RoundEndCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L390)

```csharp
ref byte RoundEndCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### RoundEndFunFactData1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L376)

```csharp
ref int RoundEndFunFactData1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndFunFactData2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L378)

```csharp
ref int RoundEndFunFactData2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndFunFactData3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L380)

```csharp
ref int RoundEndFunFactData3 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndFunFactPlayerSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L374)

```csharp
ref uint RoundEndFunFactPlayerSlot { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RoundEndFunFactToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L372)

```csharp
string RoundEndFunFactToken { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoundEndLegacy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L388)

```csharp
ref int RoundEndLegacy { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L382)

```csharp
string RoundEndMessage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoundEndNoMusic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L386)

```csharp
ref bool RoundEndNoMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundEndPlayerCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L384)

```csharp
ref int RoundEndPlayerCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L366)

```csharp
ref int RoundEndReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndShowTimerDefend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L368)

```csharp
ref bool RoundEndShowTimerDefend { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundEndTimerTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L370)

```csharp
ref int RoundEndTimerTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundEndWinnerTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L364)

```csharp
ref int RoundEndWinnerTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundStartCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L394)

```csharp
ref byte RoundStartCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### RoundStartRoundNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L392)

```csharp
ref int RoundStartRoundNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L48)

```csharp
GameTime_t RoundStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### RoundTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L44)

```csharp
ref int RoundTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundTimeWarningTriggered

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L321)

```csharp
ref bool RoundTimeWarningTriggered { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundWinReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L128)

```csharp
ref int RoundWinReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundWinStatus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L126)

```csharp
ref int RoundWinStatus { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundsPlayedThisPhase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L62)

```csharp
ref int RoundsPlayedThisPhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScrambleTeamsOnRestart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L197)

```csharp
ref bool ScrambleTeamsOnRestart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SelectedHostageSpawnIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L187)

```csharp
ref CUtlVector<int> SelectedHostageSpawnIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ServerVoteOnReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L281)

```csharp
ref bool ServerVoteOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShorthandedBonusLastEvalRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L331)

```csharp
ref int ShorthandedBonusLastEvalRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpawnPointCount_CT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L243)

```csharp
ref int SpawnPointCount_CT { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpawnPointCount_Terrorist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L241)

```csharp
ref int SpawnPointCount_Terrorist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpawnPointsRandomSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L189)

```csharp
ref int SpawnPointsRandomSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpectatorSlotCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L86)

```csharp
ref int SpectatorSlotCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SwapTeamsOnRestart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L199)

```csharp
ref bool SwapTeamsOnRestart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SwitchingTeamsAtRoundReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L337)

```csharp
ref bool SwitchingTeamsAtRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TCantBuy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L130)

```csharp
ref bool TCantBuy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TTeamIntroVariant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L354)

```csharp
ref int TTeamIntroVariant { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetBombed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L289)

```csharp
ref bool TargetBombed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeamDMLastAnnouncementTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L235)

```csharp
ref float TeamDMLastAnnouncementTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TeamIntroPeriod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L358)

```csharp
ref bool TeamIntroPeriod { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeamIntroPeriodEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L360)

```csharp
GameTime_t TeamIntroPeriodEnd { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TeamLastKillUsedUniqueWeaponMatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L350)

```csharp
ISchemaFixedArray<bool> TeamLastKillUsedUniqueWeaponMatch { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### TeamRespawnWaveTimes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L140)

```csharp
ISchemaFixedArray<float> TeamRespawnWaveTimes { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### TeamUniqueKillWeaponsMatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L348)

```csharp
ISchemaFixedArray<CUtlVector<int>> TeamUniqueKillWeaponsMatch { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### TechnicalTimeOut

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L38)

```csharp
ref bool TechnicalTimeOut { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TerroristSpawnPointUsedTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L309)

```csharp
ref float TerroristSpawnPointUsedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TerroristSpawnPoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L313)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> TerroristSpawnPoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SpawnPoint](/docs/api/schemadefinitions/spawnpoint)>>

### TerroristSpawnPointsMasterList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L299)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> TerroristSpawnPointsMasterList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SpawnPoint](/docs/api/schemadefinitions/spawnpoint)>>

### TerroristTimeOutActive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L26)

```csharp
ref bool TerroristTimeOutActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TerroristTimeOutRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L30)

```csharp
ref float TerroristTimeOutRemaining { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TerroristTimeOuts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L34)

```csharp
ref int TerroristTimeOuts { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TerroristsAliveAtFreezetimeEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L221)

```csharp
ref int TerroristsAliveAtFreezetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimeUntilNextPhaseStarts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L56)

```csharp
ref float TimeUntilNextPhaseStarts { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TmNextPeriodicThink

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L251)

```csharp
ref float TmNextPeriodicThink { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TotalRoundsPlayed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L60)

```csharp
ref int TotalRoundsPlayed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalRoundsPlayed1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L171)

```csharp
ref int TotalRoundsPlayed1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TournamentActiveCasterAccounts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L116)

```csharp
ISchemaFixedArray<uint> TournamentActiveCasterAccounts { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### TournamentEventName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L94)

```csharp
string TournamentEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TournamentEventStage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L96)

```csharp
string TournamentEventStage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TournamentPredictionsPct

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L102)

```csharp
ref int TournamentPredictionsPct { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TournamentPredictionsTxt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L100)

```csharp
string TournamentPredictionsTxt { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UllLocalMatchID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L151)

```csharp
ref ulong UllLocalMatchID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### UnBalancedRounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L173)

```csharp
ref int UnBalancedRounds { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VoiceWonMatchBragFired

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L253)

```csharp
ref bool VoiceWonMatchBragFired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoteCalled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L279)

```csharp
ref bool VoteCalled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VoteCheckThrottle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L283)

```csharp
ref float VoteCheckThrottle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WarmupNextChatNoticeTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L255)

```csharp
ref float WarmupNextChatNoticeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WarmupPeriod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L20)

```csharp
ref bool WarmupPeriod { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WarmupPeriodEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L22)

```csharp
GameTime_t WarmupPeriodEnd { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### WarmupPeriodStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L24)

```csharp
GameTime_t WarmupPeriodStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

## Methods

### AnyHostageReachedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L423)

```csharp
void AnyHostageReachedUpdated()
```

### BombDroppedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L450)

```csharp
void BombDroppedUpdated()
```

### BombPlantedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L451)

```csharp
void BombPlantedUpdated()
```

### CMMItemDropRevealEndTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L442)

```csharp
void CMMItemDropRevealEndTimeUpdated()
```

### CMMItemDropRevealStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L441)

```csharp
void CMMItemDropRevealStartTimeUpdated()
```

### CTCantBuyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L455)

```csharp
void CTCantBuyUpdated()
```

### CTTeamIntroVariantUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L474)

```csharp
void CTTeamIntroVariantUpdated()
```

### CTTimeOutActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L403)

```csharp
void CTTimeOutActiveUpdated()
```

### CTTimeOutRemainingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L405)

```csharp
void CTTimeOutRemainingUpdated()
```

### CTTimeOutsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L407)

```csharp
void CTTimeOutsUpdated()
```

### EndMatchMapGroupVoteOptionsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L465)

```csharp
void EndMatchMapGroupVoteOptionsUpdated()
```

### EndMatchMapGroupVoteTypesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L464)

```csharp
void EndMatchMapGroupVoteTypesUpdated()
```

### EndMatchMapVoteWinnerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L466)

```csharp
void EndMatchMapVoteWinnerUpdated()
```

### FindPickerEntity(CBasePlayerController)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSGameRules.cs#L16)

Find the player that the controller is targetting

```csharp
T? FindPickerEntity<T>(CBasePlayerController controller) where T : ISchemaClass<T>
```

#### Parameters

- **controller**: [CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller) - Player Controller

#### Returns

- T?

#### Type Parameters

- **T**:  - Entity Class

### FreezePeriodUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L398)

```csharp
void FreezePeriodUpdated()
```

### FreezeTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L410)

```csharp
void FreezeTimeUpdated()
```

### GameModeRulesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L470)

```csharp
void GameModeRulesUpdated()
```

### GamePhaseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L418)

```csharp
void GamePhaseUpdated()
```

### GameRestartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L415)

```csharp
void GameRestartUpdated()
```

### GameStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L416)

```csharp
void GameStartTimeUpdated()
```

### HalloweenMaskListSeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L449)

```csharp
void HalloweenMaskListSeedUpdated()
```

### HasMatchStartedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L434)

```csharp
void HasMatchStartedUpdated()
```

### HostagesRemainingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L422)

```csharp
void HostagesRemainingUpdated()
```

### IsDroppingItemsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L443)

```csharp
void IsDroppingItemsUpdated()
```

### IsHltvActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L445)

```csharp
void IsHltvActiveUpdated()
```

### IsQuestEligibleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L444)

```csharp
void IsQuestEligibleUpdated()
```

### IsQueuedMatchmakingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L427)

```csharp
void IsQueuedMatchmakingUpdated()
```

### IsValveDSUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L429)

```csharp
void IsValveDSUpdated()
```

### LogoMapUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L430)

```csharp
void LogoMapUpdated()
```

### MapHasBombTargetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L424)

```csharp
void MapHasBombTargetUpdated()
```

### MapHasBuyZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L426)

```csharp
void MapHasBuyZoneUpdated()
```

### MapHasRescueZoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L425)

```csharp
void MapHasRescueZoneUpdated()
```

### MatchAbortedEarlyReasonUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L469)

```csharp
void MatchAbortedEarlyReasonUpdated()
```

### MatchDeviceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L433)

```csharp
void MatchDeviceUpdated()
```

### MatchEndCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L472)

```csharp
void MatchEndCountUpdated()
```

### MatchStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L412)

```csharp
void MatchStartTimeUpdated()
```

### MatchStatTxtUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L438)

```csharp
void MatchStatTxtUpdated()
```

### MatchStats_PlayersAlive_CTUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L457)

```csharp
void MatchStats_PlayersAlive_CTUpdated()
```

### MatchStats_PlayersAlive_TUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L458)

```csharp
void MatchStats_PlayersAlive_TUpdated()
```

### MatchStats_RoundResultsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L456)

```csharp
void MatchStats_RoundResultsUpdated()
```

### MatchWaitingForResumeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L409)

```csharp
void MatchWaitingForResumeUpdated()
```

### MinimapMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L462)

```csharp
void MinimapMaxsUpdated()
```

### MinimapMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L461)

```csharp
void MinimapMinsUpdated()
```

### MinimapVerticalSectionHeightsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L463)

```csharp
void MinimapVerticalSectionHeightsUpdated()
```

### NextMapInMapgroupUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L435)

```csharp
void NextMapInMapgroupUpdated()
```

### NextRespawnWaveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L460)

```csharp
void NextRespawnWaveUpdated()
```

### NumBestOfMapsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L448)

```csharp
void NumBestOfMapsUpdated()
```

### NumConsecutiveCTLosesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L467)

```csharp
void NumConsecutiveCTLosesUpdated()
```

### NumConsecutiveTerroristLosesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L468)

```csharp
void NumConsecutiveTerroristLosesUpdated()
```

### OvertimePlayingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L421)

```csharp
void OvertimePlayingUpdated()
```

### PlayAllStepSoundsOnServerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L431)

```csharp
void PlayAllStepSoundsOnServerUpdated()
```

### ProhibitedItemIndicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L446)

```csharp
void ProhibitedItemIndicesUpdated()
```

### QueuedMatchmakingModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L428)

```csharp
void QueuedMatchmakingModeUpdated()
```

### RestartRoundTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L414)

```csharp
void RestartRoundTimeUpdated()
```

### RetakeRulesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L471)

```csharp
void RetakeRulesUpdated()
```

### RoundEndCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L489)

```csharp
void RoundEndCountUpdated()
```

### RoundEndFunFactData1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L482)

```csharp
void RoundEndFunFactData1Updated()
```

### RoundEndFunFactData2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L483)

```csharp
void RoundEndFunFactData2Updated()
```

### RoundEndFunFactData3Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L484)

```csharp
void RoundEndFunFactData3Updated()
```

### RoundEndFunFactPlayerSlotUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L481)

```csharp
void RoundEndFunFactPlayerSlotUpdated()
```

### RoundEndFunFactTokenUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L480)

```csharp
void RoundEndFunFactTokenUpdated()
```

### RoundEndLegacyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L488)

```csharp
void RoundEndLegacyUpdated()
```

### RoundEndMessageUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L485)

```csharp
void RoundEndMessageUpdated()
```

### RoundEndNoMusicUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L487)

```csharp
void RoundEndNoMusicUpdated()
```

### RoundEndPlayerCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L486)

```csharp
void RoundEndPlayerCountUpdated()
```

### RoundEndReasonUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L477)

```csharp
void RoundEndReasonUpdated()
```

### RoundEndShowTimerDefendUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L478)

```csharp
void RoundEndShowTimerDefendUpdated()
```

### RoundEndTimerTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L479)

```csharp
void RoundEndTimerTimeUpdated()
```

### RoundEndWinnerTeamUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L476)

```csharp
void RoundEndWinnerTeamUpdated()
```

### RoundStartCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L491)

```csharp
void RoundStartCountUpdated()
```

### RoundStartRoundNumberUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L490)

```csharp
void RoundStartRoundNumberUpdated()
```

### RoundStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L413)

```csharp
void RoundStartTimeUpdated()
```

### RoundTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L411)

```csharp
void RoundTimeUpdated()
```

### RoundWinReasonUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L453)

```csharp
void RoundWinReasonUpdated()
```

### RoundWinStatusUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L452)

```csharp
void RoundWinStatusUpdated()
```

### RoundsPlayedThisPhaseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L420)

```csharp
void RoundsPlayedThisPhaseUpdated()
```

### SpectatorSlotCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L432)

```csharp
void SpectatorSlotCountUpdated()
```

### TCantBuyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L454)

```csharp
void TCantBuyUpdated()
```

### TTeamIntroVariantUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L473)

```csharp
void TTeamIntroVariantUpdated()
```

### TeamIntroPeriodUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L475)

```csharp
void TeamIntroPeriodUpdated()
```

### TeamRespawnWaveTimesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L459)

```csharp
void TeamRespawnWaveTimesUpdated()
```

### TechnicalTimeOutUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L408)

```csharp
void TechnicalTimeOutUpdated()
```

### TerminateRound(RoundEndReason, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSGameRules.cs#L23)

Ends the current round with the specified reason after an optional delay

```csharp
void TerminateRound(RoundEndReason reason, float delay)
```

#### Parameters

- **reason**: [RoundEndReason](/docs/api/natives/roundendreason) - The reason for ending the round
- **delay**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay before ending the round

### TerminateRound(RoundEndReason, float, uint, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSGameRules.cs#L32)

Ends the current round with the specified reason after an optional delay

```csharp
void TerminateRound(RoundEndReason reason, float delay, uint teamId, uint unk01 = 0)
```

#### Parameters

- **reason**: [RoundEndReason](/docs/api/natives/roundendreason) - The reason for ending the round
- **delay**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay before ending the round
- **teamId**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32) - The team id to end the round for
- **unk01**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32) - Unknown parameter

### TerroristTimeOutActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L402)

```csharp
void TerroristTimeOutActiveUpdated()
```

### TerroristTimeOutRemainingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L404)

```csharp
void TerroristTimeOutRemainingUpdated()
```

### TerroristTimeOutsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L406)

```csharp
void TerroristTimeOutsUpdated()
```

### TimeUntilNextPhaseStartsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L417)

```csharp
void TimeUntilNextPhaseStartsUpdated()
```

### TotalRoundsPlayedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L419)

```csharp
void TotalRoundsPlayedUpdated()
```

### TournamentActiveCasterAccountsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L447)

```csharp
void TournamentActiveCasterAccountsUpdated()
```

### TournamentEventNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L436)

```csharp
void TournamentEventNameUpdated()
```

### TournamentEventStageUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L437)

```csharp
void TournamentEventStageUpdated()
```

### TournamentPredictionsPctUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L440)

```csharp
void TournamentPredictionsPctUpdated()
```

### TournamentPredictionsTxtUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L439)

```csharp
void TournamentPredictionsTxtUpdated()
```

### WarmupPeriodEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L400)

```csharp
void WarmupPeriodEndUpdated()
```

### WarmupPeriodStartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L401)

```csharp
void WarmupPeriodStartUpdated()
```

### WarmupPeriodUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L399)

```csharp
void WarmupPeriodUpdated()
```

