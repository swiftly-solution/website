---
title: CSVCMsg_PeerList
---

```csharp
public interface CSVCMsg_PeerList : ITypedProtobuf<CSVCMsg_PeerList>, INativeHandle, INetMessage<CSVCMsg_PeerList>, IDisposable
```

#### Implements

## Properties

### **Peer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PeerList.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgServerPeer> Peer { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgServerPeer](/docs/api/shared/protobufdefinitions/cmsgserverpeer)>

