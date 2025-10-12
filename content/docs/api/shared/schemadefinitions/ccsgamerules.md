---
title: CCSGameRules
---

```csharp
public interface CCSGameRules : CTeamplayRules, CMultiplayRules, CGameRules, ISchemaClass<CGameRules>, ISchemaClass<CMultiplayRules>, ISchemaClass<CTeamplayRules>, ISchemaClass<CCSGameRules>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AccountCT** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L237)

```csharp
ref int AccountCT { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AccountTerrorist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L235)

```csharp
ref int AccountTerrorist { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AccumulatedRoundOffDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L327)

```csharp
ref float AccumulatedRoundOffDamage { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AllowWeaponSwitch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L317)

```csharp
ref bool AllowWeaponSwitch { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AnyHostageReached** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L64)

```csharp
ref bool AnyHostageReached { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AutobalanceDisplayTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L315)

```csharp
ref float AutobalanceDisplayTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AvgPlayerRank** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L205)

```csharp
ref float AvgPlayerRank { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **BombDefused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L289)

```csharp
ref bool BombDefused { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **BombDropped** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L118)

```csharp
ref bool BombDropped { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **BombPlanted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L120)

```csharp
ref bool BombPlanted { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **BtGlobalBlackboard** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L340)

```csharp
SchemaUntypedField BtGlobalBlackboard { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **BuyTimeEnded** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L283)

```csharp
ref bool BuyTimeEnded { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CMMItemDropRevealEndTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L102)

```csharp
GameTime_t CMMItemDropRevealEndTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **CMMItemDropRevealStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L100)

```csharp
GameTime_t CMMItemDropRevealStartTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **CTCantBuy** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L128)

```csharp
ref bool CTCantBuy { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CTSpawnPointUsedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L303)

```csharp
ref float CTSpawnPointUsedTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CTSpawnPoints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L309)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> CTSpawnPoints { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### **CTSpawnPointsMasterList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L295)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> CTSpawnPointsMasterList { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### **CTTeamIntroVariant** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L354)

```csharp
ref int CTTeamIntroVariant { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CTTimeOutActive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L26)

```csharp
ref bool CTTimeOutActive { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CTTimeOutRemaining** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L30)

```csharp
ref float CTTimeOutRemaining { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CTTimeOuts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L34)

```csharp
ref int CTTimeOuts { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CTsAliveAtFreezetimeEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L217)

```csharp
ref int CTsAliveAtFreezetimeEnd { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CanDonateWeapons** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L267)

```csharp
ref bool CanDonateWeapons { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CompleteReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L191)

```csharp
ref bool CompleteReset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EndMatchMapGroupVoteOptions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L151)

```csharp
ISchemaFixedArray<int> EndMatchMapGroupVoteOptions { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **EndMatchMapGroupVoteTypes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L149)

```csharp
ISchemaFixedArray<int> EndMatchMapGroupVoteTypes { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **EndMatchMapVoteWinner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L153)

```csharp
ref int EndMatchMapVoteWinner { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **EndMatchOnRoundReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L171)

```csharp
ref bool EndMatchOnRoundReset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EndMatchOnThink** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L173)

```csharp
ref bool EndMatchOnThink { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EndMatchTiedVotes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L199)

```csharp
ref CUtlVector<int> EndMatchTiedVotes { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **FirstBloodTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L271)

```csharp
ref float FirstBloodTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FirstConnected** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L189)

```csharp
ref bool FirstConnected { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FirstKillTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L269)

```csharp
ref float FirstKillTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ForceTeamChangeSilent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L221)

```csharp
ref bool ForceTeamChangeSilent { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FreezePeriod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L16)

```csharp
ref bool FreezePeriod { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FreezeTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L175)

```csharp
ref int FreezeTime { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GameModeRules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L337)

```csharp
CCSGameModeRules? GameModeRules { get; }
```

- Property Value

- [CCSGameModeRules](/docs/api/shared/schemadefinitions/ccsgamemoderules)?

### **GamePhase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L54)

```csharp
ref int GamePhase { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GameRestart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L48)

```csharp
ref bool GameRestart { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GameStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L50)

```csharp
ref float GameStartTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **HalloweenMaskListSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L116)

```csharp
ref int HalloweenMaskListSeed { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HasHostageBeenTouched** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L159)

```csharp
ref bool HasHostageBeenTouched { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HasMatchStarted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L86)

```csharp
ref bool HasMatchStarted { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HasTriggeredRoundStartMusic** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L333)

```csharp
ref bool HasTriggeredRoundStartMusic { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HostageWasInjured** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L273)

```csharp
ref bool HostageWasInjured { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HostageWasKilled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L275)

```csharp
ref bool HostageWasKilled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HostagesRemaining** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L62)

```csharp
ref int HostagesRemaining { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HostagesRescued** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L255)

```csharp
ref int HostagesRescued { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HostagesTouched** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L257)

```csharp
ref int HostagesTouched { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **IntermissionEndTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L163)

```csharp
GameTime_t IntermissionEndTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **IntermissionStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L161)

```csharp
GameTime_t IntermissionStartTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **IsDroppingItems** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L104)

```csharp
ref bool IsDroppingItems { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsHltvActive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L108)

```csharp
ref bool IsHltvActive { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsQuestEligible** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L106)

```csharp
ref bool IsQuestEligible { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsQueuedMatchmaking** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L72)

```csharp
ref bool IsQueuedMatchmaking { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsUnreservedGameServer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L313)

```csharp
ref bool IsUnreservedGameServer { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsValveDS** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L76)

```csharp
ref bool IsValveDS { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LastFreezeEndBeep** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L285)

```csharp
ref int LastFreezeEndBeep { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **LastPerfSampleTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L394)

```csharp
ref double LastPerfSampleTime { get; }
```

- Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### **LastThinkTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L325)

```csharp
GameTime_t LastThinkTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **LevelInitialized** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L165)

```csharp
ref bool LevelInitialized { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LoadingRoundBackupData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L223)

```csharp
ref bool LoadingRoundBackupData { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LogoMap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L78)

```csharp
ref bool LogoMap { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LoserBonusMostRecentTeam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L247)

```csharp
ref int LoserBonusMostRecentTeam { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MTeamDMLastThinkTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L231)

```csharp
ref float MTeamDMLastThinkTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MTeamDMLastWinningTeamNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L229)

```csharp
ref int MTeamDMLastWinningTeamNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MainCTSpawnPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L293)

```csharp
ref Vector MainCTSpawnPos { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MapHasBombTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L66)

```csharp
ref bool MapHasBombTarget { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MapHasBombZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L291)

```csharp
ref bool MapHasBombZone { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MapHasBuyZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L70)

```csharp
ref bool MapHasBuyZone { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MapHasRescueZone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L68)

```csharp
ref bool MapHasRescueZone { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MatchAbortedEarlyReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L331)

```csharp
ref int MatchAbortedEarlyReason { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MatchDevice** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L84)

```csharp
ref int MatchDevice { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MatchEndCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L350)

```csharp
ref byte MatchEndCount { get; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **MatchInfoDecidedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L227)

```csharp
ref float MatchInfoDecidedTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MatchInfoShowType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L225)

```csharp
ref int MatchInfoShowType { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MatchStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L42)

```csharp
ref float MatchStartTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MatchStatTxt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L94)

```csharp
string MatchStatTxt { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **MatchStats_PlayersAlive_CT** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L132)

```csharp
ISchemaFixedArray<int> MatchStats_PlayersAlive_CT { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **MatchStats_PlayersAlive_T** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L134)

```csharp
ISchemaFixedArray<int> MatchStats_PlayersAlive_T { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **MatchStats_RoundResults** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L130)

```csharp
ISchemaFixedArray<int> MatchStats_RoundResults { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **MatchWaitingForResume** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L38)

```csharp
ref bool MatchWaitingForResume { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MaxNumCTs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L245)

```csharp
ref int MaxNumCTs { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MaxNumTerrorists** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L243)

```csharp
ref int MaxNumTerrorists { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MinimapMaxs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L143)

```csharp
ref Vector MinimapMaxs { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MinimapMins** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L141)

```csharp
ref Vector MinimapMins { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MinimapVerticalSectionHeights** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L145)

```csharp
ISchemaFixedArray<float> MinimapVerticalSectionHeights { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **NeedToAskPlayersForContinueVote** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L201)

```csharp
ref bool NeedToAskPlayersForContinueVote { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NextCTSpawnPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L301)

```csharp
ref int NextCTSpawnPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NextHostageAnnouncement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L259)

```csharp
ref float NextHostageAnnouncement { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NextMapInMapgroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L88)

```csharp
ref int NextMapInMapgroup { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NextRespawnWave** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L139)

```csharp
SchemaUntypedField NextRespawnWave { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **NextTerroristSpawnPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L305)

```csharp
ref int NextTerroristSpawnPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NextUpdateTeamClanNamesTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L323)

```csharp
ref float NextUpdateTeamClanNamesTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NoCTsKilled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L263)

```csharp
ref bool NoCTsKilled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NoEnemiesKilled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L265)

```csharp
ref bool NoEnemiesKilled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NoTerroristsKilled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L261)

```csharp
ref bool NoTerroristsKilled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NumBestOfMaps** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L114)

```csharp
ref int NumBestOfMaps { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumCT** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L179)

```csharp
ref int NumCT { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumConsecutiveCTLoses** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L155)

```csharp
ref int NumConsecutiveCTLoses { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumConsecutiveTerroristLoses** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L157)

```csharp
ref int NumConsecutiveTerroristLoses { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumQueuedMatchmakingAccounts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L203)

```csharp
ref uint NumQueuedMatchmakingAccounts { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **NumSpawnableCT** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L183)

```csharp
ref int NumSpawnableCT { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumSpawnableTerrorist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L181)

```csharp
ref int NumSpawnableTerrorist { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumSpectatorsCountMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L211)

```csharp
ref uint NumSpectatorsCountMax { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **NumSpectatorsCountMaxLnk** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L215)

```csharp
ref uint NumSpectatorsCountMaxLnk { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **NumSpectatorsCountMaxTV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L213)

```csharp
ref uint NumSpectatorsCountMaxTV { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **NumTerrorist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L177)

```csharp
ref int NumTerrorist { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumTotalTournamentDrops** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L209)

```csharp
ref uint NumTotalTournamentDrops { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **OvertimePlaying** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L60)

```csharp
ref int OvertimePlaying { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PhaseChangeAnnouncementTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L321)

```csharp
GameTime_t PhaseChangeAnnouncementTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **PickNewTeamsOnReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L193)

```csharp
ref bool PickNewTeamsOnReset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayAllStepSoundsOnServer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L80)

```csharp
ref bool PlayAllStepSoundsOnServer { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayedTeamIntroVO** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L360)

```csharp
ref bool PlayedTeamIntroVO { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayerResource** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L342)

```csharp
ref CHandle<CBaseEntity> PlayerResource { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **ProhibitedItemIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L110)

```csharp
ISchemaFixedArray<ushort> ProhibitedItemIndices { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### **QueuedMatchmakingMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L74)

```csharp
ref int QueuedMatchmakingMode { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **QueuedMatchmakingReservationString** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L207)

```csharp
string QueuedMatchmakingReservationString { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **RespawningAllRespawnablePlayers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L299)

```csharp
ref bool RespawningAllRespawnablePlayers { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RestartRoundTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L46)

```csharp
GameTime_t RestartRoundTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **RetakeRules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L344)

```csharp
CRetakeGameRules RetakeRules { get; }
```

- Property Value

- [CRetakeGameRules](/docs/api/shared/schemadefinitions/cretakegamerules)

### **RoundEndCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L388)

```csharp
ref byte RoundEndCount { get; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **RoundEndFunFactData1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L374)

```csharp
ref int RoundEndFunFactData1 { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndFunFactData2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L376)

```csharp
ref int RoundEndFunFactData2 { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndFunFactData3** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L378)

```csharp
ref int RoundEndFunFactData3 { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndFunFactPlayerSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L372)

```csharp
ref uint RoundEndFunFactPlayerSlot { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RoundEndFunFactToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L370)

```csharp
string RoundEndFunFactToken { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **RoundEndLegacy** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L386)

```csharp
ref int RoundEndLegacy { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndMessage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L380)

```csharp
string RoundEndMessage { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **RoundEndNoMusic** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L384)

```csharp
ref bool RoundEndNoMusic { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RoundEndPlayerCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L382)

```csharp
ref int RoundEndPlayerCount { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L364)

```csharp
ref int RoundEndReason { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndShowTimerDefend** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L366)

```csharp
ref bool RoundEndShowTimerDefend { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RoundEndTimerTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L368)

```csharp
ref int RoundEndTimerTime { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundEndWinnerTeam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L362)

```csharp
ref int RoundEndWinnerTeam { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundStartCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L392)

```csharp
ref byte RoundStartCount { get; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **RoundStartRoundNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L390)

```csharp
ref int RoundStartRoundNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L44)

```csharp
GameTime_t RoundStartTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **RoundTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L40)

```csharp
ref int RoundTime { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundTimeWarningTriggered** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L319)

```csharp
ref bool RoundTimeWarningTriggered { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RoundWinReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L124)

```csharp
ref int RoundWinReason { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundWinStatus** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L122)

```csharp
ref int RoundWinStatus { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundsPlayedThisPhase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L58)

```csharp
ref int RoundsPlayedThisPhase { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ScrambleTeamsOnRestart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L195)

```csharp
ref bool ScrambleTeamsOnRestart { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SelectedHostageSpawnIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L185)

```csharp
ref CUtlVector<int> SelectedHostageSpawnIndices { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **ServerVoteOnReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L279)

```csharp
ref bool ServerVoteOnReset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ShorthandedBonusLastEvalRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L329)

```csharp
ref int ShorthandedBonusLastEvalRound { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SpawnPointCount_CT** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L241)

```csharp
ref int SpawnPointCount_CT { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SpawnPointCount_Terrorist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L239)

```csharp
ref int SpawnPointCount_Terrorist { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SpawnPointsRandomSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L187)

```csharp
ref int SpawnPointsRandomSeed { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SpectatorSlotCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L82)

```csharp
ref int SpectatorSlotCount { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SwapTeamsOnRestart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L197)

```csharp
ref bool SwapTeamsOnRestart { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SwitchingTeamsAtRoundReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L335)

```csharp
ref bool SwitchingTeamsAtRoundReset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TCantBuy** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L126)

```csharp
ref bool TCantBuy { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TTeamIntroVariant** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L352)

```csharp
ref int TTeamIntroVariant { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TargetBombed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L287)

```csharp
ref bool TargetBombed { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TeamDMLastAnnouncementTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L233)

```csharp
ref float TeamDMLastAnnouncementTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TeamIntroPeriod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L356)

```csharp
ref bool TeamIntroPeriod { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TeamIntroPeriodEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L358)

```csharp
GameTime_t TeamIntroPeriodEnd { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **TeamLastKillUsedUniqueWeaponMatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L348)

```csharp
ISchemaFixedArray<bool> TeamLastKillUsedUniqueWeaponMatch { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### **TeamRespawnWaveTimes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L136)

```csharp
ISchemaFixedArray<float> TeamRespawnWaveTimes { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **TeamUniqueKillWeaponsMatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L346)

```csharp
ISchemaFixedArray<CUtlVector<int>> TeamUniqueKillWeaponsMatch { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### **TechnicalTimeOut** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L36)

```csharp
ref bool TechnicalTimeOut { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TerroristSpawnPointUsedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L307)

```csharp
ref float TerroristSpawnPointUsedTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TerroristSpawnPoints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L311)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> TerroristSpawnPoints { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### **TerroristSpawnPointsMasterList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L297)

```csharp
ref CUtlVector<PointerTo<SpawnPoint>> TerroristSpawnPointsMasterList { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SpawnPoint](/docs/api/shared/schemadefinitions/spawnpoint)>>

### **TerroristTimeOutActive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L24)

```csharp
ref bool TerroristTimeOutActive { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TerroristTimeOutRemaining** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L28)

```csharp
ref float TerroristTimeOutRemaining { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TerroristTimeOuts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L32)

```csharp
ref int TerroristTimeOuts { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TerroristsAliveAtFreezetimeEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L219)

```csharp
ref int TerroristsAliveAtFreezetimeEnd { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TimeUntilNextPhaseStarts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L52)

```csharp
ref float TimeUntilNextPhaseStarts { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TmNextPeriodicThink** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L249)

```csharp
ref float TmNextPeriodicThink { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TotalRoundsPlayed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L56)

```csharp
ref int TotalRoundsPlayed { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TotalRoundsPlayed1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L167)

```csharp
ref int TotalRoundsPlayed1 { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TournamentActiveCasterAccounts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L112)

```csharp
ISchemaFixedArray<uint> TournamentActiveCasterAccounts { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **TournamentEventName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L90)

```csharp
string TournamentEventName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TournamentEventStage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L92)

```csharp
string TournamentEventStage { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TournamentPredictionsPct** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L98)

```csharp
ref int TournamentPredictionsPct { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TournamentPredictionsTxt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L96)

```csharp
string TournamentPredictionsTxt { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **UllLocalMatchID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L147)

```csharp
ref ulong UllLocalMatchID { get; }
```

- Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **UnBalancedRounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L169)

```csharp
ref int UnBalancedRounds { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **VoiceWonMatchBragFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L251)

```csharp
ref bool VoiceWonMatchBragFired { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **VoteCalled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L277)

```csharp
ref bool VoteCalled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **VoteCheckThrottle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L281)

```csharp
ref float VoteCheckThrottle { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **WarmupNextChatNoticeTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L253)

```csharp
ref float WarmupNextChatNoticeTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **WarmupPeriod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L18)

```csharp
ref bool WarmupPeriod { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **WarmupPeriodEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L20)

```csharp
GameTime_t WarmupPeriodEnd { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **WarmupPeriodStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L22)

```csharp
GameTime_t WarmupPeriodStart { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

## Methods

### **AnyHostageReachedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L420)

```csharp
void AnyHostageReachedUpdated()
```

### **BombDroppedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L447)

```csharp
void BombDroppedUpdated()
```

### **BombPlantedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L448)

```csharp
void BombPlantedUpdated()
```

### **CMMItemDropRevealEndTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L439)

```csharp
void CMMItemDropRevealEndTimeUpdated()
```

### **CMMItemDropRevealStartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L438)

```csharp
void CMMItemDropRevealStartTimeUpdated()
```

### **CTCantBuyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L452)

```csharp
void CTCantBuyUpdated()
```

### **CTTeamIntroVariantUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L471)

```csharp
void CTTeamIntroVariantUpdated()
```

### **CTTimeOutActiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L401)

```csharp
void CTTimeOutActiveUpdated()
```

### **CTTimeOutRemainingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L403)

```csharp
void CTTimeOutRemainingUpdated()
```

### **CTTimeOutsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L405)

```csharp
void CTTimeOutsUpdated()
```

### **EndMatchMapGroupVoteOptionsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L462)

```csharp
void EndMatchMapGroupVoteOptionsUpdated()
```

### **EndMatchMapGroupVoteTypesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L461)

```csharp
void EndMatchMapGroupVoteTypesUpdated()
```

### **EndMatchMapVoteWinnerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L463)

```csharp
void EndMatchMapVoteWinnerUpdated()
```

### **FindPickerEntity<T>(CBasePlayerController)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSGameRules.cs#L13)

```csharp
T? FindPickerEntity<T>(CBasePlayerController controller) where T : ISchemaClass<T>
```

- Parameters

- **controller**: [CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller) - Player Controller

- Returns

- T?

- Type Parameters

- **T**:  - Entity Class

### **FreezePeriodUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L396)

```csharp
void FreezePeriodUpdated()
```

### **GameModeRulesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L467)

```csharp
void GameModeRulesUpdated()
```

### **GamePhaseUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L415)

```csharp
void GamePhaseUpdated()
```

### **GameRestartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L412)

```csharp
void GameRestartUpdated()
```

### **GameStartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L413)

```csharp
void GameStartTimeUpdated()
```

### **HalloweenMaskListSeedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L446)

```csharp
void HalloweenMaskListSeedUpdated()
```

### **HasMatchStartedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L431)

```csharp
void HasMatchStartedUpdated()
```

### **HostagesRemainingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L419)

```csharp
void HostagesRemainingUpdated()
```

### **IsDroppingItemsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L440)

```csharp
void IsDroppingItemsUpdated()
```

### **IsHltvActiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L442)

```csharp
void IsHltvActiveUpdated()
```

### **IsQuestEligibleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L441)

```csharp
void IsQuestEligibleUpdated()
```

### **IsQueuedMatchmakingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L424)

```csharp
void IsQueuedMatchmakingUpdated()
```

### **IsValveDSUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L426)

```csharp
void IsValveDSUpdated()
```

### **LogoMapUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L427)

```csharp
void LogoMapUpdated()
```

### **MapHasBombTargetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L421)

```csharp
void MapHasBombTargetUpdated()
```

### **MapHasBuyZoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L423)

```csharp
void MapHasBuyZoneUpdated()
```

### **MapHasRescueZoneUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L422)

```csharp
void MapHasRescueZoneUpdated()
```

### **MatchAbortedEarlyReasonUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L466)

```csharp
void MatchAbortedEarlyReasonUpdated()
```

### **MatchDeviceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L430)

```csharp
void MatchDeviceUpdated()
```

### **MatchEndCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L469)

```csharp
void MatchEndCountUpdated()
```

### **MatchStartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L409)

```csharp
void MatchStartTimeUpdated()
```

### **MatchStatTxtUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L435)

```csharp
void MatchStatTxtUpdated()
```

### **MatchStats_PlayersAlive_CTUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L454)

```csharp
void MatchStats_PlayersAlive_CTUpdated()
```

### **MatchStats_PlayersAlive_TUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L455)

```csharp
void MatchStats_PlayersAlive_TUpdated()
```

### **MatchStats_RoundResultsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L453)

```csharp
void MatchStats_RoundResultsUpdated()
```

### **MatchWaitingForResumeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L407)

```csharp
void MatchWaitingForResumeUpdated()
```

### **MinimapMaxsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L459)

```csharp
void MinimapMaxsUpdated()
```

### **MinimapMinsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L458)

```csharp
void MinimapMinsUpdated()
```

### **MinimapVerticalSectionHeightsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L460)

```csharp
void MinimapVerticalSectionHeightsUpdated()
```

### **NextMapInMapgroupUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L432)

```csharp
void NextMapInMapgroupUpdated()
```

### **NextRespawnWaveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L457)

```csharp
void NextRespawnWaveUpdated()
```

### **NumBestOfMapsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L445)

```csharp
void NumBestOfMapsUpdated()
```

### **NumConsecutiveCTLosesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L464)

```csharp
void NumConsecutiveCTLosesUpdated()
```

### **NumConsecutiveTerroristLosesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L465)

```csharp
void NumConsecutiveTerroristLosesUpdated()
```

### **OvertimePlayingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L418)

```csharp
void OvertimePlayingUpdated()
```

### **PlayAllStepSoundsOnServerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L428)

```csharp
void PlayAllStepSoundsOnServerUpdated()
```

### **ProhibitedItemIndicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L443)

```csharp
void ProhibitedItemIndicesUpdated()
```

### **QueuedMatchmakingModeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L425)

```csharp
void QueuedMatchmakingModeUpdated()
```

### **RestartRoundTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L411)

```csharp
void RestartRoundTimeUpdated()
```

### **RetakeRulesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L468)

```csharp
void RetakeRulesUpdated()
```

### **RoundEndCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L486)

```csharp
void RoundEndCountUpdated()
```

### **RoundEndFunFactData1Updated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L479)

```csharp
void RoundEndFunFactData1Updated()
```

### **RoundEndFunFactData2Updated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L480)

```csharp
void RoundEndFunFactData2Updated()
```

### **RoundEndFunFactData3Updated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L481)

```csharp
void RoundEndFunFactData3Updated()
```

### **RoundEndFunFactPlayerSlotUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L478)

```csharp
void RoundEndFunFactPlayerSlotUpdated()
```

### **RoundEndFunFactTokenUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L477)

```csharp
void RoundEndFunFactTokenUpdated()
```

### **RoundEndLegacyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L485)

```csharp
void RoundEndLegacyUpdated()
```

### **RoundEndMessageUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L482)

```csharp
void RoundEndMessageUpdated()
```

### **RoundEndNoMusicUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L484)

```csharp
void RoundEndNoMusicUpdated()
```

### **RoundEndPlayerCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L483)

```csharp
void RoundEndPlayerCountUpdated()
```

### **RoundEndReasonUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L474)

```csharp
void RoundEndReasonUpdated()
```

### **RoundEndShowTimerDefendUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L475)

```csharp
void RoundEndShowTimerDefendUpdated()
```

### **RoundEndTimerTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L476)

```csharp
void RoundEndTimerTimeUpdated()
```

### **RoundEndWinnerTeamUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L473)

```csharp
void RoundEndWinnerTeamUpdated()
```

### **RoundStartCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L488)

```csharp
void RoundStartCountUpdated()
```

### **RoundStartRoundNumberUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L487)

```csharp
void RoundStartRoundNumberUpdated()
```

### **RoundStartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L410)

```csharp
void RoundStartTimeUpdated()
```

### **RoundTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L408)

```csharp
void RoundTimeUpdated()
```

### **RoundWinReasonUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L450)

```csharp
void RoundWinReasonUpdated()
```

### **RoundWinStatusUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L449)

```csharp
void RoundWinStatusUpdated()
```

### **RoundsPlayedThisPhaseUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L417)

```csharp
void RoundsPlayedThisPhaseUpdated()
```

### **SpectatorSlotCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L429)

```csharp
void SpectatorSlotCountUpdated()
```

### **TCantBuyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L451)

```csharp
void TCantBuyUpdated()
```

### **TTeamIntroVariantUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L470)

```csharp
void TTeamIntroVariantUpdated()
```

### **TeamIntroPeriodUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L472)

```csharp
void TeamIntroPeriodUpdated()
```

### **TeamRespawnWaveTimesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L456)

```csharp
void TeamRespawnWaveTimesUpdated()
```

### **TechnicalTimeOutUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L406)

```csharp
void TechnicalTimeOutUpdated()
```

### **TerroristTimeOutActiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L400)

```csharp
void TerroristTimeOutActiveUpdated()
```

### **TerroristTimeOutRemainingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L402)

```csharp
void TerroristTimeOutRemainingUpdated()
```

### **TerroristTimeOutsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L404)

```csharp
void TerroristTimeOutsUpdated()
```

### **TimeUntilNextPhaseStartsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L414)

```csharp
void TimeUntilNextPhaseStartsUpdated()
```

### **TotalRoundsPlayedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L416)

```csharp
void TotalRoundsPlayedUpdated()
```

### **TournamentActiveCasterAccountsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L444)

```csharp
void TournamentActiveCasterAccountsUpdated()
```

### **TournamentEventNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L433)

```csharp
void TournamentEventNameUpdated()
```

### **TournamentEventStageUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L434)

```csharp
void TournamentEventStageUpdated()
```

### **TournamentPredictionsPctUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L437)

```csharp
void TournamentPredictionsPctUpdated()
```

### **TournamentPredictionsTxtUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L436)

```csharp
void TournamentPredictionsTxtUpdated()
```

### **WarmupPeriodEndUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L398)

```csharp
void WarmupPeriodEndUpdated()
```

### **WarmupPeriodStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L399)

```csharp
void WarmupPeriodStartUpdated()
```

### **WarmupPeriodUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSGameRules.cs#L397)

```csharp
void WarmupPeriodUpdated()
```

