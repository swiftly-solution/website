---
title: CMsgGCCStrike15_v2_Predictions
---

# Interface CMsgGCCStrike15_v2_Predictions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Predictions.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_Predictions : ITypedProtobuf<CMsgGCCStrike15_v2_Predictions>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_Predictions>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EventId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Predictions.cs#L13)

```csharp
uint EventId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GroupMatchTeamPicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Predictions.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_Predictions_GroupMatchTeamPick> GroupMatchTeamPicks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_Predictions_GroupMatchTeamPick](/docs/api/protobufdefinitions/cmsggccstrike15_v2_predictions_groupmatchteampick)>

