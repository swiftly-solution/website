---
title: CCSPlayerController
---

# Interface CCSPlayerController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerController : CBasePlayerController, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBasePlayerController>, ISchemaClass<CCSPlayerController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerController>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayerController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AbandonAllowsSurrender

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L102)

```csharp
ref bool AbandonAllowsSurrender { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AbandonOffersInstantSurrender

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L104)

```csharp
ref bool AbandonOffersInstantSurrender { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ActionTrackingServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L22)

```csharp
CCSPlayerController_ActionTrackingServices? ActionTrackingServices { get; }
```

#### Property Value

- [CCSPlayerController_ActionTrackingServices](/docs/api/schemadefinitions/ccsplayercontroller_actiontrackingservices)?

### ActiveQuestId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L82)

```csharp
ref ushort ActiveQuestId { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### AttemptedToGetColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L42)

```csharp
ref bool AttemptedToGetColor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BotsControlledThisRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L118)

```csharp
ref int BotsControlledThisRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CanControlObservedBot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L120)

```csharp
ref bool CanControlObservedBot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CannotBeKicked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L98)

```csharp
ref bool CannotBeKicked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Clan

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L60)

```csharp
string Clan { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CoachingTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L62)

```csharp
ref int CoachingTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompTeammateColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L38)

```csharp
ref int CompTeammateColor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L72)

```csharp
ref byte CompetitiveRankType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### CompetitiveRanking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L68)

```csharp
ref int CompetitiveRanking { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankingPredicted_Loss

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L76)

```csharp
ref int CompetitiveRankingPredicted_Loss { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankingPredicted_Tie

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L78)

```csharp
ref int CompetitiveRankingPredicted_Tie { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankingPredicted_Win

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L74)

```csharp
ref int CompetitiveRankingPredicted_Win { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveWins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L70)

```csharp
ref int CompetitiveWins { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ControllingBot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L112)

```csharp
ref bool ControllingBot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CrosshairCodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L32)

```csharp
string CrosshairCodes { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DamageServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L24)

```csharp
CCSPlayerController_DamageServices? DamageServices { get; }
```

#### Property Value

- [CCSPlayerController_DamageServices](/docs/api/schemadefinitions/ccsplayercontroller_damageservices)?

### DblLastReceivedPacketPlatFloatTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L190)

```csharp
ref double DblLastReceivedPacketPlatFloatTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### DesiredObserverMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L126)

```csharp
ref int DesiredObserverMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DesiredObserverTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L128)

```csharp
ref CHandle<CEntityInstance> DesiredObserverTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### Disconnection1MinWarningPrinted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L106)

```csharp
ref bool Disconnection1MinWarningPrinted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisconnectionTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L110)

```csharp
ref int DisconnectionTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DraftIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L90)

```csharp
ref int DraftIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndMatchNextMapVote

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L80)

```csharp
ref int EndMatchNextMapVote { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EverFullyConnected

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L100)

```csharp
ref bool EverFullyConnected { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EverPlayedOnTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L40)

```csharp
ref bool EverPlayedOnTeam { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FireBulletsSeedSynchronized

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L200)

```csharp
ref bool FireBulletsSeedSynchronized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstKill

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L158)

```csharp
ref byte FirstKill { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ForceTeamTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L36)

```csharp
GameTime_t ForceTeamTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### GaveTeamDamageWarning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L186)

```csharp
ref bool GaveTeamDamageWarning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GaveTeamDamageWarningThisRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L188)

```csharp
ref bool GaveTeamDamageWarningThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBeenControlledByPlayerThisRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L116)

```csharp
ref bool HasBeenControlledByPlayerThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasCommunicationAbuseMute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L28)

```csharp
ref bool HasCommunicationAbuseMute { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasControlledBotThisRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L114)

```csharp
ref bool HasControlledBotThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasSeenJoinGame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L50)

```csharp
ref bool HasSeenJoinGame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InGameMoneyServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L18)

```csharp
CCSPlayerController_InGameMoneyServices? InGameMoneyServices { get; }
```

#### Property Value

- [CCSPlayerController_InGameMoneyServices](/docs/api/schemadefinitions/ccsplayercontroller_ingamemoneyservices)?

### InSwitchTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L48)

```csharp
ref bool InSwitchTeam { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InventoryServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L20)

```csharp
CCSPlayerController_InventoryServices? InventoryServices { get; }
```

#### Property Value

- [CCSPlayerController_InventoryServices](/docs/api/schemadefinitions/ccsplayercontroller_inventoryservices)?

### JustBecameSpectator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L52)

```csharp
ref bool JustBecameSpectator { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JustDidTeamKill

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L182)

```csharp
ref bool JustDidTeamKill { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KillCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L160)

```csharp
ref byte KillCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LastHeldVoteTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L176)

```csharp
IntervalTimer LastHeldVoteTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/schemadefinitions/intervaltimer)

### LastJoinTeamTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L58)

```csharp
GameTime_t LastJoinTeamTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastTeamDamageWarningTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L192)

```csharp
GameTime_t LastTeamDamageWarningTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### LastTimePlayerWasDisconnectedForPawnsRemove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L194)

```csharp
GameTime_t LastTimePlayerWasDisconnectedForPawnsRemove { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### MVPs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L170)

```csharp
ref int MVPs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MsQueuedModeDisconnectionTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L92)

```csharp
ref uint MsQueuedModeDisconnectionTimestamp { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MusicKitID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L166)

```csharp
ref int MusicKitID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MusicKitMVPs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L168)

```csharp
ref int MusicKitMVPs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MvpNoMusic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L162)

```csharp
ref bool MvpNoMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MvpReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L164)

```csharp
ref int MvpReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NetworkDisconnectionReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L96)

```csharp
ref uint NetworkDisconnectionReason { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NextTimeCheck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L180)

```csharp
ref int NextTimeCheck { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NonSuspiciousHitStreak

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L198)

```csharp
ref uint NonSuspiciousHitStreak { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ObserverPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L124)

```csharp
ref CHandle<CCSObserverPawn> ObserverPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSObserverPawn](/docs/api/schemadefinitions/ccsobserverpawn)>

### OriginalControllerOfCurrentPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L148)

```csharp
ref CHandle<CCSPlayerController> OriginalControllerOfCurrentPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)>

### PawnArmor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L134)

```csharp
ref int PawnArmor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PawnBotDifficulty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L146)

```csharp
ref int PawnBotDifficulty { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PawnCharacterDefIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L140)

```csharp
ref ushort PawnCharacterDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### PawnHasDefuser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L136)

```csharp
ref bool PawnHasDefuser { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PawnHasHelmet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L138)

```csharp
ref bool PawnHasHelmet { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PawnHealth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L132)

```csharp
ref uint PawnHealth { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PawnIsAlive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L130)

```csharp
ref bool PawnIsAlive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PawnLifetimeEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L144)

```csharp
ref int PawnLifetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PawnLifetimeStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L142)

```csharp
ref int PawnLifetimeStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PendingTeamNum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L34)

```csharp
ref byte PendingTeamNum { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Ping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L26)

```csharp
ref uint Ping { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayerDominated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L64)

```csharp
ref ulong PlayerDominated { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PlayerDominatingMe

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L66)

```csharp
ref ulong PlayerDominatingMe { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PlayerPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L122)

```csharp
ref CHandle<CCSPlayerPawn> PlayerPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### PlayerTvControlFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L88)

```csharp
ref uint PlayerTvControlFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PunishForTeamKill

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L184)

```csharp
ref bool PunishForTeamKill { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### QuestProgressReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L86)

```csharp
ref QuestProgress__Reason QuestProgressReason { get; }
```

#### Property Value

- [QuestProgress__Reason](/docs/api/schemadefinitions/questprogress__reason)

### RecentKillQueue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L156)

```csharp
ISchemaFixedArray<byte> RecentKillQueue { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### RemoveAllItemsOnNextRoundReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L56)

```csharp
ref bool RemoveAllItemsOnNextRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundScore

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L152)

```csharp
ref int RoundScore { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundsWon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L154)

```csharp
ref int RoundsWon { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RtActiveMissionPeriod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L84)

```csharp
ref uint RtActiveMissionPeriod { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Score

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L150)

```csharp
ref int Score { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScoreReported

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L108)

```csharp
ref bool ScoreReported { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowHints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L178)

```csharp
ref bool ShowHints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SmoothedPing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L174)

```csharp
ref float SmoothedPing { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SuspiciousHitCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L196)

```csharp
ref uint SuspiciousHitCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SwitchTeamsOnNextRoundReset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L54)

```csharp
ref bool SwitchTeamsOnNextRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeamChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L46)

```csharp
ref bool TeamChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeammatePreferredColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L44)

```csharp
ref int TeammatePreferredColor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UiAbandonRecordedReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L94)

```csharp
ref uint UiAbandonRecordedReason { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### UiCommunicationMuteFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L30)

```csharp
ref uint UiCommunicationMuteFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### UpdateCounter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L172)

```csharp
ref int UpdateCounter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ActionTrackingServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L204)

```csharp
void ActionTrackingServicesUpdated()
```

### ActiveQuestIdUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L225)

```csharp
void ActiveQuestIdUpdated()
```

### CanControlObservedBotUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L232)

```csharp
void CanControlObservedBotUpdated()
```

### ClanUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L214)

```csharp
void ClanUpdated()
```

### CoachingTeamUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L215)

```csharp
void CoachingTeamUpdated()
```

### CompTeammateColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L212)

```csharp
void CompTeammateColorUpdated()
```

### CompetitiveRankTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L220)

```csharp
void CompetitiveRankTypeUpdated()
```

### CompetitiveRankingPredicted_LossUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L222)

```csharp
void CompetitiveRankingPredicted_LossUpdated()
```

### CompetitiveRankingPredicted_TieUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L223)

```csharp
void CompetitiveRankingPredicted_TieUpdated()
```

### CompetitiveRankingPredicted_WinUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L221)

```csharp
void CompetitiveRankingPredicted_WinUpdated()
```

### CompetitiveRankingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L218)

```csharp
void CompetitiveRankingUpdated()
```

### CompetitiveWinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L219)

```csharp
void CompetitiveWinsUpdated()
```

### ControllingBotUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L230)

```csharp
void ControllingBotUpdated()
```

### CrosshairCodesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L209)

```csharp
void CrosshairCodesUpdated()
```

### DamageServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L205)

```csharp
void DamageServicesUpdated()
```

### DisconnectionTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L229)

```csharp
void DisconnectionTickUpdated()
```

### EndMatchNextMapVoteUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L224)

```csharp
void EndMatchNextMapVoteUpdated()
```

### EverPlayedOnTeamUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L213)

```csharp
void EverPlayedOnTeamUpdated()
```

### FireBulletsSeedSynchronizedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L254)

```csharp
void FireBulletsSeedSynchronizedUpdated()
```

### FirstKillUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L247)

```csharp
void FirstKillUpdated()
```

### ForceTeamTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L211)

```csharp
void ForceTeamTimeUpdated()
```

### HasCommunicationAbuseMuteUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L207)

```csharp
void HasCommunicationAbuseMuteUpdated()
```

### HasControlledBotThisRoundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L231)

```csharp
void HasControlledBotThisRoundUpdated()
```

### InGameMoneyServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L202)

```csharp
void InGameMoneyServicesUpdated()
```

### InventoryServicesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L203)

```csharp
void InventoryServicesUpdated()
```

### KillCountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L248)

```csharp
void KillCountUpdated()
```

### MVPsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L253)

```csharp
void MVPsUpdated()
```

### MusicKitIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L251)

```csharp
void MusicKitIDUpdated()
```

### MusicKitMVPsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L252)

```csharp
void MusicKitMVPsUpdated()
```

### MvpNoMusicUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L249)

```csharp
void MvpNoMusicUpdated()
```

### MvpReasonUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L250)

```csharp
void MvpReasonUpdated()
```

### ObserverPawnUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L234)

```csharp
void ObserverPawnUpdated()
```

### OriginalControllerOfCurrentPawnUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L244)

```csharp
void OriginalControllerOfCurrentPawnUpdated()
```

### PawnArmorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L237)

```csharp
void PawnArmorUpdated()
```

### PawnBotDifficultyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L243)

```csharp
void PawnBotDifficultyUpdated()
```

### PawnCharacterDefIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L240)

```csharp
void PawnCharacterDefIndexUpdated()
```

### PawnHasDefuserUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L238)

```csharp
void PawnHasDefuserUpdated()
```

### PawnHasHelmetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L239)

```csharp
void PawnHasHelmetUpdated()
```

### PawnHealthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L236)

```csharp
void PawnHealthUpdated()
```

### PawnIsAliveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L235)

```csharp
void PawnIsAliveUpdated()
```

### PawnLifetimeEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L242)

```csharp
void PawnLifetimeEndUpdated()
```

### PawnLifetimeStartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L241)

```csharp
void PawnLifetimeStartUpdated()
```

### PendingTeamNumUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L210)

```csharp
void PendingTeamNumUpdated()
```

### PingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L206)

```csharp
void PingUpdated()
```

### PlayerDominatedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L216)

```csharp
void PlayerDominatedUpdated()
```

### PlayerDominatingMeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L217)

```csharp
void PlayerDominatingMeUpdated()
```

### PlayerPawnUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L233)

```csharp
void PlayerPawnUpdated()
```

### PlayerTvControlFlagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L228)

```csharp
void PlayerTvControlFlagsUpdated()
```

### QuestProgressReasonUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L227)

```csharp
void QuestProgressReasonUpdated()
```

### RecentKillQueueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L246)

```csharp
void RecentKillQueueUpdated()
```

### Respawn()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerController.cs#L8)

Respawns the player.

```csharp
void Respawn()
```

### RtActiveMissionPeriodUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L226)

```csharp
void RtActiveMissionPeriodUpdated()
```

### ScoreUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L245)

```csharp
void ScoreUpdated()
```

### UiCommunicationMuteFlagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L208)

```csharp
void UiCommunicationMuteFlagsUpdated()
```

