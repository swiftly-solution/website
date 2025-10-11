---
title: CMsgGCItemCustomizationNotification
---

```csharp
public interface CMsgGCItemCustomizationNotification : ITypedProtobuf<CMsgGCItemCustomizationNotification>, INativeHandle
```

#### Implements

## Properties

### **ExtraData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCItemCustomizationNotification.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<ulong> ExtraData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### **ItemId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCItemCustomizationNotification.cs#L13)

```csharp
IProtobufRepeatedFieldValueType<ulong> ItemId { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### **Request** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCItemCustomizationNotification.cs#L16)

```csharp
uint Request { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

