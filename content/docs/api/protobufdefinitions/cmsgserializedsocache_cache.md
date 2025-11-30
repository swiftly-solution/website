---
title: CMsgSerializedSOCache_Cache
---

# Interface CMsgSerializedSOCache_Cache

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSerializedSOCache_Cache : ITypedProtobuf<CMsgSerializedSOCache_Cache>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSerializedSOCache_Cache>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Id

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L16)

```csharp
ulong Id { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L13)

```csharp
uint Type { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TypeCaches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSerializedSOCache_TypeCache> TypeCaches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSerializedSOCache_TypeCache](/docs/api/protobufdefinitions/cmsgserializedsocache_typecache)>

### Versions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSerializedSOCache_Cache_Version> Versions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSerializedSOCache_Cache_Version](/docs/api/protobufdefinitions/cmsgserializedsocache_cache_version)>

