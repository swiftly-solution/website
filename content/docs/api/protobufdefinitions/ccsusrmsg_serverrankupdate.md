---
title: CCSUsrMsg_ServerRankUpdate
---

# Interface CCSUsrMsg_ServerRankUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankUpdate.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_ServerRankUpdate : ITypedProtobuf<CCSUsrMsg_ServerRankUpdate>, INativeHandle, INetMessage<CCSUsrMsg_ServerRankUpdate>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_ServerRankUpdate>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_ServerRankUpdate>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### RankUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankUpdate.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_ServerRankUpdate_RankUpdate> RankUpdate { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_ServerRankUpdate_RankUpdate](/docs/api/protobufdefinitions/ccsusrmsg_serverrankupdate_rankupdate)>

