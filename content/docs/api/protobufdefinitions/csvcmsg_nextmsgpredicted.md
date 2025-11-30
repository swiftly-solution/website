---
title: CSVCMsg_NextMsgPredicted
---

# Interface CSVCMsg_NextMsgPredicted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_NextMsgPredicted.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_NextMsgPredicted : ITypedProtobuf<CSVCMsg_NextMsgPredicted>, INativeHandle, INetMessage<CSVCMsg_NextMsgPredicted>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_NextMsgPredicted>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_NextMsgPredicted>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### MessageTypeId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_NextMsgPredicted.cs#L21)

```csharp
uint MessageTypeId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PredictedByPlayerSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_NextMsgPredicted.cs#L18)

```csharp
int PredictedByPlayerSlot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

