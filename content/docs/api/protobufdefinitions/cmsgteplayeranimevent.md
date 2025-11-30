---
title: CMsgTEPlayerAnimEvent
---

# Interface CMsgTEPlayerAnimEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEPlayerAnimEvent.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTEPlayerAnimEvent : ITypedProtobuf<CMsgTEPlayerAnimEvent>, INativeHandle, INetMessage<CMsgTEPlayerAnimEvent>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTEPlayerAnimEvent>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTEPlayerAnimEvent>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Data

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEPlayerAnimEvent.cs#L24)

```csharp
int Data { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Event

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEPlayerAnimEvent.cs#L21)

```csharp
uint Event { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Player

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEPlayerAnimEvent.cs#L18)

```csharp
uint Player { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

