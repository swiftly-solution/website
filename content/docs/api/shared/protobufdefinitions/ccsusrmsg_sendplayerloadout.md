---
title: CCSUsrMsg_SendPlayerLoadout
---

```csharp
public interface CCSUsrMsg_SendPlayerLoadout : ITypedProtobuf<CCSUsrMsg_SendPlayerLoadout>, INativeHandle, INetMessage<CCSUsrMsg_SendPlayerLoadout>, IDisposable
```

#### Implements

## Properties

### Loadout

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SendPlayerLoadout_LoadoutItem> Loadout { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_SendPlayerLoadout_LoadoutItem](/docs/api/shared/protobufdefinitions/ccsusrmsg_sendplayerloadout_loadoutitem)>

### Playerslot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout.cs#L21)

```csharp
int Playerslot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

