---
title: CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch
---

```csharp
public interface CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch : ITypedProtobuf<CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch>, INativeHandle
```

#### Implements

## Properties

**Events** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<DeepPlayerMatchEvent> Events { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[DeepPlayerMatchEvent](/docs/api/shared/protobufdefinitions/deepplayermatchevent)>

**Player** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch.cs#L13)

```csharp
DeepPlayerStatsEntry Player { get; }
```

#### Property Value

- [DeepPlayerStatsEntry](/docs/api/shared/protobufdefinitions/deepplayerstatsentry)

