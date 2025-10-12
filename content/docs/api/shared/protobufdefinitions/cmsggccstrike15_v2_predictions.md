---
title: CMsgGCCStrike15_v2_Predictions
---

```csharp
public interface CMsgGCCStrike15_v2_Predictions : ITypedProtobuf<CMsgGCCStrike15_v2_Predictions>, INativeHandle
```

- Implements

## Properties

### **EventId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Predictions.cs#L13)

```csharp
uint EventId { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **GroupMatchTeamPicks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Predictions.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_Predictions_GroupMatchTeamPick> GroupMatchTeamPicks { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCCStrike15_v2_Predictions_GroupMatchTeamPick](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_predictions_groupmatchteampick)>

