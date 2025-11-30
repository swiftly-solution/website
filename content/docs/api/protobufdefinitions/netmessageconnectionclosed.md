---
title: NetMessageConnectionClosed
---

# Interface NetMessageConnectionClosed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/NetMessageConnectionClosed.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface NetMessageConnectionClosed : ITypedProtobuf<NetMessageConnectionClosed>, INativeHandle
```

#### Implements

- [ITypedProtobuf<NetMessageConnectionClosed>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Message

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/NetMessageConnectionClosed.cs#L16)

```csharp
string Message { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Reason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/NetMessageConnectionClosed.cs#L13)

```csharp
uint Reason { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

