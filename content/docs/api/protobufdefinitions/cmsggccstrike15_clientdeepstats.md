---
title: CMsgGCCStrike15_ClientDeepStats
---

# Interface CMsgGCCStrike15_ClientDeepStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_ClientDeepStats : ITypedProtobuf<CMsgGCCStrike15_ClientDeepStats>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_ClientDeepStats>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L13)

```csharp
uint AccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Matches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch> Matches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch](/docs/api/protobufdefinitions/cmsggccstrike15_clientdeepstats_deepstatsmatch)>

### Range

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L16)

```csharp
CMsgGCCStrike15_ClientDeepStats_DeepStatsRange Range { get; }
```

#### Property Value

- [CMsgGCCStrike15_ClientDeepStats_DeepStatsRange](/docs/api/protobufdefinitions/cmsggccstrike15_clientdeepstats_deepstatsrange)

