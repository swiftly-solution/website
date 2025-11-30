---
title: CCSUsrMsg_ShootInfo
---

# Interface CCSUsrMsg_ShootInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_ShootInfo : ITypedProtobuf<CCSUsrMsg_ShootInfo>, INativeHandle, INetMessage<CCSUsrMsg_ShootInfo>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_ShootInfo>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_ShootInfo>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### FrameNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L18)

```csharp
int FrameNumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HitboxTransforms

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgTransform> HitboxTransforms { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgTransform](/docs/api/protobufdefinitions/cmsgtransform)>

### ShootDir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L27)

```csharp
QAngle ShootDir { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### ShootPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ShootInfo.cs#L24)

```csharp
Vector ShootPos { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

