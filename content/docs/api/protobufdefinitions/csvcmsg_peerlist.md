---
title: CSVCMsg_PeerList
---

# Interface CSVCMsg_PeerList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PeerList.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_PeerList : ITypedProtobuf<CSVCMsg_PeerList>, INativeHandle, INetMessage<CSVCMsg_PeerList>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_PeerList>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_PeerList>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Peer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PeerList.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgServerPeer> Peer { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgServerPeer](/docs/api/protobufdefinitions/cmsgserverpeer)>

