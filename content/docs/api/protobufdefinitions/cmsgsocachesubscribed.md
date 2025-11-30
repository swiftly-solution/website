---
title: CMsgSOCacheSubscribed
---

# Interface CMsgSOCacheSubscribed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSOCacheSubscribed : ITypedProtobuf<CMsgSOCacheSubscribed>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSOCacheSubscribed>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Objects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheSubscribed_SubscribedType> Objects { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSOCacheSubscribed_SubscribedType](/docs/api/protobufdefinitions/cmsgsocachesubscribed_subscribedtype)>

### OwnerSoid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L19)

```csharp
CMsgSOIDOwner OwnerSoid { get; }
```

#### Property Value

- [CMsgSOIDOwner](/docs/api/protobufdefinitions/cmsgsoidowner)

### Version

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOCacheSubscribed.cs#L16)

```csharp
ulong Version { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

