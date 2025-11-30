---
title: CMsgSOMultipleObjects
---

# Interface CMsgSOMultipleObjects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSOMultipleObjects : ITypedProtobuf<CMsgSOMultipleObjects>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSOMultipleObjects>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ObjectsModified

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOMultipleObjects_SingleObject> ObjectsModified { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSOMultipleObjects_SingleObject](/docs/api/protobufdefinitions/cmsgsomultipleobjects_singleobject)>

### OwnerSoid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L19)

```csharp
CMsgSOIDOwner OwnerSoid { get; }
```

#### Property Value

- [CMsgSOIDOwner](/docs/api/protobufdefinitions/cmsgsoidowner)

### Version

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L16)

```csharp
ulong Version { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

