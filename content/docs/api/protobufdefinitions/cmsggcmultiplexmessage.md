---
title: CMsgGCMultiplexMessage
---

# Interface CMsgGCMultiplexMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCMultiplexMessage : ITypedProtobuf<CMsgGCMultiplexMessage>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCMultiplexMessage>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Msgtype

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L13)

```csharp
uint Msgtype { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Payload

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L16)

```csharp
byte[] Payload { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Replytogc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L22)

```csharp
bool Replytogc { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Steamids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<ulong> Steamids { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

