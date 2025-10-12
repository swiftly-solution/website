---
title: CCSUsrMsg_ShootInfo
---

```csharp
public interface CCSUsrMsg_ShootInfo : ITypedProtobuf<CCSUsrMsg_ShootInfo>, INativeHandle, INetMessage<CCSUsrMsg_ShootInfo>, IDisposable
```

- Implements

## Properties

### **FrameNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L18)

```csharp
int FrameNumber { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HitboxTransforms** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgTransform> HitboxTransforms { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgTransform](/docs/api/shared/protobufdefinitions/cmsgtransform)>

### **ShootDir** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L27)

```csharp
QAngle ShootDir { get; set; }
```

- Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **ShootPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L24)

```csharp
Vector ShootPos { get; set; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

