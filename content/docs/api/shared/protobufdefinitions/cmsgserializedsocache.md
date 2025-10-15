---
title: CMsgSerializedSOCache
---

```csharp
public interface CMsgSerializedSOCache : ITypedProtobuf<CMsgSerializedSOCache>, INativeHandle
```

#### Implements

## Properties

### Caches

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSerializedSOCache_Cache> Caches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSerializedSOCache_Cache](/docs/api/shared/protobufdefinitions/cmsgserializedsocache_cache)>

### FileVersion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L13)

```csharp
uint FileVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GcSocacheFileVersion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L19)

```csharp
uint GcSocacheFileVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

