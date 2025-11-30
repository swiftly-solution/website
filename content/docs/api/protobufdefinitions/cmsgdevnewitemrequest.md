---
title: CMsgDevNewItemRequest
---

# Interface CMsgDevNewItemRequest

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgDevNewItemRequest.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgDevNewItemRequest : ITypedProtobuf<CMsgDevNewItemRequest>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgDevNewItemRequest>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Criteria

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgDevNewItemRequest.cs#L16)

```csharp
CSOItemCriteria Criteria { get; }
```

#### Property Value

- [CSOItemCriteria](/docs/api/protobufdefinitions/csoitemcriteria)

### Receiver

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgDevNewItemRequest.cs#L13)

```csharp
ulong Receiver { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

