---
title: CMsgSerializedSOCache
---

# Interface CMsgSerializedSOCache

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSerializedSOCache : ITypedProtobuf<CMsgSerializedSOCache>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSerializedSOCache>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Caches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSerializedSOCache_Cache> Caches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSerializedSOCache_Cache](/docs/api/protobufdefinitions/cmsgserializedsocache_cache)>

### FileVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L13)

```csharp
uint FileVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GcSocacheFileVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSerializedSOCache.cs#L19)

```csharp
uint GcSocacheFileVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

