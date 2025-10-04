---
title: CMsgSerializedSOCache_Cache
---

```csharp
public interface CMsgSerializedSOCache_Cache : ITypedProtobuf<CMsgSerializedSOCache_Cache>, INativeHandle
```

#### Implements

## Properties

**Id** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L16)

```csharp
ulong Id { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L13)

```csharp
uint Type { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**TypeCaches** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSerializedSOCache_TypeCache> TypeCaches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSerializedSOCache_TypeCache](/docs/api/shared/protobufdefinitions/cmsgserializedsocache_typecache)>

**Versions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache_Cache.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSerializedSOCache_Cache_Version> Versions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSerializedSOCache_Cache_Version](/docs/api/shared/protobufdefinitions/cmsgserializedsocache_cache_version)>

