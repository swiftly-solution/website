---
title: CMsgVDebugGameSessionIDEvent
---

# Interface CMsgVDebugGameSessionIDEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVDebugGameSessionIDEvent.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgVDebugGameSessionIDEvent : ITypedProtobuf<CMsgVDebugGameSessionIDEvent>, INativeHandle, INetMessage<CMsgVDebugGameSessionIDEvent>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgVDebugGameSessionIDEvent>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgVDebugGameSessionIDEvent>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Clientid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVDebugGameSessionIDEvent.cs#L18)

```csharp
int Clientid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Gamesessionid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVDebugGameSessionIDEvent.cs#L21)

```csharp
string Gamesessionid { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

