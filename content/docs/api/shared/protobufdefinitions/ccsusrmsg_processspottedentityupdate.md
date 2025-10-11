---
title: CCSUsrMsg_ProcessSpottedEntityUpdate
---

```csharp
public interface CCSUsrMsg_ProcessSpottedEntityUpdate : ITypedProtobuf<CCSUsrMsg_ProcessSpottedEntityUpdate>, INativeHandle, INetMessage<CCSUsrMsg_ProcessSpottedEntityUpdate>, IDisposable
```

#### Implements

## Properties

### **EntityUpdates** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ProcessSpottedEntityUpdate.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_ProcessSpottedEntityUpdate_SpottedEntityUpdate> EntityUpdates { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_ProcessSpottedEntityUpdate_SpottedEntityUpdate](/docs/api/shared/protobufdefinitions/ccsusrmsg_processspottedentityupdate_spottedentityupdate)>

### **NewUpdate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ProcessSpottedEntityUpdate.cs#L18)

```csharp
bool NewUpdate { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

