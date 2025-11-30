---
title: CMsgGCCStrike15_v2_MatchmakingGC2ClientHello
---

# Interface CMsgGCCStrike15_v2_MatchmakingGC2ClientHello

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingGC2ClientHello : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingGC2ClientHello>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingGC2ClientHello>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L13)

```csharp
uint AccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Activity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L55)

```csharp
AccountActivity Activity { get; }
```

#### Property Value

- [AccountActivity](/docs/api/protobufdefinitions/accountactivity)

### Commendation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L34)

```csharp
PlayerCommendationInfo Commendation { get; }
```

#### Property Value

- [PlayerCommendationInfo](/docs/api/protobufdefinitions/playercommendationinfo)

### GlobalStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L19)

```csharp
GlobalStatistics GlobalStats { get; }
```

#### Property Value

- [GlobalStatistics](/docs/api/protobufdefinitions/globalstatistics)

### Medals

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L37)

```csharp
PlayerMedalsInfo Medals { get; }
```

#### Property Value

- [PlayerMedalsInfo](/docs/api/protobufdefinitions/playermedalsinfo)

### MyCurrentEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L40)

```csharp
TournamentEvent MyCurrentEvent { get; }
```

#### Property Value

- [TournamentEvent](/docs/api/protobufdefinitions/tournamentevent)

### MyCurrentEventStages

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L49)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentEvent> MyCurrentEventStages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[TournamentEvent](/docs/api/protobufdefinitions/tournamentevent)>

### MyCurrentEventTeams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L43)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> MyCurrentEventTeams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[TournamentTeam](/docs/api/protobufdefinitions/tournamentteam)>

### MyCurrentTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L46)

```csharp
TournamentTeam MyCurrentTeam { get; }
```

#### Property Value

- [TournamentTeam](/docs/api/protobufdefinitions/tournamentteam)

### Ongoingmatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L16)

```csharp
CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve Ongoingmatch { get; }
```

#### Property Value

- [CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve](/docs/api/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2clientreserve)

### Owcaseid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L70)

```csharp
ulong Owcaseid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PenaltyReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L25)

```csharp
uint PenaltyReason { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PenaltySeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L22)

```csharp
uint PenaltySeconds { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayerCurXp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L61)

```csharp
int PlayerCurXp { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L58)

```csharp
int PlayerLevel { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerXpBonusFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L64)

```csharp
int PlayerXpBonusFlags { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Ranking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L31)

```csharp
PlayerRankingInfo Ranking { get; }
```

#### Property Value

- [PlayerRankingInfo](/docs/api/protobufdefinitions/playerrankinginfo)

### Rankings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L67)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerRankingInfo> Rankings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[PlayerRankingInfo](/docs/api/protobufdefinitions/playerrankinginfo)>

### SurveyVote

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L52)

```csharp
uint SurveyVote { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VacBanned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.cs#L28)

```csharp
int VacBanned { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

