---
title: CMsgSOMultipleObjects
---

```csharp
public interface CMsgSOMultipleObjects : ITypedProtobuf<CMsgSOMultipleObjects>, INativeHandle
```

#### Implements

## Properties

### ObjectsModified

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOMultipleObjects_SingleObject> ObjectsModified { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSOMultipleObjects_SingleObject](/docs/api/shared/protobufdefinitions/cmsgsomultipleobjects_singleobject)>

### OwnerSoid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L19)

```csharp
CMsgSOIDOwner OwnerSoid { get; }
```

#### Property Value

- [CMsgSOIDOwner](/docs/api/shared/protobufdefinitions/cmsgsoidowner)

### Version

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOMultipleObjects.cs#L16)

```csharp
ulong Version { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

