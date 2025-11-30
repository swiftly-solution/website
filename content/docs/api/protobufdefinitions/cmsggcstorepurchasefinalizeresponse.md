---
title: CMsgGCStorePurchaseFinalizeResponse
---

# Interface CMsgGCStorePurchaseFinalizeResponse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseFinalizeResponse.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCStorePurchaseFinalizeResponse : ITypedProtobuf<CMsgGCStorePurchaseFinalizeResponse>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCStorePurchaseFinalizeResponse>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ItemIds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseFinalizeResponse.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<ulong> ItemIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### Result

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseFinalizeResponse.cs#L13)

```csharp
uint Result { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

