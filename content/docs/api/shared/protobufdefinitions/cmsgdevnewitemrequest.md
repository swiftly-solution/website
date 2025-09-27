---
title: CMsgDevNewItemRequest
---

```csharp
public interface CMsgDevNewItemRequest : ITypedProtobuf<CMsgDevNewItemRequest>, INativeHandle
```

#### Implements

## Properties

**Criteria** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgDevNewItemRequest.cs#L16)

```csharp
CSOItemCriteria Criteria { get; }
```

#### Property Value

- [CSOItemCriteria](/docs/api/shared/protobufdefinitions/csoitemcriteria)

**Receiver** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgDevNewItemRequest.cs#L13)

```csharp
ulong Receiver { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

