---
title: CMsgGCCStrike15_v2_MatchmakingGC2ClientHello
---

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingGC2ClientHello : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingGC2ClientHello>, INativeHandle
```

#### Implements

## Properties

### AccountId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L13)

```csharp
uint AccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Activity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L55)

```csharp
AccountActivity Activity { get; }
```

#### Property Value

- [AccountActivity](/docs/api/shared/protobufdefinitions/accountactivity)

### Commendation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L34)

```csharp
PlayerCommendationInfo Commendation { get; }
```

#### Property Value

- [PlayerCommendationInfo](/docs/api/shared/protobufdefinitions/playercommendationinfo)

### GlobalStats

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L19)

```csharp
GlobalStatistics GlobalStats { get; }
```

#### Property Value

- [GlobalStatistics](/docs/api/shared/protobufdefinitions/globalstatistics)

### Medals

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L37)

```csharp
PlayerMedalsInfo Medals { get; }
```

#### Property Value

- [PlayerMedalsInfo](/docs/api/shared/protobufdefinitions/playermedalsinfo)

### MyCurrentEvent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L40)

```csharp
TournamentEvent MyCurrentEvent { get; }
```

#### Property Value

- [TournamentEvent](/docs/api/shared/protobufdefinitions/tournamentevent)

### MyCurrentEventStages

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L49)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentEvent> MyCurrentEventStages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[TournamentEvent](/docs/api/shared/protobufdefinitions/tournamentevent)>

### MyCurrentEventTeams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L43)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> MyCurrentEventTeams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[TournamentTeam](/docs/api/shared/protobufdefinitions/tournamentteam)>

### MyCurrentTeam

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L46)

```csharp
TournamentTeam MyCurrentTeam { get; }
```

#### Property Value

- [TournamentTeam](/docs/api/shared/protobufdefinitions/tournamentteam)

### Ongoingmatch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L16)

```csharp
CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve Ongoingmatch { get; }
```

#### Property Value

- [CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2clientreserve)

### Owcaseid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L70)

```csharp
ulong Owcaseid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PenaltyReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L25)

```csharp
uint PenaltyReason { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PenaltySeconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L22)

```csharp
uint PenaltySeconds { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayerCurXp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L61)

```csharp
int PlayerCurXp { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L58)

```csharp
int PlayerLevel { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerXpBonusFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L64)

```csharp
int PlayerXpBonusFlags { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Ranking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L31)

```csharp
PlayerRankingInfo Ranking { get; }
```

#### Property Value

- [PlayerRankingInfo](/docs/api/shared/protobufdefinitions/playerrankinginfo)

### Rankings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L67)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerRankingInfo> Rankings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[PlayerRankingInfo](/docs/api/shared/protobufdefinitions/playerrankinginfo)>

### SurveyVote

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L52)

```csharp
uint SurveyVote { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VacBanned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L28)

```csharp
int VacBanned { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

