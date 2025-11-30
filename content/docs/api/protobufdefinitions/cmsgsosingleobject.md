---
title: CMsgSOSingleObject
---

# Interface CMsgSOSingleObject

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSOSingleObject : ITypedProtobuf<CMsgSOSingleObject>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSOSingleObject>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ObjectData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L16)

```csharp
byte[] ObjectData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### OwnerSoid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L22)

```csharp
CMsgSOIDOwner OwnerSoid { get; }
```

#### Property Value

- [CMsgSOIDOwner](/docs/api/protobufdefinitions/cmsgsoidowner)

### TypeId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L13)

```csharp
int TypeId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Version

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L19)

```csharp
ulong Version { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

