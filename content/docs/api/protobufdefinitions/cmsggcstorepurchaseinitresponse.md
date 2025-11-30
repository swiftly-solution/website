---
title: CMsgGCStorePurchaseInitResponse
---

# Interface CMsgGCStorePurchaseInitResponse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCStorePurchaseInitResponse : ITypedProtobuf<CMsgGCStorePurchaseInitResponse>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCStorePurchaseInitResponse>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ItemIds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<ulong> ItemIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### Result

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L13)

```csharp
int Result { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TxnId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L16)

```csharp
ulong TxnId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Url

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L19)

```csharp
string Url { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

