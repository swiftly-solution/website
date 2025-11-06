---
title: CSVCMsg_NextMsgPredicted
---

```csharp
public interface CSVCMsg_NextMsgPredicted : ITypedProtobuf<CSVCMsg_NextMsgPredicted>, INativeHandle, INetMessage<CSVCMsg_NextMsgPredicted>, IDisposable
```

#### Implements

## Properties

### MessageTypeId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_NextMsgPredicted.cs#L21)

```csharp
uint MessageTypeId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PredictedByPlayerSlot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_NextMsgPredicted.cs#L18)

```csharp
int PredictedByPlayerSlot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

