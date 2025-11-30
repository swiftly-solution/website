---
title: CUserMsg_ParticleManager_UpdateParticleTransform
---

# Interface CUserMsg_ParticleManager_UpdateParticleTransform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMsg_ParticleManager_UpdateParticleTransform : ITypedProtobuf<CUserMsg_ParticleManager_UpdateParticleTransform>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CUserMsg_ParticleManager_UpdateParticleTransform>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L13)

```csharp
int ControlPoint { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InterpolationInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L22)

```csharp
float InterpolationInterval { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Orientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L19)

```csharp
CMsgQuaternion Orientation { get; }
```

#### Property Value

- [CMsgQuaternion](/docs/api/protobufdefinitions/cmsgquaternion)

### Position

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMsg_ParticleManager_UpdateParticleTransform.cs#L16)

```csharp
Vector Position { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

