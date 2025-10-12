---
title: CMsgGCStorePurchaseFinalizeResponse
---

```csharp
public interface CMsgGCStorePurchaseFinalizeResponse : ITypedProtobuf<CMsgGCStorePurchaseFinalizeResponse>, INativeHandle
```

#### Implements

## Properties

### ItemIds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseFinalizeResponse.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<ulong> ItemIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### Result

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseFinalizeResponse.cs#L13)

```csharp
uint Result { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

