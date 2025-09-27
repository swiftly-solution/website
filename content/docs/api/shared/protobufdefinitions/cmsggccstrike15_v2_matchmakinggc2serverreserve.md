---
title: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve
---

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve>, INativeHandle
```

#### Implements

## Properties

**AccountIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L13)

```csharp
IProtobufRepeatedFieldValueType<uint> AccountIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**EncryptionKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L31)

```csharp
ulong EncryptionKey { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**EncryptionKeyPub** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L34)

```csharp
ulong EncryptionKeyPub { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L25)

```csharp
uint Flags { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**GameType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L16)

```csharp
uint GameType { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**MatchId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L19)

```csharp
ulong MatchId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**MatchIdAdditional** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L73)

```csharp
uint MatchIdAdditional { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**OpVarValues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L64)

```csharp
IProtobufRepeatedFieldSubMessageType<OperationalVarValue> OpVarValues { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[OperationalVarValue](/docs/api/shared/protobufdefinitions/operationalvarvalue)>

**PartyIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L37)

```csharp
IProtobufRepeatedFieldValueType<uint> PartyIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**PreMatchData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L58)

```csharp
CPreMatchInfoData PreMatchData { get; }
```

#### Property Value

- [CPreMatchInfoData](/docs/api/shared/protobufdefinitions/cprematchinfodata)

**Rankings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerRankingInfo> Rankings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[PlayerRankingInfo](/docs/api/shared/protobufdefinitions/playerrankinginfo)>

**ServerVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L22)

```csharp
uint ServerVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SocacheControl** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L67)

```csharp
uint SocacheControl { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**TeammateColors** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L70)

```csharp
IProtobufRepeatedFieldValueType<int> TeammateColors { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**TournamentCastersAccountIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L52)

```csharp
IProtobufRepeatedFieldValueType<uint> TournamentCastersAccountIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**TournamentEvent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L46)

```csharp
TournamentEvent TournamentEvent { get; }
```

#### Property Value

- [TournamentEvent](/docs/api/shared/protobufdefinitions/tournamentevent)

**TournamentTeams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L49)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> TournamentTeams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[TournamentTeam](/docs/api/shared/protobufdefinitions/tournamentteam)>

**TvControl** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L61)

```csharp
uint TvControl { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**TvMasterSteamid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L43)

```csharp
ulong TvMasterSteamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**TvRelaySteamid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L55)

```csharp
ulong TvRelaySteamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**Whitelist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.cs#L40)

```csharp
IProtobufRepeatedFieldSubMessageType<IpAddressMask> Whitelist { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[IpAddressMask](/docs/api/shared/protobufdefinitions/ipaddressmask)>

