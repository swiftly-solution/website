---
title: CMsgGCMultiplexMessage
---

```csharp
public interface CMsgGCMultiplexMessage : ITypedProtobuf<CMsgGCMultiplexMessage>, INativeHandle
```

#### Implements

## Properties

**Msgtype** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L13)

```csharp
uint Msgtype { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Payload** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L16)

```csharp
byte[] Payload { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**Replytogc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L22)

```csharp
bool Replytogc { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Steamids** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCMultiplexMessage.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<ulong> Steamids { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

