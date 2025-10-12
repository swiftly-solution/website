---
title: CMsgServerPeer
---

```csharp
public interface CMsgServerPeer : ITypedProtobuf<CMsgServerPeer>, INativeHandle
```

- Implements

## Properties

### **Ipc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerPeer.cs#L19)

```csharp
CMsgIPCAddress Ipc { get; }
```

- Property Value

- [CMsgIPCAddress](/docs/api/shared/protobufdefinitions/cmsgipcaddress)

### **IsListenserverHost** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerPeer.cs#L28)

```csharp
bool IsListenserverHost { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayerSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerPeer.cs#L13)

```csharp
int PlayerSlot { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Steamid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerPeer.cs#L16)

```csharp
ulong Steamid { get; set; }
```

- Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **TheyHearYou** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerPeer.cs#L22)

```csharp
bool TheyHearYou { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **YouHearThem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerPeer.cs#L25)

```csharp
bool YouHearThem { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

