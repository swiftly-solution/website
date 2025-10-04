---
title: CMsgGCStorePurchaseInitResponse
---

```csharp
public interface CMsgGCStorePurchaseInitResponse : ITypedProtobuf<CMsgGCStorePurchaseInitResponse>, INativeHandle
```

#### Implements

## Properties

**ItemIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<ulong> ItemIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

**Result** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L13)

```csharp
int Result { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TxnId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L16)

```csharp
ulong TxnId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**Url** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInitResponse.cs#L19)

```csharp
string Url { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

