---
title: CCSUsrMsg_SendPlayerItemDrops
---

```csharp
public interface CCSUsrMsg_SendPlayerItemDrops : ITypedProtobuf<CCSUsrMsg_SendPlayerItemDrops>, INativeHandle, INetMessage<CCSUsrMsg_SendPlayerItemDrops>, IDisposable
```

#### Implements

## Properties

### EntityUpdates

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerItemDrops.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CEconItemPreviewDataBlock> EntityUpdates { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CEconItemPreviewDataBlock](/docs/api/shared/protobufdefinitions/ceconitempreviewdatablock)>

