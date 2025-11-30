---
title: CMsgGCCStrike15_v2_MatchList
---

# Interface CMsgGCCStrike15_v2_MatchList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_MatchList : ITypedProtobuf<CMsgGCCStrike15_v2_MatchList>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_MatchList>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Accountid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L16)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Matches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_MatchInfo> Matches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CDataGCCStrike15_v2_MatchInfo](/docs/api/protobufdefinitions/cdatagccstrike15_v2_matchinfo)>

### Msgrequestid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L13)

```csharp
uint Msgrequestid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Servertime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L19)

```csharp
uint Servertime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Streams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentTeam> Streams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[TournamentTeam](/docs/api/protobufdefinitions/tournamentteam)>

### Tournamentinfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchList.cs#L28)

```csharp
CDataGCCStrike15_v2_TournamentInfo Tournamentinfo { get; }
```

#### Property Value

- [CDataGCCStrike15_v2_TournamentInfo](/docs/api/protobufdefinitions/cdatagccstrike15_v2_tournamentinfo)

