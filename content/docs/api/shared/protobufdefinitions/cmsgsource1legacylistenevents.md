---
title: CMsgSource1LegacyListenEvents
---

```csharp
public interface CMsgSource1LegacyListenEvents : ITypedProtobuf<CMsgSource1LegacyListenEvents>, INativeHandle, INetMessage<CMsgSource1LegacyListenEvents>, IDisposable
```

#### Implements

## Properties

### **Eventarraybits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyListenEvents.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<uint> Eventarraybits { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **Playerslot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyListenEvents.cs#L18)

```csharp
int Playerslot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

