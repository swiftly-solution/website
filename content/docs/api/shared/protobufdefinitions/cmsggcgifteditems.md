---
title: CMsgGCGiftedItems
---

```csharp
public interface CMsgGCGiftedItems : ITypedProtobuf<CMsgGCGiftedItems>, INativeHandle
```

#### Implements

## Properties

### Accountid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCGiftedItems.cs#L13)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Giftdefindex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCGiftedItems.cs#L16)

```csharp
uint Giftdefindex { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MaxGiftsPossible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCGiftedItems.cs#L19)

```csharp
uint MaxGiftsPossible { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumEligibleRecipients

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCGiftedItems.cs#L22)

```csharp
uint NumEligibleRecipients { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RecipientsAccountids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCGiftedItems.cs#L25)

```csharp
IProtobufRepeatedFieldValueType<uint> RecipientsAccountids { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

