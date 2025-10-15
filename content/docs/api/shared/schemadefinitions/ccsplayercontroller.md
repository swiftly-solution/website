---
title: CCSPlayerController
---

```csharp
public interface CCSPlayerController : CBasePlayerController, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBasePlayerController>, ISchemaClass<CCSPlayerController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AbandonAllowsSurrender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L101)

```csharp
ref bool AbandonAllowsSurrender { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AbandonOffersInstantSurrender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L103)

```csharp
ref bool AbandonOffersInstantSurrender { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ActionTrackingServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L21)

```csharp
CCSPlayerController_ActionTrackingServices? ActionTrackingServices { get; }
```

#### Property Value

- [CCSPlayerController_ActionTrackingServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_actiontrackingservices)?

### ActiveQuestId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L81)

```csharp
ref ushort ActiveQuestId { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### AttemptedToGetColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L41)

```csharp
ref bool AttemptedToGetColor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BotsControlledThisRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L117)

```csharp
ref int BotsControlledThisRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CanControlObservedBot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L119)

```csharp
ref bool CanControlObservedBot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CannotBeKicked

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L97)

```csharp
ref bool CannotBeKicked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Clan

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L59)

```csharp
string Clan { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CoachingTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L61)

```csharp
ref int CoachingTeam { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompTeammateColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L37)

```csharp
ref int CompTeammateColor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L71)

```csharp
ref byte CompetitiveRankType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### CompetitiveRanking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L67)

```csharp
ref int CompetitiveRanking { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankingPredicted_Loss

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L75)

```csharp
ref int CompetitiveRankingPredicted_Loss { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankingPredicted_Tie

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L77)

```csharp
ref int CompetitiveRankingPredicted_Tie { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveRankingPredicted_Win

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L73)

```csharp
ref int CompetitiveRankingPredicted_Win { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompetitiveWins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L69)

```csharp
ref int CompetitiveWins { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ControllingBot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L111)

```csharp
ref bool ControllingBot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CrosshairCodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L31)

```csharp
string CrosshairCodes { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DamageServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L23)

```csharp
CCSPlayerController_DamageServices? DamageServices { get; }
```

#### Property Value

- [CCSPlayerController_DamageServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_damageservices)?

### DblLastReceivedPacketPlatFloatTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L189)

```csharp
ref double DblLastReceivedPacketPlatFloatTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### DesiredObserverMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L125)

```csharp
ref int DesiredObserverMode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DesiredObserverTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L127)

```csharp
ref CHandle<CEntityInstance> DesiredObserverTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### Disconnection1MinWarningPrinted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L105)

```csharp
ref bool Disconnection1MinWarningPrinted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisconnectionTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L109)

```csharp
ref int DisconnectionTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DraftIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L89)

```csharp
ref int DraftIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndMatchNextMapVote

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L79)

```csharp
ref int EndMatchNextMapVote { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EverFullyConnected

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L99)

```csharp
ref bool EverFullyConnected { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EverPlayedOnTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L39)

```csharp
ref bool EverPlayedOnTeam { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FireBulletsSeedSynchronized

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L199)

```csharp
ref bool FireBulletsSeedSynchronized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstKill

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L157)

```csharp
ref byte FirstKill { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ForceTeamTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L35)

```csharp
GameTime_t ForceTeamTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### GaveTeamDamageWarning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L185)

```csharp
ref bool GaveTeamDamageWarning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GaveTeamDamageWarningThisRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L187)

```csharp
ref bool GaveTeamDamageWarningThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBeenControlledByPlayerThisRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L115)

```csharp
ref bool HasBeenControlledByPlayerThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasCommunicationAbuseMute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L27)

```csharp
ref bool HasCommunicationAbuseMute { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasControlledBotThisRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L113)

```csharp
ref bool HasControlledBotThisRound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasSeenJoinGame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L49)

```csharp
ref bool HasSeenJoinGame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InGameMoneyServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L17)

```csharp
CCSPlayerController_InGameMoneyServices? InGameMoneyServices { get; }
```

#### Property Value

- [CCSPlayerController_InGameMoneyServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_ingamemoneyservices)?

### InSwitchTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L47)

```csharp
ref bool InSwitchTeam { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InventoryServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L19)

```csharp
CCSPlayerController_InventoryServices? InventoryServices { get; }
```

#### Property Value

- [CCSPlayerController_InventoryServices](/docs/api/shared/schemadefinitions/ccsplayercontroller_inventoryservices)?

### JustBecameSpectator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L51)

```csharp
ref bool JustBecameSpectator { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JustDidTeamKill

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L181)

```csharp
ref bool JustDidTeamKill { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KillCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L159)

```csharp
ref byte KillCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LastHeldVoteTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L175)

```csharp
IntervalTimer LastHeldVoteTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### LastJoinTeamTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L57)

```csharp
GameTime_t LastJoinTeamTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastTeamDamageWarningTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L191)

```csharp
GameTime_t LastTeamDamageWarningTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastTimePlayerWasDisconnectedForPawnsRemove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L193)

```csharp
GameTime_t LastTimePlayerWasDisconnectedForPawnsRemove { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### MVPs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L169)

```csharp
ref int MVPs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MsQueuedModeDisconnectionTimestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L91)

```csharp
ref uint MsQueuedModeDisconnectionTimestamp { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MusicKitID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L165)

```csharp
ref int MusicKitID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MusicKitMVPs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L167)

```csharp
ref int MusicKitMVPs { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MvpNoMusic

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L161)

```csharp
ref bool MvpNoMusic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MvpReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L163)

```csharp
ref int MvpReason { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NetworkDisconnectionReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L95)

```csharp
ref uint NetworkDisconnectionReason { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NextTimeCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L179)

```csharp
ref int NextTimeCheck { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NonSuspiciousHitStreak

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L197)

```csharp
ref uint NonSuspiciousHitStreak { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ObserverPawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L123)

```csharp
ref CHandle<CCSObserverPawn> ObserverPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSObserverPawn](/docs/api/shared/schemadefinitions/ccsobserverpawn)>

### OriginalControllerOfCurrentPawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L147)

```csharp
ref CHandle<CCSPlayerController> OriginalControllerOfCurrentPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)>

### PawnArmor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L133)

```csharp
ref int PawnArmor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PawnBotDifficulty

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L145)

```csharp
ref int PawnBotDifficulty { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PawnCharacterDefIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L139)

```csharp
ref ushort PawnCharacterDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### PawnHasDefuser

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L135)

```csharp
ref bool PawnHasDefuser { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PawnHasHelmet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L137)

```csharp
ref bool PawnHasHelmet { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PawnHealth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L131)

```csharp
ref uint PawnHealth { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PawnIsAlive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L129)

```csharp
ref bool PawnIsAlive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PawnLifetimeEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L143)

```csharp
ref int PawnLifetimeEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PawnLifetimeStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L141)

```csharp
ref int PawnLifetimeStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PendingTeamNum

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L33)

```csharp
ref byte PendingTeamNum { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Ping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L25)

```csharp
ref uint Ping { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayerDominated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L63)

```csharp
ref ulong PlayerDominated { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PlayerDominatingMe

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L65)

```csharp
ref ulong PlayerDominatingMe { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PlayerPawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L121)

```csharp
ref CHandle<CCSPlayerPawn> PlayerPawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### PlayerTvControlFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L87)

```csharp
ref uint PlayerTvControlFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PunishForTeamKill

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L183)

```csharp
ref bool PunishForTeamKill { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### QuestProgressReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L85)

```csharp
ref QuestProgress__Reason QuestProgressReason { get; }
```

#### Property Value

- [QuestProgress__Reason](/docs/api/shared/schemadefinitions/questprogress__reason)

### RecentKillQueue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L155)

```csharp
ISchemaFixedArray<byte> RecentKillQueue { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### RemoveAllItemsOnNextRoundReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L55)

```csharp
ref bool RemoveAllItemsOnNextRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RoundScore

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L151)

```csharp
ref int RoundScore { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundsWon

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L153)

```csharp
ref int RoundsWon { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RtActiveMissionPeriod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L83)

```csharp
ref uint RtActiveMissionPeriod { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Score

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L149)

```csharp
ref int Score { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScoreReported

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L107)

```csharp
ref bool ScoreReported { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowHints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L177)

```csharp
ref bool ShowHints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SmoothedPing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L173)

```csharp
ref float SmoothedPing { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SuspiciousHitCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L195)

```csharp
ref uint SuspiciousHitCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SwitchTeamsOnNextRoundReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L53)

```csharp
ref bool SwitchTeamsOnNextRoundReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeamChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L45)

```csharp
ref bool TeamChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeammatePreferredColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L43)

```csharp
ref int TeammatePreferredColor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UiAbandonRecordedReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L93)

```csharp
ref uint UiAbandonRecordedReason { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### UiCommunicationMuteFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L29)

```csharp
ref uint UiCommunicationMuteFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### UpdateCounter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L171)

```csharp
ref int UpdateCounter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ActionTrackingServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L203)

```csharp
void ActionTrackingServicesUpdated()
```

### ActiveQuestIdUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L224)

```csharp
void ActiveQuestIdUpdated()
```

### CanControlObservedBotUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L231)

```csharp
void CanControlObservedBotUpdated()
```

### ClanUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L213)

```csharp
void ClanUpdated()
```

### CoachingTeamUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L214)

```csharp
void CoachingTeamUpdated()
```

### CompTeammateColorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L211)

```csharp
void CompTeammateColorUpdated()
```

### CompetitiveRankTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L219)

```csharp
void CompetitiveRankTypeUpdated()
```

### CompetitiveRankingPredicted_LossUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L221)

```csharp
void CompetitiveRankingPredicted_LossUpdated()
```

### CompetitiveRankingPredicted_TieUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L222)

```csharp
void CompetitiveRankingPredicted_TieUpdated()
```

### CompetitiveRankingPredicted_WinUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L220)

```csharp
void CompetitiveRankingPredicted_WinUpdated()
```

### CompetitiveRankingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L217)

```csharp
void CompetitiveRankingUpdated()
```

### CompetitiveWinsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L218)

```csharp
void CompetitiveWinsUpdated()
```

### ControllingBotUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L229)

```csharp
void ControllingBotUpdated()
```

### CrosshairCodesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L208)

```csharp
void CrosshairCodesUpdated()
```

### DamageServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L204)

```csharp
void DamageServicesUpdated()
```

### DisconnectionTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L228)

```csharp
void DisconnectionTickUpdated()
```

### EndMatchNextMapVoteUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L223)

```csharp
void EndMatchNextMapVoteUpdated()
```

### EverPlayedOnTeamUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L212)

```csharp
void EverPlayedOnTeamUpdated()
```

### FireBulletsSeedSynchronizedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L253)

```csharp
void FireBulletsSeedSynchronizedUpdated()
```

### FirstKillUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L246)

```csharp
void FirstKillUpdated()
```

### ForceTeamTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L210)

```csharp
void ForceTeamTimeUpdated()
```

### HasCommunicationAbuseMuteUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L206)

```csharp
void HasCommunicationAbuseMuteUpdated()
```

### HasControlledBotThisRoundUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L230)

```csharp
void HasControlledBotThisRoundUpdated()
```

### InGameMoneyServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L201)

```csharp
void InGameMoneyServicesUpdated()
```

### InventoryServicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L202)

```csharp
void InventoryServicesUpdated()
```

### KillCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L247)

```csharp
void KillCountUpdated()
```

### MVPsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L252)

```csharp
void MVPsUpdated()
```

### MusicKitIDUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L250)

```csharp
void MusicKitIDUpdated()
```

### MusicKitMVPsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L251)

```csharp
void MusicKitMVPsUpdated()
```

### MvpNoMusicUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L248)

```csharp
void MvpNoMusicUpdated()
```

### MvpReasonUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L249)

```csharp
void MvpReasonUpdated()
```

### ObserverPawnUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L233)

```csharp
void ObserverPawnUpdated()
```

### OriginalControllerOfCurrentPawnUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L243)

```csharp
void OriginalControllerOfCurrentPawnUpdated()
```

### PawnArmorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L236)

```csharp
void PawnArmorUpdated()
```

### PawnBotDifficultyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L242)

```csharp
void PawnBotDifficultyUpdated()
```

### PawnCharacterDefIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L239)

```csharp
void PawnCharacterDefIndexUpdated()
```

### PawnHasDefuserUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L237)

```csharp
void PawnHasDefuserUpdated()
```

### PawnHasHelmetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L238)

```csharp
void PawnHasHelmetUpdated()
```

### PawnHealthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L235)

```csharp
void PawnHealthUpdated()
```

### PawnIsAliveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L234)

```csharp
void PawnIsAliveUpdated()
```

### PawnLifetimeEndUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L241)

```csharp
void PawnLifetimeEndUpdated()
```

### PawnLifetimeStartUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L240)

```csharp
void PawnLifetimeStartUpdated()
```

### PendingTeamNumUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L209)

```csharp
void PendingTeamNumUpdated()
```

### PingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L205)

```csharp
void PingUpdated()
```

### PlayerDominatedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L215)

```csharp
void PlayerDominatedUpdated()
```

### PlayerDominatingMeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L216)

```csharp
void PlayerDominatingMeUpdated()
```

### PlayerPawnUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L232)

```csharp
void PlayerPawnUpdated()
```

### PlayerTvControlFlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L227)

```csharp
void PlayerTvControlFlagsUpdated()
```

### QuestProgressReasonUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L226)

```csharp
void QuestProgressReasonUpdated()
```

### RecentKillQueueUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L245)

```csharp
void RecentKillQueueUpdated()
```

### Respawn()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CCSPlayerController.cs#L8)

```csharp
void Respawn()
```

### RtActiveMissionPeriodUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L225)

```csharp
void RtActiveMissionPeriodUpdated()
```

### ScoreUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L244)

```csharp
void ScoreUpdated()
```

### UiCommunicationMuteFlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController.cs#L207)

```csharp
void UiCommunicationMuteFlagsUpdated()
```

