---
title: CSVCMsg_UserMessage
---

```csharp
public interface CSVCMsg_UserMessage : ITypedProtobuf<CSVCMsg_UserMessage>, INativeHandle, INetMessage<CSVCMsg_UserMessage>, IDisposable
```

#### Implements

## Properties

**MsgData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UserMessage.cs#L21)

```csharp
byte[] MsgData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**MsgType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UserMessage.cs#L18)

```csharp
int MsgType { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Passthrough** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_UserMessage.cs#L24)

```csharp
int Passthrough { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

