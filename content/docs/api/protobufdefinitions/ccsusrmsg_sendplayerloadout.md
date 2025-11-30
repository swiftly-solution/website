---
title: CCSUsrMsg_SendPlayerLoadout
---

# Interface CCSUsrMsg_SendPlayerLoadout

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_SendPlayerLoadout : ITypedProtobuf<CCSUsrMsg_SendPlayerLoadout>, INativeHandle, INetMessage<CCSUsrMsg_SendPlayerLoadout>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_SendPlayerLoadout>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_SendPlayerLoadout>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Loadout

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SendPlayerLoadout_LoadoutItem> Loadout { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_SendPlayerLoadout_LoadoutItem](/docs/api/protobufdefinitions/ccsusrmsg_sendplayerloadout_loadoutitem)>

### Playerslot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout.cs#L21)

```csharp
int Playerslot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

