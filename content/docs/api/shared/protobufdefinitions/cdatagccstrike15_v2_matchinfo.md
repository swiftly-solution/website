---
title: CDataGCCStrike15_v2_MatchInfo
---

```csharp
public interface CDataGCCStrike15_v2_MatchInfo : ITypedProtobuf<CDataGCCStrike15_v2_MatchInfo>, INativeHandle
```

#### Implements

## Properties

### Matchid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L13)

```csharp
ulong Matchid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Matchtime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L16)

```csharp
uint Matchtime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RoundstatsLegacy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L22)

```csharp
CMsgGCCStrike15_v2_MatchmakingServerRoundStats RoundstatsLegacy { get; }
```

#### Property Value

- [CMsgGCCStrike15_v2_MatchmakingServerRoundStats](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakingserverroundstats)

### Roundstatsall

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_MatchmakingServerRoundStats> Roundstatsall { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCCStrike15_v2_MatchmakingServerRoundStats](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakingserverroundstats)>

### Watchablematchinfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_MatchInfo.cs#L19)

```csharp
WatchableMatchInfo Watchablematchinfo { get; }
```

#### Property Value

- [WatchableMatchInfo](/docs/api/shared/protobufdefinitions/watchablematchinfo)

