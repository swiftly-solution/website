---
title: CMsgSOCacheSubscribed
---

```csharp
public interface CMsgSOCacheSubscribed : ITypedProtobuf<CMsgSOCacheSubscribed>, INativeHandle
```

- Implements

## Properties

### **Objects** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheSubscribed_SubscribedType> Objects { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSOCacheSubscribed_SubscribedType](/docs/api/shared/protobufdefinitions/cmsgsocachesubscribed_subscribedtype)>

### **OwnerSoid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L19)

```csharp
CMsgSOIDOwner OwnerSoid { get; }
```

- Property Value

- [CMsgSOIDOwner](/docs/api/shared/protobufdefinitions/cmsgsoidowner)

### **Version** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L16)

```csharp
ulong Version { get; set; }
```

- Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

