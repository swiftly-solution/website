---
title: CMsgSource1LegacyListenEvents
---

# Interface CMsgSource1LegacyListenEvents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyListenEvents.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSource1LegacyListenEvents : ITypedProtobuf<CMsgSource1LegacyListenEvents>, INativeHandle, INetMessage<CMsgSource1LegacyListenEvents>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgSource1LegacyListenEvents>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgSource1LegacyListenEvents>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Eventarraybits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyListenEvents.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<uint> Eventarraybits { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Playerslot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource1LegacyListenEvents.cs#L18)

```csharp
int Playerslot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

