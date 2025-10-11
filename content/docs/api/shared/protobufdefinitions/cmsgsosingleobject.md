---
title: CMsgSOSingleObject
---

```csharp
public interface CMsgSOSingleObject : ITypedProtobuf<CMsgSOSingleObject>, INativeHandle
```

#### Implements

## Properties

### **ObjectData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L16)

```csharp
byte[] ObjectData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **OwnerSoid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L22)

```csharp
CMsgSOIDOwner OwnerSoid { get; }
```

#### Property Value

- [CMsgSOIDOwner](/docs/api/shared/protobufdefinitions/cmsgsoidowner)

### **TypeId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L13)

```csharp
int TypeId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Version** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSOSingleObject.cs#L19)

```csharp
ulong Version { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

