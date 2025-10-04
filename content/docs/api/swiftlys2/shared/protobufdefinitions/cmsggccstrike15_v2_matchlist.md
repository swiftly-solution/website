---
title: CMsgGCCStrike15_v2_MatchList
---

```csharp
public interface CMsgGCCStrike15_v2_MatchList : ITypedProtobuf<CMsgGCCStrike15_v2_MatchList>, INativeHandle
```

#### Implements

## Properties

**Accountid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L16)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Matches** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_MatchInfo> Matches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDataGCCStrike15_v2_MatchInfo](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_matchinfo)>

**Msgrequestid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L13)

```csharp
uint Msgrequestid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Servertime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L19)

```csharp
uint Servertime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Streams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> Streams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[TournamentTeam](/docs/api/shared/protobufdefinitions/tournamentteam)>

**Tournamentinfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L28)

```csharp
CDataGCCStrike15_v2_TournamentInfo Tournamentinfo { get; }
```

#### Property Value

- [CDataGCCStrike15_v2_TournamentInfo](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_tournamentinfo)

