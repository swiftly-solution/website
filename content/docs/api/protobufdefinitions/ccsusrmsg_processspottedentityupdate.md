---
title: CCSUsrMsg_ProcessSpottedEntityUpdate
---

# Interface CCSUsrMsg_ProcessSpottedEntityUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ProcessSpottedEntityUpdate.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_ProcessSpottedEntityUpdate : ITypedProtobuf<CCSUsrMsg_ProcessSpottedEntityUpdate>, INativeHandle, INetMessage<CCSUsrMsg_ProcessSpottedEntityUpdate>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_ProcessSpottedEntityUpdate>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_ProcessSpottedEntityUpdate>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### EntityUpdates

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ProcessSpottedEntityUpdate.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_ProcessSpottedEntityUpdate_SpottedEntityUpdate> EntityUpdates { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_ProcessSpottedEntityUpdate_SpottedEntityUpdate](/docs/api/protobufdefinitions/ccsusrmsg_processspottedentityupdate_spottedentityupdate)>

### NewUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ProcessSpottedEntityUpdate.cs#L18)

```csharp
bool NewUpdate { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

