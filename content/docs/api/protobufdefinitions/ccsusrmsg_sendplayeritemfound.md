---
title: CCSUsrMsg_SendPlayerItemFound
---

# Interface CCSUsrMsg_SendPlayerItemFound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerItemFound.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_SendPlayerItemFound : ITypedProtobuf<CCSUsrMsg_SendPlayerItemFound>, INativeHandle, INetMessage<CCSUsrMsg_SendPlayerItemFound>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_SendPlayerItemFound>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_SendPlayerItemFound>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Iteminfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerItemFound.cs#L18)

```csharp
CEconItemPreviewDataBlock Iteminfo { get; }
```

#### Property Value

- [CEconItemPreviewDataBlock](/docs/api/protobufdefinitions/ceconitempreviewdatablock)

### Playerslot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerItemFound.cs#L21)

```csharp
int Playerslot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

