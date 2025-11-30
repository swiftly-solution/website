---
title: CDataGCCStrike15_v2_MatchInfo
---

# Interface CDataGCCStrike15_v2_MatchInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDataGCCStrike15_v2_MatchInfo : ITypedProtobuf<CDataGCCStrike15_v2_MatchInfo>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CDataGCCStrike15_v2_MatchInfo>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Matchid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L13)

```csharp
ulong Matchid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Matchtime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L16)

```csharp
uint Matchtime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RoundstatsLegacy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L22)

```csharp
CMsgGCCStrike15_v2_MatchmakingServerRoundStats RoundstatsLegacy { get; }
```

#### Property Value

- [CMsgGCCStrike15_v2_MatchmakingServerRoundStats](/docs/api/protobufdefinitions/cmsggccstrike15_v2_matchmakingserverroundstats)

### Roundstatsall

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_MatchmakingServerRoundStats> Roundstatsall { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_MatchmakingServerRoundStats](/docs/api/protobufdefinitions/cmsggccstrike15_v2_matchmakingserverroundstats)>

### Watchablematchinfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L19)

```csharp
WatchableMatchInfo Watchablematchinfo { get; }
```

#### Property Value

- [WatchableMatchInfo](/docs/api/protobufdefinitions/watchablematchinfo)

