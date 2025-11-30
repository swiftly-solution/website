---
title: CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch
---

# Interface CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch : ITypedProtobuf<CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Events

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<DeepPlayerMatchEvent> Events { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[DeepPlayerMatchEvent](/docs/api/protobufdefinitions/deepplayermatchevent)>

### Player

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch.cs#L13)

```csharp
DeepPlayerStatsEntry Player { get; }
```

#### Property Value

- [DeepPlayerStatsEntry](/docs/api/protobufdefinitions/deepplayerstatsentry)

