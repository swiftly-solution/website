---
title: CMsgClearDecalsForEntityEvent
---

# Interface CMsgClearDecalsForEntityEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgClearDecalsForEntityEvent.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgClearDecalsForEntityEvent : ITypedProtobuf<CMsgClearDecalsForEntityEvent>, INativeHandle, INetMessage<CMsgClearDecalsForEntityEvent>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgClearDecalsForEntityEvent>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgClearDecalsForEntityEvent>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Entityhandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgClearDecalsForEntityEvent.cs#L21)

```csharp
uint Entityhandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Flagstoclear

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgClearDecalsForEntityEvent.cs#L18)

```csharp
uint Flagstoclear { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

