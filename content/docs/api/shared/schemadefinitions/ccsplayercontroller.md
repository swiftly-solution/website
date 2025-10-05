---
title: CCSPlayerController
---

```csharp
public interface CCSPlayerController : CBasePlayerController, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBasePlayerController>, ISchemaClass<CCSPlayerController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AbandonAllowsSurrender** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L100)

```csharp
ref bool AbandonAllowsSurrender { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**AbandonOffersInstantSurrender** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L102)

```csharp
ref bool AbandonOffersInstantSurrender { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ActionTrackingServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L20)

```csharp
CCSPlayerController_ActionTrackingServices? ActionTrackingServices { get; }
```

#### Property Value

- [CCSPlayerController_ActionTrackingServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_actiontrackingservices)?

**ActiveQuestId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L80)

```csharp
ref ushort ActiveQuestId { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**AttemptedToGetColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L40)

```csharp
ref bool AttemptedToGetColor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**BotsControlledThisRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L116)

```csharp
ref int BotsControlledThisRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CanControlObservedBot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L118)

```csharp
ref bool CanControlObservedBot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**CannotBeKicked** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L96)

```csharp
ref bool CannotBeKicked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Clan** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L58)

```csharp
string Clan { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**CoachingTeam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L60)

```csharp
ref int CoachingTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompTeammateColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L36)

```csharp
ref int CompTeammateColor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompetitiveRankType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L70)

```csharp
ref byte CompetitiveRankType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**CompetitiveRanking** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L66)

```csharp
ref int CompetitiveRanking { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompetitiveRankingPredicted_Loss** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L74)

```csharp
ref int CompetitiveRankingPredicted_Loss { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompetitiveRankingPredicted_Tie** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L76)

```csharp
ref int CompetitiveRankingPredicted_Tie { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompetitiveRankingPredicted_Win** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L72)

```csharp
ref int CompetitiveRankingPredicted_Win { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**CompetitiveWins** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L68)

```csharp
ref int CompetitiveWins { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ControllingBot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L110)

```csharp
ref bool ControllingBot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**CrosshairCodes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L30)

```csharp
string CrosshairCodes { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**DamageServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L22)

```csharp
CCSPlayerController_DamageServices? DamageServices { get; }
```

#### Property Value

- [CCSPlayerController_DamageServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_damageservices)?

**DblLastReceivedPacketPlatFloatTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L188)

```csharp
ref double DblLastReceivedPacketPlatFloatTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

**DesiredObserverMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L124)

```csharp
ref int DesiredObserverMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**DesiredObserverTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L126)

```csharp
ref CHandle<CEntityInstance> DesiredObserverTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

**Disconnection1MinWarningPrinted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L104)

```csharp
ref bool Disconnection1MinWarningPrinted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**DisconnectionTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L108)

```csharp
ref int DisconnectionTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**DraftIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L88)

```csharp
ref int DraftIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**EndMatchNextMapVote** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L78)

```csharp
ref int EndMatchNextMapVote { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**EverFullyConnected** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L98)

```csharp
ref bool EverFullyConnected { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**EverPlayedOnTeam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L38)

```csharp
ref bool EverPlayedOnTeam { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FireBulletsSeedSynchronized** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L198)

```csharp
ref bool FireBulletsSeedSynchronized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FirstKill** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L156)

```csharp
ref byte FirstKill { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**ForceTeamTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L34)

```csharp
GameTime_t ForceTeamTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**GaveTeamDamageWarning** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L184)

```csharp
ref bool GaveTeamDamageWarning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**GaveTeamDamageWarningThisRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L186)

```csharp
ref bool GaveTeamDamageWarningThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasBeenControlledByPlayerThisRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L114)

```csharp
ref bool HasBeenControlledByPlayerThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasCommunicationAbuseMute** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L26)

```csharp
ref bool HasCommunicationAbuseMute { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasControlledBotThisRound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L112)

```csharp
ref bool HasControlledBotThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasSeenJoinGame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L48)

```csharp
ref bool HasSeenJoinGame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InGameMoneyServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L16)

```csharp
CCSPlayerController_InGameMoneyServices? InGameMoneyServices { get; }
```

#### Property Value

- [CCSPlayerController_InGameMoneyServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_ingamemoneyservices)?

**InSwitchTeam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L46)

```csharp
ref bool InSwitchTeam { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InventoryServices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L18)

```csharp
CCSPlayerController_InventoryServices? InventoryServices { get; }
```

#### Property Value

- [CCSPlayerController_InventoryServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_inventoryservices)?

**JustBecameSpectator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L50)

```csharp
ref bool JustBecameSpectator { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**JustDidTeamKill** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L180)

```csharp
ref bool JustDidTeamKill { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**KillCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L158)

```csharp
ref byte KillCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**LastHeldVoteTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L174)

```csharp
IntervalTimer LastHeldVoteTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

**LastJoinTeamTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L56)

```csharp
GameTime_t LastJoinTeamTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**LastTeamDamageWarningTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L190)

```csharp
GameTime_t LastTeamDamageWarningTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**LastTimePlayerWasDisconnectedForPawnsRemove** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L192)

```csharp
GameTime_t LastTimePlayerWasDisconnectedForPawnsRemove { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**MVPs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L168)

```csharp
ref int MVPs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MsQueuedModeDisconnectionTimestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L90)

```csharp
ref uint MsQueuedModeDisconnectionTimestamp { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**MusicKitID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L164)

```csharp
ref int MusicKitID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MusicKitMVPs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L166)

```csharp
ref int MusicKitMVPs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MvpNoMusic** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L160)

```csharp
ref bool MvpNoMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MvpReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L162)

```csharp
ref int MvpReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**NetworkDisconnectionReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L94)

```csharp
ref uint NetworkDisconnectionReason { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**NextTimeCheck** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L178)

```csharp
ref int NextTimeCheck { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**NonSuspiciousHitStreak** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L196)

```csharp
ref uint NonSuspiciousHitStreak { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**ObserverPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L122)

```csharp
ref CHandle<CCSObserverPawn> ObserverPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSObserverPawn](/docs/api/shared/schemadefinitions/ccsobserverpawn)>

**OriginalControllerOfCurrentPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L146)

```csharp
ref CHandle<CCSPlayerController> OriginalControllerOfCurrentPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)>

**PawnArmor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L132)

```csharp
ref int PawnArmor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PawnBotDifficulty** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L144)

```csharp
ref int PawnBotDifficulty { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PawnCharacterDefIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L138)

```csharp
ref ushort PawnCharacterDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**PawnHasDefuser** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L134)

```csharp
ref bool PawnHasDefuser { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PawnHasHelmet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L136)

```csharp
ref bool PawnHasHelmet { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PawnHealth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L130)

```csharp
ref uint PawnHealth { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**PawnIsAlive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L128)

```csharp
ref bool PawnIsAlive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PawnLifetimeEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L142)

```csharp
ref int PawnLifetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PawnLifetimeStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L140)

```csharp
ref int PawnLifetimeStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PendingTeamNum** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L32)

```csharp
ref byte PendingTeamNum { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**Ping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L24)

```csharp
ref uint Ping { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**PlayerDominated** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L62)

```csharp
ref ulong PlayerDominated { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**PlayerDominatingMe** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L64)

```csharp
ref ulong PlayerDominatingMe { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**PlayerPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L120)

```csharp
ref CHandle<CCSPlayerPawn> PlayerPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

**PlayerTvControlFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L86)

```csharp
ref uint PlayerTvControlFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**PunishForTeamKill** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L182)

```csharp
ref bool PunishForTeamKill { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**QuestProgressReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L84)

```csharp
ref QuestProgress__Reason QuestProgressReason { get; }
```

#### Property Value

- [QuestProgress__Reason](/docs/api/shared/schemadefinitions/questprogress__reason)

**RecentKillQueue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L154)

```csharp
ISchemaFixedArray<byte> RecentKillQueue { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

**RemoveAllItemsOnNextRoundReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L54)

```csharp
ref bool RemoveAllItemsOnNextRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RoundScore** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L150)

```csharp
ref int RoundScore { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RoundsWon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L152)

```csharp
ref int RoundsWon { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RtActiveMissionPeriod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L82)

```csharp
ref uint RtActiveMissionPeriod { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Score** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L148)

```csharp
ref int Score { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ScoreReported** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L106)

```csharp
ref bool ScoreReported { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ShowHints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L176)

```csharp
ref bool ShowHints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SmoothedPing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L172)

```csharp
ref float SmoothedPing { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SuspiciousHitCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L194)

```csharp
ref uint SuspiciousHitCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SwitchTeamsOnNextRoundReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L52)

```csharp
ref bool SwitchTeamsOnNextRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TeamChanged** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L44)

```csharp
ref bool TeamChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TeammatePreferredColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L42)

```csharp
ref int TeammatePreferredColor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UiAbandonRecordedReason** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L92)

```csharp
ref uint UiAbandonRecordedReason { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**UiCommunicationMuteFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L28)

```csharp
ref uint UiCommunicationMuteFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**UpdateCounter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L170)

```csharp
ref int UpdateCounter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

**ActionTrackingServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L202)

```csharp
void ActionTrackingServicesUpdated()
```

**ActiveQuestIdUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L223)

```csharp
void ActiveQuestIdUpdated()
```

**CanControlObservedBotUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L230)

```csharp
void CanControlObservedBotUpdated()
```

**ClanUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L212)

```csharp
void ClanUpdated()
```

**CoachingTeamUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L213)

```csharp
void CoachingTeamUpdated()
```

**CompTeammateColorUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L210)

```csharp
void CompTeammateColorUpdated()
```

**CompetitiveRankTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L218)

```csharp
void CompetitiveRankTypeUpdated()
```

**CompetitiveRankingPredicted_LossUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L220)

```csharp
void CompetitiveRankingPredicted_LossUpdated()
```

**CompetitiveRankingPredicted_TieUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L221)

```csharp
void CompetitiveRankingPredicted_TieUpdated()
```

**CompetitiveRankingPredicted_WinUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L219)

```csharp
void CompetitiveRankingPredicted_WinUpdated()
```

**CompetitiveRankingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L216)

```csharp
void CompetitiveRankingUpdated()
```

**CompetitiveWinsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L217)

```csharp
void CompetitiveWinsUpdated()
```

**ControllingBotUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L228)

```csharp
void ControllingBotUpdated()
```

**CrosshairCodesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L207)

```csharp
void CrosshairCodesUpdated()
```

**DamageServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L203)

```csharp
void DamageServicesUpdated()
```

**DisconnectionTickUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L227)

```csharp
void DisconnectionTickUpdated()
```

**EndMatchNextMapVoteUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L222)

```csharp
void EndMatchNextMapVoteUpdated()
```

**EverPlayedOnTeamUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L211)

```csharp
void EverPlayedOnTeamUpdated()
```

**FireBulletsSeedSynchronizedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L252)

```csharp
void FireBulletsSeedSynchronizedUpdated()
```

**FirstKillUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L245)

```csharp
void FirstKillUpdated()
```

**ForceTeamTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L209)

```csharp
void ForceTeamTimeUpdated()
```

**HasCommunicationAbuseMuteUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L205)

```csharp
void HasCommunicationAbuseMuteUpdated()
```

**HasControlledBotThisRoundUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L229)

```csharp
void HasControlledBotThisRoundUpdated()
```

**InGameMoneyServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L200)

```csharp
void InGameMoneyServicesUpdated()
```

**InventoryServicesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L201)

```csharp
void InventoryServicesUpdated()
```

**KillCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L246)

```csharp
void KillCountUpdated()
```

**MVPsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L251)

```csharp
void MVPsUpdated()
```

**MusicKitIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L249)

```csharp
void MusicKitIDUpdated()
```

**MusicKitMVPsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L250)

```csharp
void MusicKitMVPsUpdated()
```

**MvpNoMusicUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L247)

```csharp
void MvpNoMusicUpdated()
```

**MvpReasonUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L248)

```csharp
void MvpReasonUpdated()
```

**ObserverPawnUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L232)

```csharp
void ObserverPawnUpdated()
```

**OriginalControllerOfCurrentPawnUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L242)

```csharp
void OriginalControllerOfCurrentPawnUpdated()
```

**PawnArmorUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L235)

```csharp
void PawnArmorUpdated()
```

**PawnBotDifficultyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L241)

```csharp
void PawnBotDifficultyUpdated()
```

**PawnCharacterDefIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L238)

```csharp
void PawnCharacterDefIndexUpdated()
```

**PawnHasDefuserUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L236)

```csharp
void PawnHasDefuserUpdated()
```

**PawnHasHelmetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L237)

```csharp
void PawnHasHelmetUpdated()
```

**PawnHealthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L234)

```csharp
void PawnHealthUpdated()
```

**PawnIsAliveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L233)

```csharp
void PawnIsAliveUpdated()
```

**PawnLifetimeEndUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L240)

```csharp
void PawnLifetimeEndUpdated()
```

**PawnLifetimeStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L239)

```csharp
void PawnLifetimeStartUpdated()
```

**PendingTeamNumUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L208)

```csharp
void PendingTeamNumUpdated()
```

**PingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L204)

```csharp
void PingUpdated()
```

**PlayerDominatedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L214)

```csharp
void PlayerDominatedUpdated()
```

**PlayerDominatingMeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L215)

```csharp
void PlayerDominatingMeUpdated()
```

**PlayerPawnUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L231)

```csharp
void PlayerPawnUpdated()
```

**PlayerTvControlFlagsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L226)

```csharp
void PlayerTvControlFlagsUpdated()
```

**QuestProgressReasonUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L225)

```csharp
void QuestProgressReasonUpdated()
```

**RecentKillQueueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L244)

```csharp
void RecentKillQueueUpdated()
```

**Respawn()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerController.cs#L8)

```csharp
void Respawn()
```

**RtActiveMissionPeriodUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L224)

```csharp
void RtActiveMissionPeriodUpdated()
```

**ScoreUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L243)

```csharp
void ScoreUpdated()
```

**UiCommunicationMuteFlagsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L206)

```csharp
void UiCommunicationMuteFlagsUpdated()
```

